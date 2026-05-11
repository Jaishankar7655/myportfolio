import { useEffect, useRef } from 'react'

const Background3D = () => {
  const canvasRef = useRef(null)
  const mouseRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animationId
    let particles = []
    let stars = []
    let time = 0

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createStars = () => {
      stars = []
      const count = Math.floor((canvas.width * canvas.height) / 3000)
      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.2 + 0.2,
          twinkleSpeed: Math.random() * 0.02 + 0.005,
          twinkleOffset: Math.random() * Math.PI * 2,
          opacity: Math.random() * 0.5 + 0.1,
        })
      }
    }

    const createParticles = () => {
      particles = []
      const count = Math.min(80, Math.floor((canvas.width * canvas.height) / 25000))
      for (let i = 0; i < count; i++) {
        const z = Math.random() * 1000 + 200
        particles.push({
          x: (Math.random() - 0.5) * canvas.width * 2,
          y: (Math.random() - 0.5) * canvas.height * 2,
          z,
          origX: (Math.random() - 0.5) * canvas.width * 2,
          origY: (Math.random() - 0.5) * canvas.height * 2,
          size: Math.random() * 2.5 + 1,
          speedZ: Math.random() * 0.3 + 0.1,
          orbitSpeed: (Math.random() - 0.5) * 0.002,
          orbitRadius: Math.random() * 100 + 50,
          orbitOffset: Math.random() * Math.PI * 2,
          hue: Math.random() > 0.6 ? 260 : Math.random() > 0.3 ? 230 : 200,
          saturation: Math.random() * 30 + 60,
          lightness: Math.random() * 20 + 50,
          pulseSpeed: Math.random() * 0.03 + 0.01,
          pulseOffset: Math.random() * Math.PI * 2,
        })
      }
    }

    const project = (x, y, z) => {
      const fov = 500
      const scale = fov / (fov + z)
      return {
        x: x * scale + canvas.width / 2,
        y: y * scale + canvas.height / 2,
        scale,
      }
    }

    const draw = () => {
      time += 0.01
      ctx.fillStyle = 'rgba(5, 8, 22, 0.15)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw stars
      stars.forEach((star) => {
        const twinkle = Math.sin(time * star.twinkleSpeed * 60 + star.twinkleOffset) * 0.5 + 0.5
        const opacity = star.opacity * (0.3 + twinkle * 0.7)
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.size * (0.8 + twinkle * 0.4), 0, Math.PI * 2)
        ctx.fillStyle = `rgba(200, 210, 255, ${opacity})`
        ctx.fill()
      })

      // Mouse parallax offset
      const mx = (mouseRef.current.x - canvas.width / 2) * 0.02
      const my = (mouseRef.current.y - canvas.height / 2) * 0.02

      // Sort by z for depth ordering
      const sorted = [...particles].sort((a, b) => b.z - a.z)

      sorted.forEach((p, i) => {
        // Orbit motion
        p.x = p.origX + Math.cos(time * p.orbitSpeed * 60 + p.orbitOffset) * p.orbitRadius
        p.y = p.origY + Math.sin(time * p.orbitSpeed * 60 + p.orbitOffset) * p.orbitRadius

        // Z oscillation
        p.z += Math.sin(time * 2 + i) * 0.15

        // Project 3D to 2D with mouse parallax
        const projected = project(p.x + mx * (1000 / p.z), p.y + my * (1000 / p.z), p.z)

        if (projected.x < -50 || projected.x > canvas.width + 50 || projected.y < -50 || projected.y > canvas.height + 50) return

        const pulse = Math.sin(time * p.pulseSpeed * 60 + p.pulseOffset) * 0.5 + 0.5
        const size = p.size * projected.scale * (0.8 + pulse * 0.4)
        const alpha = Math.min(1, projected.scale * 1.2) * (0.3 + pulse * 0.4)

        // Glow effect
        const gradient = ctx.createRadialGradient(projected.x, projected.y, 0, projected.x, projected.y, size * 6)
        gradient.addColorStop(0, `hsla(${p.hue}, ${p.saturation}%, ${p.lightness}%, ${alpha * 0.6})`)
        gradient.addColorStop(0.3, `hsla(${p.hue}, ${p.saturation}%, ${p.lightness}%, ${alpha * 0.2})`)
        gradient.addColorStop(1, `hsla(${p.hue}, ${p.saturation}%, ${p.lightness}%, 0)`)
        ctx.beginPath()
        ctx.arc(projected.x, projected.y, size * 6, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()

        // Core particle
        ctx.beginPath()
        ctx.arc(projected.x, projected.y, size, 0, Math.PI * 2)
        ctx.fillStyle = `hsla(${p.hue}, ${p.saturation}%, ${p.lightness + 20}%, ${alpha})`
        ctx.fill()

        // Connection lines (depth-aware)
        for (let j = i + 1; j < sorted.length; j++) {
          const q = sorted[j]
          const qProj = project(q.x + mx * (1000 / q.z), q.y + my * (1000 / q.z), q.z)
          const dx = projected.x - qProj.x
          const dy = projected.y - qProj.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          const maxDist = 150

          if (dist < maxDist) {
            const lineAlpha = (1 - dist / maxDist) * 0.12 * Math.min(projected.scale, qProj.scale)
            ctx.beginPath()
            ctx.moveTo(projected.x, projected.y)
            ctx.lineTo(qProj.x, qProj.y)
            ctx.strokeStyle = `hsla(240, 70%, 70%, ${lineAlpha})`
            ctx.lineWidth = 0.5 * Math.min(projected.scale, qProj.scale)
            ctx.stroke()
          }
        }
      })

      // Ambient nebula clouds
      const nebulaColors = [
        { x: canvas.width * 0.2, y: canvas.height * 0.3, hue: 260, radius: 300 },
        { x: canvas.width * 0.8, y: canvas.height * 0.7, hue: 220, radius: 250 },
        { x: canvas.width * 0.5, y: canvas.height * 0.5, hue: 280, radius: 350 },
      ]

      nebulaColors.forEach((nebula, i) => {
        const nx = nebula.x + Math.sin(time * 0.5 + i * 2) * 30
        const ny = nebula.y + Math.cos(time * 0.3 + i) * 20
        const gradient = ctx.createRadialGradient(nx, ny, 0, nx, ny, nebula.radius)
        gradient.addColorStop(0, `hsla(${nebula.hue}, 80%, 50%, 0.015)`)
        gradient.addColorStop(0.5, `hsla(${nebula.hue}, 60%, 30%, 0.008)`)
        gradient.addColorStop(1, `hsla(${nebula.hue}, 40%, 20%, 0)`)
        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, canvas.width, canvas.height)
      })

      animationId = requestAnimationFrame(draw)
    }

    const handleMouseMove = (e) => {
      mouseRef.current.x = e.clientX
      mouseRef.current.y = e.clientY
    }

    const handleTouchMove = (e) => {
      if (e.touches && e.touches.length > 0) {
        mouseRef.current.x = e.touches[0].clientX
        mouseRef.current.y = e.touches[0].clientY
      }
    }

    const handleResize = () => {
      resize()
      createStars()
      createParticles()
    }

    resize()
    createStars()
    createParticles()
    // Initial fill
    ctx.fillStyle = '#050816'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    draw()

    window.addEventListener('resize', handleResize)
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('touchmove', handleTouchMove, { passive: true })

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('touchmove', handleTouchMove)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 1 }}
    />
  )
}

export default Background3D
