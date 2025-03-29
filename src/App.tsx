import { RouterProvider, createBrowserRouter } from "react-router-dom";
import React from "react";
import Landing from "./pages/Landing";
import About from "./pages/About";
import MainLayout from "./components/MainLayout";
import PropertyDetails from "./pages/PropertyDetails";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Team from "./pages/Team";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <MainLayout>
          <Landing />
        </MainLayout>
      ),
    },
    {
      path: "/about",
      element: (
        <MainLayout>
          <About />
        </MainLayout>
      ),
    },
    {
      path: "/team",
      element: (
        <MainLayout>
          <Team />
        </MainLayout>
      ),
    },
    {
      path: "/services",
      element: (
        <MainLayout>
          <Services />
        </MainLayout>
      ),
    },
    {
      path: "/projects",
      element: (
        <MainLayout>
          <Projects />
        </MainLayout>
      ),
    },
    {
      path: "/contact",
      element: (
        <MainLayout>
          <Contact />
        </MainLayout>
      ),
    },
    {
      path: "/property-details/:id",
      element: (
        <MainLayout>
          <PropertyDetails />
        </MainLayout>
      ),
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
