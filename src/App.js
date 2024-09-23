import React from "react";
import Header from "./Sections/Header";
import Hero from "./Sections/Hero";
import About from "./Sections/About";
import Whyus from "./Sections/Whyus";
import Shop from "./Sections/Shop";
import Contact from "./Sections/Contact";
import Footer from "./Sections/Footer";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Whyus />
      <Shop />
      <Contact />
      <Footer />

      {/* <div>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/whyus" element={<Whyus />} />
          <Route path="shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>
      </div> */}
    </>
  );
};

export default App;
