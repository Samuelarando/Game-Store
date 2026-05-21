import React from 'react';
import { motion } from 'framer-motion'; // 💡 Import motion
// 💡 Import data dan animasi yang kita butuhkan dari file modular masing-masing
import { PROMO_BANNERS, POPULAR_CATEGORIES } from '../Data/productsData2';
import { staggerContainer, promoSlideIn, categoryPopUp } from '../animations/variants';

function PromoAndCategories() {
  return (
    <section className="bg-[#0b0f19] text-white py-24 px-6 relative overflow-hidden">
      
      {/* ================= BACKGROUND TECH/AMBIENT LINES ================= */}
      <div className="absolute w-[500px] h-[500px] bg-purple-600/10 blur-[180px] top-0 left-1/4 pointer-events-none" />
      <div className="absolute w-[500px] h-[500px] bg-blue-600/10 blur-[180px] bottom-0 right-1/4 pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-24 relative z-10">
        
        {/* ================= 1. BANNER PROMO MODERN (GLASSMORPHISM) ================= */}
        <div>
          {/* Efek Fade In Sederhana Pada Judul Menggunakan Motion */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col mb-10 space-y-2"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">Special Offers</span>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">
              Promo Spesial Minggu Ini 🔥
            </h2>
          </motion.div>

          {/* 💡 Bungkus Grid dengan staggerContainer parent */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {PROMO_BANNERS.map((promo, index) => (
              <motion.div 
                key={promo.id} 
                custom={index}            // 💡 Kirim index untuk menentukan arah slide (kiri/kanan)
                variants={promoSlideIn}   // 💡 Gunakan animasi geser menyilang
                whileHover={{ y: -5 }}    // Efek hover naik sedikit saat disentuh
                className={`group p-8 rounded-[2rem] bg-gradient-to-br ${promo.bgGradient} border border-white/5 ${promo.borderColor} transition-all duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:shadow-2xl cursor-pointer relative overflow-hidden backdrop-blur-xl`}
              >
                <div className={`absolute -right-10 -bottom-10 w-40 h-40 ${promo.glowColor} rounded-full blur-3xl group-hover:scale-150 transition-all duration-700 pointer-events-none`} />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

                <div className="relative z-10 space-y-4">
                  <span className="bg-white/10 backdrop-blur-md border border-white/10 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider inline-block">
                    {promo.badge}
                  </span>
                  
                  <h3 className="text-2xl font-extrabold tracking-tight leading-tight max-w-sm group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 transition duration-300">
                    {promo.title}
                  </h3>
                  
                  <p className="text-slate-400 text-sm max-w-xs font-medium">
                    {promo.subtitle}
                  </p>
                  
                  <div className="pt-4 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-slate-500 uppercase block tracking-widest font-semibold">Kode Voucher</span>
                      <span className="inline-block bg-white/5 border border-white/10 px-4 py-1.5 rounded-xl text-xs font-mono font-bold text-white tracking-wide mt-1 shadow-inner group-hover:border-cyan-400/40 transition">
                        {promo.code}
                      </span>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                      <span className="text-sm font-bold">→</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ================= 2. KATEGORI GAME POPULER (DENGAN GAMBAR ASLI) ================= */}
        <div>
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4"
          >
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-pink-500">Trending Now</span>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">
                Kategori Game Populer 🎮
              </h2>
            </div>
            <button className="self-start md:self-auto text-xs font-bold text-slate-400 hover:text-white tracking-widest uppercase border-b border-slate-700 pb-1 hover:border-white transition duration-300">
              Lihat Semua Game
            </button>
          </motion.div>

          {/* 💡 Bungkus Grid Kategori dengan staggerContainer parent */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {POPULAR_CATEGORIES.map((category) => (
              <motion.div 
                key={category.id} 
                variants={categoryPopUp} // 💡 Gunakan animasi Pop Up mengembang
                whileHover={{ 
                  y: -8,
                  scale: 1.03,
                  borderColor: "rgba(255, 255, 255, 0.2)",
                  transition: { type: "spring", stiffness: 300, damping: 15 }
                }}
                className="group bg-[#121826]/40 backdrop-blur-md p-5 rounded-[2rem] border border-white/5 shadow-xl flex flex-col relative overflow-hidden cursor-pointer"
              >
                <div className="absolute inset-x-12 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

                <div className="w-full aspect-square bg-[#1a2235] rounded-2xl overflow-hidden mb-5 relative border border-white/5 shadow-inner">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-transparent to-transparent z-10 opacity-70 group-hover:opacity-30 transition duration-500" />
                  <div className="absolute inset-0 border border-white/0 group-hover:border-white/15 rounded-2xl z-20 transition duration-500" />
                  
                  <img 
                    src={category.image} 
                    alt={category.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => { e.target.src = "https://placehold.co/300x300/1a2235/ffffff?text=" + category.name; }}
                  />
                </div>

                <div className="space-y-1 relative z-10 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className={`font-extrabold text-base md:text-lg text-slate-100 transition duration-300 ${category.accent}`}>
                      {category.name}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium mt-0.5">
                      {category.tagline}
                    </p>
                  </div>
                  
                  <div className="pt-4 border-t border-white/5 mt-3 flex items-center justify-between text-[11px] font-mono tracking-tight text-slate-400">
                    <span className="bg-white/5 px-2.5 py-1 rounded-md border border-white/5 text-slate-300 font-sans font-semibold">
                      {category.totalProducts}
                    </span>
                    <span className="transform translate-x-[-5px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition duration-300 font-sans font-bold text-slate-300">
                      Kunjungi →
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}

export default PromoAndCategories;