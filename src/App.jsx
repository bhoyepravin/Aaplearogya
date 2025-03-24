import React from "react";
import Layout from "./layout/Layout";
import Herosection from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Aboutus from "./pages/Aboutus/Aboutus";
import Appointment from "./pages/Appointment/Appointment";
import Gallery from "./pages/Gallery/Gallery";
import Services from "./pages/Services/Services";
import Ourteam from "./pages/Ourteam/Ourteam";
import Contactus from "./pages/Contactus/Contactus";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="herosection" element={<Herosection />} />
        <Route path="aboutus" element={<Aboutus />} />
        <Route path="appointment" element={<Appointment />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="services" element={<Services />} />
        <Route path="ourteam" element={<Ourteam />} />
        <Route path="contactus" element={<Contactus />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
