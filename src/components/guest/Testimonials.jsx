import React from "react";

export default function Testimonials() {
  // Data JSON Testimoni (5 Item sesuai instruksi)
  const reviews = [
    {
      id: 1,
      name: "Andi Wijaya",
      review: "Makanan di Sedap benar-benar autentik! Nasi Goreng Spesialnya adalah yang terbaik yang pernah saya coba di Jakarta.",
      role: "Food Enthusiast"
    },
    {
      id: 2,
      name: "Siti Aminah",
      review: "Pelayanannya sangat cepat dan ramah. Es Jeruk Perasnya sangat segar, cocok sekali diminum saat siang hari.",
      role: "Ibu Rumah Tangga"
    },
    {
      id: 3,
      name: "Budi Santoso",
      review: "Tempat favorit untuk makan siang bareng rekan kerja. Harga sangat terjangkau dengan porsi yang mengenyangkan.",
      role: "Karyawan Swasta"
    },
    {
      id: 4,
      name: "Dewi Lestari",
      review: "Rendang Sapinya juara! Bumbunya meresap sampai ke dalam. Pengirimannya juga rapi dan tetap hangat sampai rumah.",
      role: "Designer"
    },
    {
      id: 5,
      name: "Rian Pratama",
      review: "Aplikasi yang sangat membantu buat cari makan enak tanpa ribet. Menu-menunya selalu update dan banyak promo.",
      role: "Mahasiswa"
    }
  ];

  return (
    <section className="py-24 bg-[#FDFDFD] border-t border-gray-50">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Header Section */}
        <div className="text-center mb-16 space-y-3">
          <span className="text-emerald-500 font-bold uppercase tracking-[0.3em] text-[10px]">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 uppercase tracking-tighter">
            Apa Kata <span className="text-emerald-500">Mereka.</span>
          </h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto mt-4"></div>
        </div>

        {/* Grid Testimoni (20 Poin) */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {reviews.map((item) => (
            <div key={item.id} className="bg-white p-8 border border-gray-100 flex flex-col items-center text-center space-y-4 hover:shadow-xl transition-all duration-300 group">
              
              {/* 1. Elemen Avatar (Menggunakan Generator) */}
              <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-emerald-500 p-1">
  <img 
    src={item.name === "Siti Aminah" ? "/img/Saira.jpg" : `https://ui-avatars.com/api/?name=${item.name}&background=10b981&color=fff&bold=true`} 
    alt={item.name}
    className="w-full h-full rounded-full object-cover group-hover:scale-110 transition-transform"
    onError={(e) => {
      e.target.src = `https://ui-avatars.com/api/?name=${item.name}&background=10b981&color=fff&bold=true`;
    }}
  />
</div>

              {/* 2. Elemen Nama & Role */}
              <div className="space-y-1">
                <h4 className="font-bold text-gray-900 text-sm uppercase tracking-tight">
                  {item.name}
                </h4>
                <p className="text-[10px] text-emerald-500 font-medium uppercase tracking-widest">
                  {item.role}
                </p>
              </div>

              {/* 3. Elemen Isi Ulasan */}
              <p className="text-gray-500 text-xs italic leading-relaxed pt-2 border-t border-gray-50">
                "{item.review}"
              </p>

              {/* Rating Bintang (Opsional untuk mempercantik) */}
              <div className="flex text-yellow-400 pt-2">
                {"★★★★★".split("").map((star, i) => (
                  <span key={i} className="text-xs">{star}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}