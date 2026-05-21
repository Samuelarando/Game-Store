import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // 💡 Import motion & AnimatePresence
import { FEATURED_PRODUCTS } from '../Data/productsData3';
// 💡 Import konfigurasi animasi terpusat
import { staggerContainer, stackToGrid } from '../animations/variants';

function FeaturedProducts() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredProducts = activeTab === 'all' 
    ? FEATURED_PRODUCTS 
    : FEATURED_PRODUCTS.filter(p => p.type === activeTab);

  const formatRupiah = (number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(number);
  };

  return (
    <section className="bg-[#0b0f19] text-white py-28 px-6 relative overflow-hidden">
      
      {/* Background Tech Grid decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* ================= HEADER & FUTURISTIC TABS ================= */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-2"
          >
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-400 block animate-pulse">
              // LIVE MARKETPLACE
            </span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">
              Produuk Unggulan Terlaris 🔥
            </h2>
          </motion.div>

          {/* Cyberpunk Style Tab Switcher */}
          <div className="flex bg-[#121826]/80 p-2 rounded-2xl border border-white/5 backdrop-blur-xl self-start lg:self-auto shadow-2xl relative">
            {['all', 'topup', 'akun'].map((tab) => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-xl text-xs font-black tracking-wider uppercase transition-all duration-300 relative z-10 ${
                  activeTab === tab ? 'text-black' : 'text-slate-400 hover:text-white'
                }`}
              >
                {/* 💡 Efek sliding background mask menggunakan layoutId */}
                {activeTab === tab && (
                  <motion.div 
                    layoutId="activeTabPill"
                    className="absolute inset-0 bg-[#ccff00] rounded-xl z-[-1] shadow-[0_0_25px_rgba(204,255,0,0.4)]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {tab === 'all' && 'Semua Item'}
                {tab === 'topup' && '⚡ Top Up'}
                {tab === 'akun' && '💎 Akun Premium'}
              </button>
            ))}
          </div>
        </div>

        {/* ================= CREATIVE PRODUCT GRID ================= */}
        {/* 💡 Mengubah grid wrapper menjadi motion.div */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
        >
          {/* AnimatePresence mengontrol animasi masuk/keluar saat tab berganti */}
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, index) => (
              <motion.div 
                layout                          // 💡 Membuat posisi grid bergeser smooth saat di-filter
                key={product.id}
                custom={index}                  // 💡 Mengirim index ke stackToGrid variant
                variants={stackToGrid}          // 💡 Menggunakan efek tumpuk lalu menyebar ke posisi asli
                exit={{ opacity: 0, scale: 0.9, y: 20, transition: { duration: 0.2 } }}
                whileHover={{ 
                  y: -10, 
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 400, damping: 15 }
                }}
                className={`group bg-[#111723]/40 border border-white/5 ${product.glowBorder} rounded-[2.5rem] p-6 flex flex-col justify-between relative overflow-hidden backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.4)] cursor-pointer`}
              >
                {/* Dynamic Glow Ambient behind each card */}
                <div className={`absolute -right-16 -top-16 w-36 h-36 bg-gradient-to-br ${product.accentColor} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />

                <div>
                  {/* Image & Badges Container */}
                  <div className="w-full aspect-[16/10] bg-[#172030] rounded-3xl overflow-hidden mb-5 relative border border-white/5 group-hover:border-white/10 transition-colors">
                    
                    {/* Floating Badges */}
                    <div className="absolute top-4 left-4 z-20 flex gap-2">
                      <span className="bg-slate-950/80 backdrop-blur-md border border-white/10 text-white text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">
                        {product.tag}
                      </span>
                    </div>
                    
                    <span className="absolute bottom-4 right-4 z-20 bg-[#ccff00] text-black text-[9px] font-extrabold px-2.5 py-1 rounded-lg uppercase tracking-wider shadow-md">
                      {product.status}
                    </span>
                    
                    {/* Dark overlay gradients */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-transparent to-transparent z-10 opacity-60" />
                    
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                      onError={(e) => { e.target.src = "https://placehold.co/400x250/172030/ffffff?text=" + product.game; }}
                    />
                  </div>

                  {/* Info Text */}
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                    <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500">
                      {product.game}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-black text-slate-100 tracking-tight mt-1.5 group-hover:text-[#ccff00] transition duration-300">
                    {product.name}
                  </h3>

                  {/* HUD-Style Spec Badges (Hanya muncul untuk Jual Akun) */}
                  {product.type === 'akun' && product.specs && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {product.specs.map((spec, index) => (
                        <span 
                          key={index} 
                          className="bg-white/5 border border-white/5 px-2.5 py-1 rounded-xl text-[10px] text-slate-400 font-medium backdrop-blur-sm"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Price & Modern Call-To-Action Button */}
                <div className="mt-8 pt-5 border-t border-white/5 flex items-center justify-between">
                  <div>
                    {product.originalPrice && (
                      <span className="text-xs line-through text-slate-500 font-mono block mb-0.5">
                        {formatRupiah(product.originalPrice)}
                      </span>
                    )}
                    <span className="text-2xl font-black text-white tracking-tighter font-mono group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 transition duration-300">
                      {formatRupiah(product.price)}
                    </span>
                  </div>
                  
                  {/* Creative Action Button */}
                  <button className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-xs font-bold text-white rounded-xl group-hover:text-black bg-white/5 border border-white/10 hover:border-transparent transition-all duration-300">
                    <span className="relative px-4 py-2.5 transition-all ease-in duration-200 bg-transparent rounded-xl group-hover:bg-[#ccff00] font-black tracking-wider uppercase">
                      {product.type === 'topup' ? 'Top Up ⚡' : 'Get Account ➔'}
                    </span>
                  </button>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}

export default FeaturedProducts;