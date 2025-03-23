import { RouterProvider, createBrowserRouter } from "react-router-dom";
import React from "react";
import Landing from "./pages/Landing";
import About from "./pages/About";
import MainLayout from "./components/MainLayout";
import PropertyDetails from "./pages/PropertyDetails";

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
