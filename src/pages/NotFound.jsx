import PageHeader from "../components/PageHeader";
import { Link } from "react-router-dom"; // Pastikan kamu menggunakan react-router-dom

export default function NotFound() {
    return (
        <div className="min-h-screen bg-pink-50 flex flex-col">
            {/* Header tetap muncul di atas */}
            <PageHeader />

            <div className="flex-grow flex items-center justify-center p-6">
                <div className="max-w-md w-full text-center">
                    {/* Ilustrasi Angka 404 */}
                    <div className="relative">
                        <h1 className="text-[12rem] font-black text-pink-100 leading-none">
                            404
                        </h1>
                        <p className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-pink-500 mt-8">
                            Oops!
                        </p>
                    </div>

                    {/* Pesan Kesalahan */}
                    <div className="mt-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-3">
                            Halaman Tidak Ditemukan
                        </h2>
                        <p className="text-gray-500 mb-8">
                            Sepertinya kamu tersesat di tempat yang sangat merah muda ini. 
                            Halaman yang kamu cari tidak ada atau telah dipindahkan.
                        </p>
                    </div>

                    {/* Tombol Kembali */}
                    <Link 
                        to="/" 
                        className="inline-flex items-center gap-2 bg-pink-500 text-white px-8 py-3 rounded-2xl font-bold shadow-lg shadow-pink-200 hover:bg-pink-600 hover:-translate-y-1 transition-all active:scale-95"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Kembali ke Dashboard
                    </Link>

                    {/* Dekorasi Tambahan */}
                    <div className="mt-12 flex justify-center gap-4">
                        <div className="w-2 h-2 rounded-full bg-pink-200"></div>
                        <div className="w-2 h-2 rounded-full bg-pink-300"></div>
                        <div className="w-2 h-2 rounded-full bg-pink-200"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}