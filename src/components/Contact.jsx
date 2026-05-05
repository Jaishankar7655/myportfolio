import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FiMail, FiMapPin, FiGithub, FiLinkedin, FiExternalLink } from 'react-icons/fi'
import { FaInstagram } from 'react-icons/fa'

gsap.registerPlugin(ScrollTrigger)

const Contact = () => {
  const sectionRef = useRef(null)
  const headingRef = useRef(null)
  const underlineRef = useRef(null)
  const descRef = useRef(null)
  const infoCardRef = useRef(null)
  const connectCardRef = useRef(null)
  const contactItemsRef = useRef([])
  const socialIconsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section number & heading
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'top 30%',
          toggleActions: 'play none none none',
        },
      })

      tl.from(headingRef.current, {
        y: 60,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      })
        .from(
          underlineRef.current,
          {
            scaleX: 0,
            transformOrigin: 'left center',
            duration: 0.5,
            ease: 'power2.out',
          },
          '-=0.4'
        )
        .from(
          descRef.current,
          {
            y: 30,
            opacity: 0,
            duration: 0.6,
            ease: 'power2.out',
          },
          '-=0.3'
        )

      // Info card slides in from left
      gsap.from(infoCardRef.current, {
        x: -80,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: infoCardRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      })

      // Each contact detail item staggers in
      gsap.from(contactItemsRef.current, {
        x: -30,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: infoCardRef.current,
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
      })

      // Connect card slides in from right
      gsap.from(connectCardRef.current, {
        x: 80,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: connectCardRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      })

      // Social icons pop in with stagger
      gsap.from(socialIconsRef.current, {
        scale: 0,
        opacity: 0,
        duration: 0.4,
        stagger: 0.08,
        ease: 'back.out(2)',
        scrollTrigger: {
          trigger: connectCardRef.current,
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const contactInfo = [
    { icon: FiMail, label: 'Email', value: 'Jaishankar7655@gmail.com', href: 'mailto:Jaishankar7655@gmail.com' },
    { icon: FiMapPin, label: 'Location', value: 'Bhopal, Madhya Pradesh, India' },
    { icon: FiGithub, label: 'GitHub', value: 'github.com/Jaishankar7655', href: 'https://github.com/Jaishankar7655' },
    { icon: FiLinkedin, label: 'LinkedIn', value: 'Jaishankar Jaiswal', href: 'https://www.linkedin.com/in/jaishankar-jaiswal-14253926b' },
    { icon: FiExternalLink, label: 'Portfolio', value: 'codeformme.netlify.app', href: 'https://codeformme.netlify.app/' },
  ]

  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/Jaishankar7655', bg: 'hover:bg-brand-lime' },
    { icon: FiLinkedin, href: 'https://www.linkedin.com/in/jaishankar-jaiswal-14253926b', bg: 'hover:bg-brand-blue' },
    { icon: FaInstagram, href: 'https://www.instagram.com/mr._jaishankar_jaiswal', bg: 'hover:bg-brand-pink' },
    { icon: FiMail, href: 'mailto:Jaishankar7655@gmail.com', bg: 'hover:bg-brand-yellow' },
  ]

  return (
    <section id="contact" className="relative py-20 md:py-28" ref={sectionRef}>
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-2" ref={headingRef}>
            <span className="section-num">06</span>
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-brutal-black tracking-tight">CONTACT</h2>
              <div ref={underlineRef} className="w-16 h-2 bg-brand-purple border-2 border-brutal-black mt-2" />
            </div>
          </div>
          <p ref={descRef} className="text-brutal-black/60 text-lg mt-4 max-w-xl">
            Interested in collaborating on a project or have an opportunity to discuss? I'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Contact Info Card */}
          <div ref={infoCardRef} className="space-y-5">
            <div className="brutal-card p-6 bg-brand-yellow">
              <h3 className="font-black text-sm uppercase tracking-[0.15em] text-brutal-black mb-5">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, i) => (
                  <div
                    key={info.label}
                    ref={(el) => (contactItemsRef.current[i] = el)}
                    className="flex items-center gap-3"
                  >
                    <div className="w-9 h-9 bg-brutal-black flex items-center justify-center flex-shrink-0 border-2 border-brutal-black">
                      <info.icon size={16} className="text-brand-yellow" />
                    </div>
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-widest text-brutal-black/40">{info.label}</p>
                      {info.href ? (
                        <a href={info.href} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-brutal-black hover:underline">{info.value}</a>
                      ) : (
                        <p className="text-sm font-bold text-brutal-black">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Connect Card */}
          <div ref={connectCardRef}>
            <div className="brutal-card p-5">
              <span className="text-[10px] font-black uppercase tracking-widest text-brutal-black/40 mb-3 block">Connect</span>
              <div className="flex gap-2">
                {socialLinks.map((s, i) => (
                  <a
                    key={i}
                    ref={(el) => (socialIconsRef.current[i] = el)}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 border-[3px] border-brutal-black bg-brutal-white shadow-brutal-sm flex items-center justify-center text-brutal-black transition-colors ${s.bg}`}
                  >
                    <s.icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
