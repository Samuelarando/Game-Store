import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; 
import { ALL_PRODUCTS, PAYMENT_METHODS } from '../data/productsData';
// Import konfigurasi animasi terpusat
import { staggerContainer, stackToGrid } from '../animations/variants';

function ProductListingPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGame, setSelectedGame] = useState('All');
  const [selectedType, setSelectedType] = useState('All');
  const [sortBy, setSortBy] = useState('none');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [userId, setUserId] = useState('');
  const [zoneId, setZoneId] = useState('');
  const [selectedPayment, setSelectedPayment] = useState('');

  // LOGIC FILTERING & SORTING
  const filteredProducts = ALL_PRODUCTS.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesGame = selectedGame === 'All' || product.game === selectedGame;
    const matchesType = selectedType === 'All' || product.type === selectedType;
    return matchesSearch && matchesGame && matchesType;
  }).sort((a, b) => {
    if (sortBy === 'low-to-high') return a.price - b.price;
    if (sortBy === 'high-to-low') return b.price - a.price;
    return 0;
  });

  const formatRupiah = (number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(number);
  };

  const handleCheckout = (e) => {
    e.preventDefault();
    if (!selectedPayment) {
      alert('Silakan pilih metode pembayaran terlebih dahulu!');
      return;
    }
    alert(`Sukses! Simulasi order untuk ${selectedProduct.name} berhasil dibuat.`);
  };

  return (
    <div id='produk-unggulan' className="bg-[#0b0f19] text-white min-h-screen pt-12 pb-20 px-6 relative">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* ================= PANEL FILTERS ================= */}
        <div className="space-y-1">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-cyan-400 block">// LIVE MARKETPLACE</span>
          <h1 className="text-2xl md:text-4xl font-black tracking-tight">Katalog Produk Modular 🎮</h1>
        </div>

        <div className="bg-[#121826]/60 border border-white/5 p-5 rounded-[2rem] backdrop-blur-xl grid grid-cols-1 md:grid-cols-4 gap-4 shadow-2xl">
          <div>
            <input 
              type="text"
              placeholder="🔍 Ketik nama item..."
              value={searchQuery}
              onChange={(e) => { setSearchQuery(e.target.value); setSelectedProduct(null); }}
              className="w-full bg-slate-900/80 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-400 text-white transition font-medium"
            />
          </div>
          <div>
            <select value={selectedGame} onChange={(e) => { setSelectedGame(e.target.value); setSelectedProduct(null); }} className="w-full bg-slate-900/80 border border-white/10 rounded-xl px-4 py-3 text-sm text-white transition cursor-pointer">
              <option value="All">Semua Game</option>
              <option value="Mobile Legends">Mobile Legends</option>
              <option value="PUBG Mobile">PUBG Mobile</option>
              <option value="Valorant">Valorant</option>
            </select>
          </div>
          <div>
            <select value={selectedType} onChange={(e) => { setSelectedType(e.target.value); setSelectedProduct(null); }} className="w-full bg-slate-900/80 border border-white/10 rounded-xl px-4 py-3 text-sm text-white transition cursor-pointer">
              <option value="All">Semua Tipe</option>
              <option value="topup">⚡ Top Up Game</option>
              <option value="akun">💎 Jual Beli Akun</option>
            </select>
          </div>
          <div>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="w-full bg-slate-900/80 border border-white/10 rounded-xl px-4 py-3 text-sm text-white transition cursor-pointer">
              <option value="none">Urutan Harga</option>
              <option value="low-to-high">💸 Termurah</option>
              <option value="high-to-low">📈 Termahal</option>
            </select>
          </div>
        </div>

        {/* ================= VIEW CONTROLLER ================= */}
        {!selectedProduct ? (
          /* VIEW A: KATALOG GRID UTAMA */
          <div className="space-y-4">
            <div className="text-xs font-mono text-slate-500">
              Ditemukan <span className="text-[#ccff00] font-bold">{filteredProducts.length}</span> produk.
            </div>
            
            {/* Pembungkus Grid dengan efek staggered entry */}
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            >
              {filteredProducts.map((product, index) => (
                /* AnimatePresence dipasang di dalam map dengan properti custom agar kalkulasi koordinat awal variants mendeteksi index */
                <AnimatePresence key={product.id} mode="popLayout" custom={index}>
                  <motion.div 
                    layout                    
                    custom={index}            
                    variants={stackToGrid}    
                    exit="exit"
                    whileHover={{ y: -8, scale: 1.02 }}
                    onClick={() => setSelectedProduct(product)}
                    className="group bg-[#111723]/40 border border-white/5 hover:border-cyan-500/40 rounded-3xl p-5 flex flex-col justify-between relative overflow-hidden backdrop-blur-md shadow-lg cursor-pointer"
                  >
                    <div>
                      <div className="w-full aspect-[4/3] bg-slate-900 rounded-2xl overflow-hidden mb-4 relative border border-white/5 flex items-center justify-center">
                        <img 
                          src={product.image} 
                          alt={product.name} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                          onError={(e) => { e.target.src = "https://placehold.co/400x300/1e293b/ffffff?text=Image+Missing"; }}
                        />
                        <span className="absolute top-2.5 left-2.5 bg-black/60 backdrop-blur-md text-[#ccff00] text-[9px] font-black px-2 py-0.5 rounded-md uppercase tracking-wider">
                          {product.tag}
                        </span>
                      </div>
                      <span className="text-[9px] font-mono tracking-widest text-cyan-400 block uppercase">// {product.type === 'topup' ? 'Top Up' : 'Asset Akun'}</span>
                      <h3 className="text-base font-extrabold text-slate-100 mt-1 group-hover:text-[#ccff00] transition duration-300">{product.name}</h3>
                    </div>
                    
                    <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between">
                      <span className="text-sm font-black font-mono text-white">{formatRupiah(product.price)}</span>
                      <span className="text-[11px] font-bold text-cyan-400 bg-cyan-400/5 border border-cyan-500/20 px-2.5 py-1 rounded-lg group-hover:bg-[#ccff00] group-hover:text-black transition duration-300">
                        View Detail ➔
                      </span>
                    </div>
                  </motion.div>
                </AnimatePresence>
              ))}
            </motion.div>
          </div>
        ) : (
          /* VIEW B: DETAIL INTERAKTIF */
          <motion.div 
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-[#121826]/60 border border-white/10 p-6 rounded-[2rem] backdrop-blur-xl relative">
                <button onClick={() => setSelectedProduct(null)} className="absolute top-6 right-6 text-xs font-bold text-rose-400 bg-rose-500/10 border border-rose-500/20 hover:bg-rose-500 hover:text-white px-3 py-1.5 rounded-xl transition duration-300">
                  ✕ Close Detail
                </button>
                <div className="text-xs font-bold text-slate-500 mb-6 font-mono tracking-widest">// DETAIL PENJELASAN</div>
                <div className="w-full h-56 bg-slate-900 rounded-2xl overflow-hidden border border-white/5">
                  <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-full object-cover" />
                </div>
                <div className="mt-6 space-y-2">
                  <h2 className="text-2xl font-black tracking-tight text-[#ccff00]">{selectedProduct.name}</h2>
                  <p className="text-xs text-slate-400 uppercase font-mono tracking-wider">{selectedProduct.game} • {selectedProduct.status}</p>
                  <p className="text-sm text-slate-300 leading-relaxed pt-3 border-t border-white/5 mt-3">
                    {selectedProduct.description || "Layanan pengisian saldo game otomatis aman terpercaya."}
                  </p>
                </div>
              </div>

              {selectedProduct.type === 'akun' && selectedProduct.specs && (
                <div className="bg-[#121826]/60 border border-white/5 p-6 rounded-[2rem] backdrop-blur-xl space-y-4">
                  <h3 className="text-sm font-bold uppercase text-cyan-400 tracking-wider">// Atribut & Spesifikasi Akun</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedProduct.specs.map((spec, i) => (
                      <span key={i} className="bg-slate-950/50 p-3 rounded-xl border border-white/5 text-xs text-slate-300 flex justify-between">
                        <span className="text-slate-500">Keterangan</span>
                        <span className="font-bold text-white">{spec}</span>
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sisi Kanan: Checkout Form */}
            <div>
              <form onSubmit={handleCheckout} className="bg-[#121826]/90 border border-cyan-500/20 p-6 rounded-[2rem] space-y-6 shadow-2xl">
                {selectedProduct.type === 'topup' && (
                  <div className="space-y-3">
                    <h3 className="text-xs font-bold uppercase text-slate-400 tracking-wider">1. Akun Target Game</h3>
                    <div className="grid grid-cols-2 gap-2">
                      <input type="text" placeholder="User ID" required value={userId} onChange={(e)=>setUserId(e.target.value)} className="w-full bg-slate-900 border border-white/10 rounded-xl px-3 py-2 text-xs text-white outline-none"/>
                      <input type="text" placeholder="Zone ID" required value={zoneId} onChange={(e)=>setZoneId(e.target.value)} className="w-full bg-slate-900 border border-white/10 rounded-xl px-3 py-2 text-xs text-white outline-none"/>
                    </div>
                  </div>
                )}
                <div className="space-y-3">
                  <h3 className="text-xs font-bold uppercase text-slate-400 tracking-wider">Pilihan Pembayaran</h3>
                  <div className="space-y-2">
                    {PAYMENT_METHODS.map((m) => (
                      <label key={m.id} className={`flex items-center justify-between p-3 rounded-xl border text-xs cursor-pointer transition ${selectedPayment === m.id ? 'bg-cyan-500/10 border-cyan-400' : 'bg-slate-900/40 border-white/5'}`}>
                        <div className="flex items-center gap-2">
                          <input type="radio" name="pay" checked={selectedPayment === m.id} onChange={()=>setSelectedPayment(m.id)} className="accent-cyan-400"/>
                          <span>{m.icon} {m.name}</span>
                        </div>
                        <span className="text-[10px] text-slate-500 font-mono">{m.fee}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div className="pt-4 border-t border-white/5 space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-slate-400">Total Tagihan:</span>
                    <span className="text-xl font-black text-white font-mono">{formatRupiah(selectedProduct.price)}</span>
                  </div>
                  <button type="submit" className="w-full bg-[#ccff00] text-black py-3 rounded-xl text-xs font-black uppercase tracking-wider hover:bg-[#b5e600] transition">
                    Bayar Sekarang ➔
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        )}

      </div>
    </div>
  );
}

export default ProductListingPage;