import React from "react";
import { IoCartOutline } from "react-icons/io5";

export default function ProductCard({ product }) {
  // Fungsi format rupiah
  const formatIDR = (price) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="group bg-white border border-gray-100 p-4 transition-all hover:shadow-xl relative">
      {/* Badge Kategori */}
      <span className="absolute top-4 left-4 bg-emerald-500 text-white text-[8px] font-bold px-2 py-1 uppercase tracking-widest z-10">
        {product.category}
      </span>

      {/* Area Gambar (Placeholder karena di JSON tidak ada image) */}
      <div className="w-full h-48 bg-gray-50 mb-4 overflow-hidden flex items-center justify-center relative">
        <img 
          src={`https://ui-avatars.com/api/?name=${product.tittle}&background=CDDCE0&color=2D3748&size=512`} 
          alt={product.tittle}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>

      {/* Info Produk */}
      <div className="space-y-1">
        <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">
          {product.brand}
        </p>
        <h3 className="text-sm font-bold text-gray-900 truncate uppercase tracking-tighter">
          {product.tittle}
        </h3>
        <div className="flex justify-between items-center pt-2">
          <span className="text-emerald-600 font-black text-sm">
            {formatIDR(product.price)}
          </span>
          <span className="text-[10px] text-gray-400">
            Stok: {product.stock}
          </span>
        </div>
      </div>

      {/* Tombol Add to Cart */}
      <button className="w-full mt-4 bg-gray-900 text-white py-2 flex items-center justify-center gap-2 text-[10px] font-bold uppercase tracking-widest hover:bg-emerald-600 transition-colors">
        <IoCartOutline size={14} />
        Add to Cart
      </button>
    </div>
  );
}