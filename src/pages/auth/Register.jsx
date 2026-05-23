import React from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        // Di sini biasanya ada logika API untuk mendaftar
        // Untuk sekarang, langsung arahkan ke guest
        navigate("/guest");
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-xl rounded-2xl border border-gray-100">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tighter">
                    Join <span className="text-emerald-500">Us ✨</span>
                </h2>
                <p className="text-gray-400 text-[10px] font-bold uppercase tracking-[0.2em] mt-2">
                    Buat akun Sedap. anda sekarang
                </p>
            </div>

            <form onSubmit={handleRegister}>
                {/* EMAIL ADDRESS */}
                <div className="mb-5">
                    <label
                        htmlFor="email"
                        className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2"
                    >
                        Email Address
                    </label>
                    <input
                        type="email"
                        id="email"
                        required
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all text-sm"
                        placeholder="you@example.com"
                    />
                </div>

                {/* PASSWORD */}
                <div className="mb-5">
                    <label
                        htmlFor="password"
                        className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2"
                    >
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        required
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all text-sm"
                        placeholder="********"
                    />
                </div>

                {/* CONFIRM PASSWORD */}
                <div className="mb-6">
                    <label
                        htmlFor="confirmPassword"
                        className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2"
                    >
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        id="confirmPassword"
                        required
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all text-sm"
                        placeholder="********"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-gray-900 hover:bg-emerald-600 text-white font-bold py-4 rounded-xl text-[11px] uppercase tracking-[0.2em] transition-all duration-300 shadow-lg shadow-gray-200 active:scale-[0.98]"
                >
                    Register Now
                </button>
            </form>

            <p className="text-center mt-8 text-[10px] text-gray-400 font-medium uppercase tracking-widest">
                Sudah punya akun?{" "}
                <span 
                    onClick={() => navigate("/login")} 
                    className="text-emerald-500 cursor-pointer hover:underline"
                >
                    Login di sini
                </span>
            </p>
        </div>
    );
}