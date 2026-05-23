import { Outlet } from "react-router-dom";

export default function GuestLayout() {
  return (
    <div className="w-full min-h-screen bg-white">
      {/* Navbar dan Footer tidak dipasang di sini jika sudah dipasang di LandingPage.jsx, 
          TAPI biasanya dipasang di sini agar otomatis muncul di semua halaman guest lainnya */}
      <Outlet />
    </div>
  );
}