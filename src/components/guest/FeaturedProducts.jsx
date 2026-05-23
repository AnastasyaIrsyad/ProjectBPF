import React from "react";
import productsData from "../../data/products.json";
import { IoCartOutline } from "react-icons/io5";

export default function FeaturedProducts() {
  // Fungsi untuk format angka ke Rupiah
  const formatIDR = (price) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  // Mengambil 8 produk pertama dari JSON untuk ditampilkan di grid
  const products = productsData.slice(0, 8);

  return (
    <section id="best-sellers" className="py-20 bg-white scroll-mt-20"> 
    <div className="container mx-auto px-6 md:px-12">
        
        {/* Header Section */}
        <div className="mb-12 space-y-2 text-center md:text-left">
          <h2 className="text-[11px] font-bold uppercase tracking-[0.4em] text-emerald-500">
            Featured Selection
          </h2>
          <h3 className="text-3xl md:text-5xl font-black text-gray-900 uppercase tracking-tighter">
            Produk <span className="text-emerald-500">Unggulan.</span>
          </h3>
        </div>

        {/* Grid Render (30 Poin) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              
              {/* 1. Elemen Gambar (DIUBAH KE PATH LOKAL) */}
              <div className="relative aspect-square mb-4 overflow-hidden bg-gray-100 border border-gray-100">
                <img 
                  src={product.image} 
                  alt={product.tittle}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.target.src = "https://placehold.co/500x500?text=Image+Not+Found";
                  }}
                />
                {/* Hover Cart Button */}
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <button className="w-full bg-white text-gray-900 py-3 text-[10px] font-bold uppercase tracking-widest flex items-center justify-center gap-2 shadow-xl hover:bg-black hover:text-white transition-all">
                    <IoCartOutline size={16} />
                    Add To Cart
                  </button>
                </div>
              </div>

              {/* 2. Elemen Nama Produk & Info Tambahan */}
              <div className="space-y-1">
                <div className="flex justify-between items-start">
                  <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest">
                    {product.brand}
                  </p>
                  <span className="text-[8px] bg-gray-100 px-1.5 py-0.5 rounded text-gray-500 uppercase font-bold">
                    {product.category}
                  </span>
                </div>
                
                <h4 className="text-sm font-bold text-gray-900 uppercase tracking-tight group-hover:text-emerald-600 transition-colors truncate">
                  {product.tittle}
                </h4>

                {/* 3. Elemen Harga */}
                <div className="flex justify-between items-center pt-1">
                  <p className="text-emerald-600 font-black text-base">
                    {formatIDR(product.price)}
                  </p>
                  <p className="text-[10px] text-gray-400 font-medium">
                    Stock: {product.stock}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Footer Section Grid */}
        <div className="mt-16 pt-10 border-t border-gray-100 text-center">
          <button className="text-[11px] font-bold uppercase tracking-[0.3em] text-gray-400 hover:text-black transition-all">
            Explore All Products →
          </button>
        </div>

      </div>
    </section>
  );
}