import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Nav from "./components/Nav.jsx";
import About from "./components/About.jsx";
import Services from "./components/Services.jsx";
import Blogs from "./components/Blogs.jsx";
import Contact from "./components/Contact.jsx";
import Mega from "./components/Mega.jsx";
import Home from "./components/Home.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        {" "}
        <Nav /> <Home />{" "}
      </>
    ),
    // children: [
    //   {
    //     path: "mega",
    //     element: <><Mega/> </>,
    //   }
    // ]
  },
  {
    path: "/mega",
    element: (
      <>
        <Mega />{" "}
      </>
    ),
  },
  {
    path: "/About",
    element: (
      <>
        {" "}
        <Nav /> <About />{" "}
      </>
    ),
  },
  {
    path: "/Services",
    element: (
      <>
        {" "}
        <Nav /> <Services />{" "}
      </>
    ),
  },
  {
    path: "/Blogs",
    element: (
      <>
        {" "}
        <Nav /> <Blogs />{" "}
      </>
    ),
  },
  {
    path: "/Contact",
    element: (
      <>
        {" "}
        <Nav /> <Contact />{" "}
      </>
    ),
  },
  {
    path: "/mega",
    element: (
      <>
        <Mega />{" "}
      </>
    ),
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode  >
    
    <RouterProvider router={router} />
  
  </StrictMode>
);
