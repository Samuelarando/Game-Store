

[![Framework](https://img.shields.io/badge/Framework-React%2018-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![Styling](https://img.shields.io/badge/Styling-Tailwind%20CSS-06B6D4?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)
[![Animation](https://img.shields.io/badge/Animation-Framer%20Motion-purple?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)
[![Deployment](https://img.shields.io/badge/Deployment-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/)

Platform e-commerce modular bertema *cyberpunk/dark-tech* untuk layanan *top-up* game otomatis dan jual-beli akun premium. Proyek ini dilengkapi dengan sistem filter produk yang dinamis serta animasi antarmuka premium menggunakan **Framer Motion**.

 **Live Demo:**[(https://game-store-iota-three.vercel.app/)]

---

##  Fitur Utama

* **Katalog Produk Modular:** Sistem grid produk interaktif yang menampilkan *item* berdasarkan kategori game secara *real-time*.
* **Advanced Filtering & Sorting:** Fitur pencarian instan, filter berdasarkan tipe (Top Up / Akun), serta pengurutan berdasarkan harga termurah atau termahal.
* **Cyberpunk Tab Switcher:** Perpindahan tab kategori produk dengan efek *sliding pill background* yang mulus.
* **Fluid Layout Transitions:** Transisi kartu produk menggunakan efek tumpuk (*stacked-to-grid*) yang dinamis saat halaman dimuat ulang atau saat detail produk ditutup.
* **Interactive Checkout Form:** Panel detail produk yang otomatis menyesuaikan formulir input berdasarkan tipe produk (input User ID/Zone ID khusus untuk *top-up*).

---

## Teknologi yang Digunakan

* **Front-End Library:** React.js (Hooks: `useState`, `useEffect`)
* **Styling & Layout:** Tailwind CSS (utilitas grid, backdrop blur, glassmorphism)
* **Animation Engine:** Framer Motion (AnimatePresence, LayoutId, Custom Variants)
* **Icons & Format:** React Icons / Emoji & `Intl.NumberFormat` untuk konversi Rupiah (IDR) otomatis.

---

## Cara Menjalankan Proyek Secara Lokal

Jika ingin menjalankan proyek ini di komputer lokal, ikuti langkah berikut:

1. **Clone Repository:**
   ```bash
   git clone [https://github.com/Samuelarando/Game-Store.git]