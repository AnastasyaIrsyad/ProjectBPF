import React from "react";

export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center gap-16">
          
          {/* Sisi Kiri: Gambar Dekoratif */}
          <div className="w-full md:w-1/2 relative">
            <div className="relative z-10 overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop" 
                alt="Cooking Process" 
                className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Dekorasi Bingkai di Belakang */}
            <div className="absolute -bottom-6 -left-6 w-64 h-64 bg-emerald-50 -z-10 rounded-2xl border border-emerald-100"></div>
          </div>

          {/* Sisi Kanan: Penjelasan & Nilai Keunggulan (10 Poin) */}
          <div className="w-full md:w-1/2 space-y-6">
            <div className="space-y-2">
              <span className="text-emerald-500 font-bold uppercase tracking-[0.3em] text-[10px]">
                Our Story
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight uppercase tracking-tighter">
                Lebih dari Sekedar <br /> Rasa <span className="text-emerald-500">Sedap.</span>
              </h2>
            </div>

            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              Sedap adalah platform kuliner modern yang lahir dari kecintaan kami terhadap cita rasa autentik Nusantara dan dunia. Kami percaya bahwa makanan berkualitas adalah hak setiap orang, dan kami hadir untuk menjembatani resep tradisional dengan sentuhan teknologi.
            </p>

            {/* Daftar Keunggulan */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <div className="space-y-2">
                <h4 className="font-bold text-gray-900 uppercase text-xs tracking-widest flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                  Bahan Organik
                </h4>
                <p className="text-[11px] text-gray-500">Kami bekerja sama langsung dengan petani lokal untuk memastikan bahan segar setiap hari.</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-bold text-gray-900 uppercase text-xs tracking-widest flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                  Koki Berpengalaman
                </h4>
                <p className="text-[11px] text-gray-500">Setiap hidangan diracik oleh tangan ahli yang mengutamakan standar kebersihan bintang lima.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}