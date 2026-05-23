import React from "react";
import Navbar from "../../components/guest/Navbar"; // Impor Navbar
import Hero from "../../components/guest/Hero";     // Impor Hero
import About from "../../components/guest/About"; 
import FeaturedProducts from "../../components/guest/FeaturedProducts";
import Footer from "../../components/guest/Footer"; // Import Footer
import Testimonials from "../../components/guest/Testimonials";

export default function LandingPage() {
  return (
    <div>
      {/* 1. Navbar muncul paling atas */}
      <Navbar />

      {/* 2. Hero muncul tepat di bawah Navbar sesuai instruksi */}
      <Hero />

      {/* Nanti komponen lain seperti About, Produk, dll ditaruh di bawah sini */}
      <About />
      <FeaturedProducts />
      <Testimonials />
      <Footer />
      
      {/* <Products /> */}
    </div>
  );
}