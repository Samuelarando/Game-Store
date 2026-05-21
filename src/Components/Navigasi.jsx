import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Auto close saat resize ke desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 🔥 Fungsi Pintar: Jika di luar Home, pindah ke Home dulu baru Scroll
  const handleNavigation = (e, targetId) => {
    e.preventDefault();
    setOpen(false);

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 150);
    } else {
      const element = document.getElementById(targetId);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed top-6 left-0 w-full z-50 flex justify-center px-4">
      <div className="relative w-full max-w-5xl">

        {/* 🔥 GRADIENT GLOW BACKGROUND */}
        <div className="absolute -inset-[2px] rounded-full bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 opacity-30 blur-xl animate-[gradientMove_6s_ease_infinite] bg-[length:200%_200%]" />

        {/* NAVBAR MAIN CONTAINER */}
        <nav className="relative w-full bg-white/80 backdrop-blur-xl border border-white/60 shadow-[0_10px_40px_rgba(0,0,0,0.08)] rounded-full px-6 py-3 flex items-center justify-between">
          
          {/* LOGO: Klik untuk kembali ke atas */}
          <Link to="/" className="text-sm font-black tracking-wider text-gray-950 uppercase">
            Johen<span className="text-purple-600">Store🎮</span>
          </Link>

          {/* 💻 DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-wider text-gray-600">
            <Link to="/" className="hover:text-black transition">
              Home
            </Link>

            <a href="#produk-unggulan" onClick={(e) => handleNavigation(e, "produk-unggulan")} className="hover:text-black transition">
              Products
            </a>

            <a href="#testimonials" onClick={(e) => handleNavigation(e, "testimonials")} className="hover:text-black transition">
              Testimoni
            </a>

            {/* Hubungkan ke halaman pencarian status transaksi */}
            <Link to="/cek-status" className="text-purple-600 hover:text-purple-800 transition font-extrabold">
              🔍 Cek Transaksi
            </Link>

            {/* Tombol Utama */}
            <a 
              href="#produk-unggulan" 
              onClick={(e) => handleNavigation(e, "produk-unggulan")}
              className="bg-gray-950 text-white px-5 py-2.5 rounded-full hover:bg-purple-600 hover:shadow-[0_0_20px_rgba(147,51,234,0.4)] transition duration-300"
            >
              ⚡ Top Up Sekarang
            </a>
          </div>

          {/* 📱 MOBILE HAMBURGER BUTTON */}
          <button className="md:hidden text-gray-800 text-xl font-bold p-1" onClick={() => setOpen(!open)}>
            {open ? "✕" : "☰"}
          </button>
        </nav>

        {/* 📱 MOBILE DROPDOWN */}
        <div
          className={`
            md:hidden absolute top-full right-4 mt-3 w-64 bg-white/95 backdrop-blur-xl border border-gray-100 rounded-2xl shadow-2xl p-5 flex flex-col gap-4 text-sm font-bold uppercase tracking-wide text-gray-800 origin-top-right transition-all duration-300 ease-out
            ${open ? "opacity-100 translate-y-0 scale-100 pointer-events-auto" : "opacity-0 -translate-y-2 scale-95 pointer-events-none"}
          `}
        >
          <Link to="/" onClick={() => setOpen(false)} className="hover:text-purple-600 transition py-1">
            Home
          </Link>

          <a href="#produk-unggulan" onClick={(e) => handleNavigation(e, "produk-unggulan")} className="hover:text-purple-600 transition py-1">
            Products
          </a>

          <a href="#testimonials" onClick={(e) => handleNavigation(e, "testimonials")} className="hover:text-purple-600 transition py-1">
            Testimoni
          </a>

          <Link to="/cek-status" onClick={() => setOpen(false)} className="text-purple-600 hover:text-purple-800 transition py-1 border-t border-gray-100 pt-3">
            🔍 Cek Transaksi
          </Link>

          <a
            href="#produk-unggulan"
            onClick={(e) => handleNavigation(e, "produk-unggulan")}
            className="bg-gray-950 text-white py-3 rounded-xl text-center mt-2 hover:bg-purple-600 transition shadow-md"
          >
            ⚡ Top Up Sekarang
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;