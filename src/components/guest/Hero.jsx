import React from "react";

export default function Hero() {
  return (
    <section className="relative w-full h-[500px] md:h-[600px] bg-[#CDDCE0] flex items-center overflow-hidden">
      {/* Container Konten */}
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between z-10">
        
        {/* Sisi Kiri: Headline & Subheadline (10 poin) */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-4 md:space-y-6">
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] text-gray-600 block mb-2">
            New Arrivals
          </span>
          
          <h2 className="text-4xl md:text-7xl font-black leading-none text-gray-900 tracking-tighter uppercase">
            New Style <br /> 
            <span className="text-emerald-600">For Food.</span>
          </h2>
          
          <p className="text-gray-600 text-xs md:text-sm max-w-md leading-relaxed italic">
            "Nikmati kelezatan autentik dengan sentuhan modern. Sedap menghadirkan cita rasa bintang lima langsung ke meja makan Anda setiap hari."
          </p>

          <div className="pt-4">
            <button className="border-2 border-black px-8 py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300">
              Shop Now
            </button>
          </div>
        </div>

        {/* Sisi Kanan: Gambar/Ilustrasi (10 poin) */}
        <div className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center relative">
          {/* Kamu bisa ganti src ini dengan gambar makanan yang transparan (PNG) */}
          <img 
            src="https://www.pngarts.com/files/3/Food-Transparent-Background-PNG.png" 
            alt="Hero Food" 
            className="w-4/5 md:w-full max-w-lg object-contain drop-shadow-2xl transform hover:scale-105 transition-transform duration-500"
          />
          
          {/* Dekorasi lingkaran di belakang gambar agar mirip template EREN */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-96 md:h-96 bg-white/20 rounded-full blur-3xl -z-10"></div>
        </div>
      </div>

      {/* Ornamen Garis Estetik (Opsional - untuk gaya template EREN) */}
      <div className="absolute bottom-0 right-0 w-24 h-full bg-white/5 pointer-events-none hidden md:block"></div>
    </section>
  );
}