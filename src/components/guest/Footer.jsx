import React from "react";
import { Link } from "react-router-dom";
import { IoLogoFacebook, IoLogoInstagram, IoLogoTwitter, IoLogoYoutube } from "react-icons/io5";

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white pt-16 pb-8 font-sans">
      <div className="container mx-auto px-6 md:px-12">
        {/* GRID UTAMA (4 KOLOM) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Kolom 1: About Store */}
          <div className="space-y-6">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.3em] border-b border-gray-700 pb-4">
              About Store
            </h4>
            <div className="space-y-4 text-gray-400 text-xs leading-relaxed">
              <p>📍 Jl. Kuliner Sedap No. 123, Jakarta Selatan</p>
              <p>📞 +62 21 1234 5678</p>
              <p>✉️ contact@sedaptheme.com</p>
              <div className="flex gap-4 pt-2">
                <IoLogoFacebook className="hover:text-emerald-500 cursor-pointer transition" size={18} />
                <IoLogoInstagram className="hover:text-emerald-500 cursor-pointer transition" size={18} />
                <IoLogoTwitter className="hover:text-emerald-500 cursor-pointer transition" size={18} />
                <IoLogoYoutube className="hover:text-emerald-500 cursor-pointer transition" size={18} />
              </div>
            </div>
          </div>

          {/* Kolom 2: My Account */}
          <div className="space-y-6">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.3em] border-b border-gray-700 pb-4">
              My Account
            </h4>
            <ul className="space-y-3 text-gray-400 text-[11px] uppercase tracking-widest">
              <li><Link to="#" className="hover:text-white transition">My Account</Link></li>
              <li><Link to="/login" className="hover:text-white transition">Login</Link></li>
              <li><Link to="#" className="hover:text-white transition">My Cart</Link></li>
              <li><Link to="#" className="hover:text-white transition">Wishlist</Link></li>
              <li><Link to="#" className="hover:text-white transition">Checkout</Link></li>
            </ul>
          </div>

          {/* Kolom 3: Information */}
          <div className="space-y-6">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.3em] border-b border-gray-700 pb-4">
              Information
            </h4>
            <ul className="space-y-3 text-gray-400 text-[11px] uppercase tracking-widest">
              <li><Link to="#" className="hover:text-white transition">Privacy Policy</Link></li>
              <li><Link to="#" className="hover:text-white transition">Terms & Conditions</Link></li>
              <li><Link to="#" className="hover:text-white transition">Contact Us</Link></li>
              <li><Link to="#" className="hover:text-white transition">Latest News</Link></li>
              <li><Link to="#" className="hover:text-white transition">Our Sitemap</Link></li>
            </ul>
          </div>

          {/* Kolom 4: Customer Service */}
          <div className="space-y-6">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.3em] border-b border-gray-700 pb-4">
              Customer Service
            </h4>
            <ul className="space-y-3 text-gray-400 text-[11px] uppercase tracking-widest">
              <li><Link to="#" className="hover:text-white transition">Shipping Policy</Link></li>
              <li><Link to="#" className="hover:text-white transition">Compensation First</Link></li>
              <li><Link to="#" className="hover:text-white transition">My Account</Link></li>
              <li><Link to="#" className="hover:text-white transition">Return Policy</Link></li>
              <li><Link to="#" className="hover:text-white transition">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR (Copyright & Payment) */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] text-gray-500 uppercase tracking-widest">
            © 2026 <span className="text-white font-bold">SEDAP</span>. All Rights Reserved. Created by Tasya.
          </p>
          
          {/* Ikon Pembayaran Sesuai image_6320b8.png */}
          <div className="flex gap-2 opacity-70 grayscale hover:grayscale-0 transition-all">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-4 bg-white px-1 rounded" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-4 bg-white px-1 rounded" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="Paypal" className="h-4 bg-white px-1 rounded" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_Pay_logo.svg" alt="Apple Pay" className="h-4 bg-white px-1 rounded" />
          </div>
        </div>
      </div>
    </footer>
  );
}