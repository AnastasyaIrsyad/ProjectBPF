import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BsFillExclamationDiamondFill } from "react-icons/bs";
import { ImSpinner2 } from "react-icons/im";

export default function Login() {
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const [dataForm, setDataForm] = useState({
        username: "", // Diubah dari email ke username agar sesuai API DummyJSON
        password: "",
    });

    // HANDLE INPUT
    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setDataForm({
            ...dataForm,
            [name]: value,
        });
    };

    // HANDLE SUBMIT
    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);
        setError(""); // Reset error setiap kali submit

        axios
            .post("https://dummyjson.com/user/login", {
                username: dataForm.username,
                password: dataForm.password,
            })
            .then((response) => {
                // Jika login sukses (status 200)
                if (response.status === 200) {
                    // ARAHKAN KE HALAMAN GUEST
                    navigate("/guest");
                } else {
                    setError("Login gagal, silakan coba lagi.");
                }
            })
            .catch((err) => {
                if (err.response) {
                    // Pesan error dari API (misal: "Invalid credentials")
                    setError(err.response.data.message || "Terjadi kesalahan pada server");
                } else {
                    setError(err.message || "Koneksi gagal");
                }
            })
            .finally(() => {
                setLoading(false);
            });
    };

    // ERROR COMPONENT
    const errorInfo = error ? (
        <div className="bg-red-100 mb-5 p-4 text-sm font-medium text-red-700 rounded-lg flex items-center border border-red-200">
            <BsFillExclamationDiamondFill className="text-red-600 me-2 text-lg" />
            {error}
        </div>
    ) : null;

    // LOADING COMPONENT
    const loadingInfo = loading ? (
        <div className="bg-emerald-50 mb-5 p-4 text-sm font-medium text-emerald-700 rounded-lg flex items-center border border-emerald-100">
            <ImSpinner2 className="me-2 animate-spin text-emerald-600" />
            Memverifikasi data, mohon tunggu...
        </div>
    ) : null;

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-xl rounded-2xl border border-gray-100">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tighter">
                    Welcome <span className="text-emerald-500">Back.</span>
                </h2>
                <p className="text-gray-400 text-[10px] font-bold uppercase tracking-[0.2em] mt-2">
                    Masuk ke akun Sedap. Anda
                </p>
            </div>

            {errorInfo}
            {loadingInfo}

            <form onSubmit={handleSubmit} className="space-y-5">
                {/* USERNAME */}
                <div>
                    <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">
                        Username
                    </label>
                    <input
                        type="text"
                        name="username"
                        required
                        value={dataForm.username}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all text-sm"
                        placeholder="Contoh: emilys"
                    />
                </div>

                {/* PASSWORD */}
                <div>
                    <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">
                        Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        required
                        value={dataForm.password}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all text-sm"
                        placeholder="********"
                    />
                </div>

                {/* SUBMIT BUTTON */}
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gray-900 hover:bg-emerald-600 text-white font-bold py-4 rounded-xl text-[11px] uppercase tracking-[0.2em] transition-all duration-300 shadow-lg shadow-gray-200 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {loading ? "Processing..." : "Sign In"}
                </button>
            </form>

            <p className="text-center mt-8 text-[10px] text-gray-400 font-medium uppercase tracking-widest">
                Belum punya akun? <span className="text-emerald-500 cursor-pointer hover:underline">Daftar sekarang</span>
            </p>
        </div>
    );
}