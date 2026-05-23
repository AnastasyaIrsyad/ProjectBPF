import React from "react";
import { Link } from "react-router-dom";
import { IoSearchOutline, IoCartOutline } from "react-icons/io5";

export default function Navbar() {
  return (
    <header className="w-full bg-white font-sans sticky top-0 z-50 shadow-sm">
      {/* TOP BAR */}
      <div className="hidden md:flex justify-between items-center px-12 py-2 border-b border-gray-100 text-[10px] tracking-[0.2em] text-gray-500 uppercase">
        <div className="flex gap-4">
          <span>English</span>
          <span>USD</span>
        </div>
        <div className="flex gap-6">
          <Link 
            to="/login" 
            className="hover:text-emerald-500 font-bold text-gray-900 transition-colors"
          >
            Login
          </Link>
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <div className="flex justify-between items-center px-6 md:px-12 py-4">
        
        {/* SISI KIRI KOSONG (Agar Logo & Menu bisa benar-benar di tengah) */}
        <div className="flex-1 md:block hidden"></div>

        {/* BAGIAN TENGAH: LOGO DAN MENU BERDAMPINGAN */}
        <div className="flex items-center gap-12 flex-[2] justify-center">
          {/* LOGO */}
          <div id="sidebar-logo" className="flex flex-col leading-tight items-end">
            <span
              id="logo-title"
              className="font-poppins-extrabold text-[24px] md:text-[30px] text-gray-900 leading-none"
            >
              Sedap <b id="logo-dot" className="text-emerald-500">.</b>
            </span>
            <span
              id="logo-subtitle"
              className="text-[8px] font-semibold text-gray-400 uppercase tracking-wider"
            >
              Modern Landing Page
            </span>
          </div>

          {/* PEMBATAS GARIS HALUS (Opsional agar lebih rapi) */}
          <div className="h-8 w-[1px] bg-gray-200 hidden md:block"></div>

          {/* NAV MENU */}
          <ul className="hidden md:flex items-center gap-8 text-[11px] font-bold uppercase tracking-[0.2em] text-gray-600">
            <li><Link to="/guest" className="hover:text-emerald-500 transition-colors duration-300">Home</Link></li>
            <li><Link to="#" className="hover:text-emerald-500 transition-colors duration-300">Our Menu</Link></li>
            <li>
  <a 
    href="#best-sellers" 
    className="hover:text-emerald-500 transition-colors duration-300"
  >
    Best Sellers
  </a>
</li>
            <li><Link to="#" className="hover:text-emerald-500 transition-colors duration-300">About</Link></li>
          </ul>
        </div>

        {/* ACTIONS (SISI KANAN) */}
        <div className="flex items-center gap-6 flex-1 justify-end">
          <button className="text-gray-800 hover:text-emerald-500">
            <IoSearchOutline size={20} />
          </button>
          <div className="relative text-gray-800 hover:text-emerald-500 cursor-pointer">
            <IoCartOutline size={22} />
            <span className="absolute -top-1 -right-2 bg-emerald-500 text-white text-[9px] w-4 h-4 flex items-center justify-center rounded-full">0</span>
          </div>
          <Link 
            to="/register" 
            className="hidden lg:block border-2 border-black px-5 py-2 text-[10px] font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300"
          >
            Register
          </Link>
        </div>
      </div>
    </header>
  );
}