import Home from "./home";
import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./pages/about";
import Liturgycalendar from "./pages/liturgycalendar";
import Gallery from "./pages/gallery";
import Masstiming from "./pages/masstiming";
import Prayerrequest from "./pages/prayerrequest";
import Parishdetails from "./pages/parishdetails";
import Contact from "./pages/contact";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/liturgycalendar" element={<Liturgycalendar />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/masstime" element={<Masstiming />} />
        <Route path="/prayer-request" element={<Prayerrequest />} />
        <Route path="/parish-details" element={<Parishdetails />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
