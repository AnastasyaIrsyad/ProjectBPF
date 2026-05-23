import PageHeader from "../components/PageHeader";
// Import tanpa kurung kurawal karena formatnya .json
import products from "../data/products.json";
import { Link } from "react-router-dom"; 

export default function Products() {
    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Header Halaman */}
            <PageHeader title="Products" breadcrumb="Product Catalog">
                <button className="bg-hijau text-white px-4 py-2 rounded-md font-bold hover:opacity-90 transition shadow-sm">
                    + Add Product
                </button>
            </PageHeader>

            <div className="p-10">
                {/* Kartu Tabel */}
                <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
                    {/* Judul Tabel */}
                    <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                        <div>
                            <h2 className="text-xl font-bold text-gray-800">All Products</h2>
                            <p className="text-sm text-gray-500">Menampilkan {products.length} menu restoran</p>
                        </div>
                        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">
                            Active Menu
                        </span>
                    </div>

                    {/* Area Tabel */}
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead className="bg-gray-50 text-gray-600 uppercase text-xs font-semibold">
                                <tr>
                                    <th className="px-6 py-4 text-center">ID</th>
                                    <th className="px-6 py-4">Product Name</th>
                                    <th className="px-6 py-4">Code</th>
                                    <th className="px-6 py-4">Category</th>
                                    <th className="px-6 py-4">Brand</th>
                                    <th className="px-6 py-4 text-right">Price</th>
                                    <th className="px-6 py-4 text-center">Stock</th>
                                    <th className="px-6 py-4 text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {products.map((item) => (
                                    <tr key={item.id} className="hover:bg-green-50/30 transition-colors">
                                        <td className="px-6 py-4 text-gray-400 text-sm text-center">#{item.id}</td>
                                        <td className="px-6 py-4 font-bold text-gray-800">
            <Link 
                to={`/products/${item.id}`} 
                className="text-emerald-500 hover:text-emerald-700 hover:underline transition"
            >
                {item.tittle} 
            </Link>
        </td>
                                        <td className="px-6 py-4">
                                            <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-mono font-bold border border-blue-200">
                                                {item.code}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-gray-600">
                                            <span className="text-xs bg-gray-100 px-2 py-1 rounded-md capitalize">
                                                {item.category}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-gray-500 italic text-sm">{item.brand}</td>
                                        <td className="px-6 py-4 font-bold text-hijau text-right">
                                            Rp {item.price.toLocaleString("id-ID")}
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            <span className={`px-3 py-1 rounded-full text-[11px] font-bold ${
                                                item.stock < 20 
                                                ? 'bg-red-100 text-red-600' 
                                                : 'bg-green-50 text-green-600'
                                            }`}>
                                                {item.stock} pcs
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            <div className="flex justify-center space-x-2">
                                                <button className="px-3 py-1 text-sm font-semibold text-blue-600 hover:bg-blue-50 rounded-md transition border border-blue-100">
                                                    Edit
                                                </button>
                                                <button className="px-3 py-1 text-sm font-semibold text-red-600 hover:bg-red-50 rounded-md transition border border-red-100">
                                                    Delete
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Footer Tabel */}
                    <div className="p-4 bg-gray-50 border-t border-gray-100 text-center">
                        <p className="text-xs text-gray-400 font-light italic">
                            Sedap Restaurant Admin Dashboard • 2025 Product Catalog
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}