import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { TOPUP_LIST } from '../Data/productsData3';

function TopUpDetailPage() {
  const { gameId } = useParams();
  const currentGame = TOPUP_LIST.find(game => game.id === gameId);

  const [selectedPackage, setSelectedPackage] = useState(null);
  const [userId, setUserId] = useState('');
  const [zoneId, setZoneId] = useState('');
  const [whatsapp, setWhatsapp] = useState('');

  if (!currentGame) {
    return (
      <div className="bg-[#030305] text-[#ccff00] min-h-screen w-full flex flex-col items-center justify-center font-mono p-6">
        <div className="border border-[#ff0055] p-6 bg-[#ff0055]/5 backdrop-blur-md relative">
          <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-[#ff0055]"></div>
          <p className="text-xs font-black tracking-widest uppercase animate-pulse">// SYSTEM_ERROR: GAME_NOT_FOUND</p>
          <Link to="/" className="inline-block mt-4 text-[10px] tracking-wider uppercase text-white hover:text-[#ccff00] transition-colors">
            [&lt;&lt; BACK_TO_DASHBOARD]
          </Link>
        </div>
      </div>
    );
  }

  const currentItem = currentGame.priceList.find(p => p.id === selectedPackage);

  return (
    <div className="bg-gradient-to-br from-[#030305] via-[#080816] to-[#120418] text-slate-200 min-h-screen w-full font-mono antialiased pb-24 relative overflow-hidden selection:bg-[#ff0055] selection:text-white">
      
      {/* AMBIENT NEON GLOW (Efek Semburan Cahaya di Background agar Terlihat Mewah) */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#ff0055]/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[20%] right-[-10%] w-[600px] h-[600px] bg-[#ccff00]/3 rounded-full blur-[150px] pointer-events-none"></div>
      
      {/* TECH INTERFACE GRID (Garis Kotak Piksel Halus) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

      {/* ================= 1. DIV BANNER BACKGROUND UTAMA ================= */}
      <div className="relative w-full h-56 md:h-72 bg-black/60 border-b border-white/5 overflow-hidden">
        {/* Pola Garis Diagonal pada Banner */}
        <div className="absolute inset-0 bg-[linear-gradient(45deg,#ffffff03_25%,transparent_25%,transparent_50%,#ffffff03_50%,#ffffff03_75%,transparent_75%,transparent)] bg-[size:16px_16px] z-10 pointer-events-none"></div>
        <img 
          src={currentGame.image} 
          alt="Cover Banner" 
          className="w-full h-full object-cover opacity-15 blur-[2px] scale-105 contrast-125"
        />
        {/* Soft Shadow Fade ke Arah Isi Konten */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#030305] via-[#030305]/60 to-transparent"></div>
        
        {/* Navigasi Minimalis Mengambang di Banner */}
        <div className="absolute top-6 left-4 right-4 max-w-6xl mx-auto flex justify-between items-center z-20 text-[10px] tracking-widest font-bold text-slate-400">
          <Link to="/" className="hover:text-[#ccff00] transition-colors flex items-center gap-1">
            <span>//</span> RETURN_HUB
          </Link>
          <span className="text-slate-600">CORE_SYS // VER_2.6</span>
        </div>
      </div>

      {/* KONTAINER UTAMA */}
      <div className="max-w-6xl mx-auto px-4 -mt-20 relative z-20">
        
        {/* ================= 2. GAMBAR KECIL SKEW & TECH TITLE ================= */}
        <div className="flex flex-col md:flex-row items-center md:items-end gap-6 mb-12">
          {/* Avatar Miring dengan Double Border Cyberpunk */}
          <div className="relative group shrink-0">
            <div className="absolute inset-0 bg-gradient-to-r from-[#ff0055] to-[#ccff00] transform -skew-x-12 blur-sm opacity-40 group-hover:opacity-70 transition-opacity duration-500"></div>
            <div className="w-28 h-28 bg-[#06070d] border border-[#ccff00] p-1.5 transform -skew-x-12 shadow-2xl relative overflow-hidden">
              <img 
                src={currentGame.image} 
                alt={currentGame.name} 
                className="w-full h-full object-cover transform skew-x-12 scale-115 contrast-110" 
              />
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent animate-pulse"></div>
            </div>
          </div>
          
          <div className="text-center md:text-left pb-1">
            <div className="flex flex-col md:flex-row items-center gap-3">
              <h1 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tighter filter drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">
                {currentGame.name}
              </h1>
            </div>
            <div className="inline-flex items-center gap-2 mt-2 bg-white/5 border border-white/10 px-3 py-1 text-[9px] font-bold tracking-widest text-[#ff0055] uppercase">
              <span className="w-1.5 h-1.5 bg-[#ccff00] rounded-none animate-ping"></span>
              SYS_STATUS: READY_TO_INJECT
            </div>
          </div>
        </div>

        {/* ================= 3. LAYOUT GRID 3 KOLOM ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* ================= KOLOM 1 & 2: FORM & PILIHAN DIAMOND (KIRI) ================= */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* TERMINAL INPUT DATA */}
            <div className="bg-[#06070d]/80 backdrop-blur-md border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] p-6 relative">
              {/* Dekorasi Sudut Khas HUD */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/30"></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/30"></div>
              
              <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-6">
                <div className="flex items-center gap-2">
                  <span className="text-[#ccff00] text-xs font-bold font-mono">[01]</span>
                  <h2 className="text-xs font-black uppercase tracking-widest text-white">IDENTITY_VALIDATION</h2>
                </div>
                <span className="text-[9px] text-slate-600 font-bold">REQ_FIELD</span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="text-[10px] font-bold text-slate-400 block mb-2 uppercase tracking-wide">Player ID</label>
                  <input 
                    type="text" value={userId} onChange={(e) => setUserId(e.target.value)} placeholder="ENTER ACCOUNT ID" 
                    className="w-full bg-black/60 border border-white/10 px-4 py-3 text-xs text-[#ccff00] tracking-wider placeholder-slate-700 focus:outline-none focus:border-[#ccff00] focus:ring-1 focus:ring-[#ccff00]/30 transition-all"
                  />
                </div>
                {currentGame.id === 'mlbb' && (
                  <div>
                    <label className="text-[10px] font-bold text-slate-400 block mb-2 uppercase tracking-wide">Zone / Server</label>
                    <input 
                      type="text" value={zoneId} onChange={(e) => setZoneId(e.target.value)} placeholder="ENTER SERVER ID" 
                      className="w-full bg-black/60 border border-white/10 px-4 py-3 text-xs text-[#ccff00] tracking-wider placeholder-slate-700 focus:outline-none focus:border-[#ccff00] focus:ring-1 focus:ring-[#ccff00]/30 transition-all"
                    />
                  </div>
                )}
              </div>
            </div>

            {/* MATRIKS KATALOG DIAMOND */}
            <div className="bg-[#06070d]/80 backdrop-blur-md border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] p-6 relative">
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/30"></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/30"></div>
              
              <div className="flex items-center gap-2 border-b border-white/5 pb-3 mb-6">
                <span className="text-[#ccff00] text-xs font-bold">[02]</span>
                <h2 className="text-xs font-black uppercase tracking-widest text-white">SELECT_DIAMOND_MODULE</h2>
              </div>

              {/* Grid 3 Kolom untuk Diamond di dlm area kiri */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {currentGame.priceList.map((item) => {
                  const isSelected = selectedPackage === item.id;
                  return (
                    <button 
                      key={item.id} onClick={() => setSelectedPackage(item.id)}
                      className={`p-4 border text-left transition-all duration-300 flex flex-col justify-between h-28 relative group overflow-hidden ${
                        isSelected 
                          ? 'border-[#ff0055] bg-[#ff0055]/5 shadow-[0_0_20px_rgba(255,0,85,0.15)] scale-[1.02]' 
                          : 'border-white/5 bg-black/40 hover:border-white/20 hover:bg-black/60'
                      }`}
                    >
                      {/* Dekorasi micro-line saat item aktif */}
                      {isSelected && <div className="absolute top-0 left-0 w-full h-[2px] bg-[#ff0055]"></div>}
                      
                      <p className={`text-xs font-black tracking-tight line-clamp-2 transition-colors ${isSelected ? 'text-[#ff0055]' : 'text-slate-300 group-hover:text-white'}`}>
                        {item.nominal}
                      </p>
                      
                      <div className="w-full flex justify-between items-end mt-2">
                        <p className={`text-[11px] font-black transition-colors ${isSelected ? 'text-[#ccff00]' : 'text-slate-500 group-hover:text-slate-400'}`}>
                          Rp {item.price.toLocaleString('id-ID')}
                        </p>
                        {/* Dot Status Mini */}
                        <div className={`w-1 h-1 ${isSelected ? 'bg-[#ff0055] shadow-[0_0_8px_#ff0055]' : 'bg-slate-800'}`}></div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* NOTIFIKASI RESI TERMINAL */}
            <div className="bg-[#06070d]/80 backdrop-blur-md border border-white/10 p-6 relative">
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/30"></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/30"></div>
              
              <div className="flex items-center gap-2 border-b border-white/5 pb-3 mb-4">
                <span className="text-[#ccff00] text-xs font-bold">[03]</span>
                <h2 className="text-xs font-black uppercase tracking-widest text-white">RECEIPT_ROUTING</h2>
              </div>
              <label className="text-[10px] font-bold text-slate-400 block mb-2 uppercase tracking-wide">WhatsApp Destination</label>
              <input 
                type="tel" value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)} placeholder="EX: 08123456789" 
                className="w-full bg-black/60 border border-white/10 px-4 py-3 text-xs text-[#ccff00] tracking-wider placeholder-slate-700 focus:outline-none focus:border-[#ccff00] transition-colors"
              />
            </div>

          </div>

          {/* ================= KOLOM 3: CHECKOUT SIDEBAR HUD (KANAN) ================= */}
          <div className="space-y-6 lg:sticky lg:top-6">
            
            {/* HUD CHECKOUT TRANSACTION */}
            <div className="bg-[#06070d]/90 backdrop-blur-md border border-[#ff0055]/30 shadow-[0_0_30px_rgba(255,0,85,0.05)] p-6 relative">
              {/* Tech Laser Trim untuk aksen premium */}
              <div className="absolute top-0 right-0 w-12 h-[2px] bg-gradient-to-l from-[#ff0055] to-transparent"></div>
              
              <div className="border-b border-white/5 pb-3 mb-5">
                <h2 className="text-xs font-black uppercase tracking-widest text-white">// CHECKOUT_HUD_v4.0</h2>
              </div>
              
              <div className="space-y-4 text-xs mb-6 font-medium">
                <div className="flex justify-between border-b border-white/[0.02] pb-2 text-slate-400">
                  <span className="text-[10px]">MODULE:</span>
                  <span className="text-white font-bold tracking-wide">{currentItem?.nominal || 'NOT_SELECTED'}</span>
                </div>
                <div className="flex justify-between border-b border-white/[0.02] pb-2 text-slate-400">
                  <span className="text-[10px]">TARGET_NET:</span>
                  <span className="text-[#ccff00] font-bold tracking-wide">{userId || 'EMPTY'} {zoneId ? `[${zoneId}]` : ''}</span>
                </div>
                
                <div className="pt-2 flex justify-between items-baseline">
                  <span className="text-slate-400 font-bold text-[10px] tracking-wider">TOTAL_ESTIMATE:</span>
                  <span className="text-2xl font-black text-[#ff0055] tracking-tighter filter drop-shadow-[0_0_8px_rgba(255,0,85,0.4)]">
                    Rp {currentItem ? currentItem.price.toLocaleString('id-ID') : '0'}
                  </span>
                </div>
              </div>

              {/* Button High-Tech dengan Animasi Hover Scale */}
              <button 
                disabled={!userId || (currentGame.id === 'mlbb' && !zoneId) || !selectedPackage || !whatsapp}
                onClick={() => alert(`INITIALIZING CODES INJECTION... SUCCESS!`)}
                className={`w-full py-4 text-xs font-black uppercase tracking-widest border transition-all duration-300 transform active:scale-95 ${
                  userId && (currentGame.id !== 'mlbb' || zoneId) && selectedPackage && whatsapp
                    ? 'bg-[#ccff00] text-black border-[#ccff00] shadow-[0_0_20px_rgba(204,255,0,0.3)] hover:bg-[#ff0055] hover:text-white hover:border-[#ff0055] hover:shadow-[0_0_25px_rgba(255,0,85,0.4)] cursor-pointer'
                    : 'bg-black/80 text-slate-700 border-white/5 cursor-not-allowed'
                }`}
              >
                EXECUTE ORDER ⚡
              </button>
            </div>

            {/* LIVE FEEDBACK MONITOR */}
            <div className="bg-[#06070d]/80 backdrop-blur-md border border-white/10 p-5 relative">
              <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">// SYSTEM_RELIABILITY</span>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="text-4xl font-black text-white tracking-tight">4.99</span>
                <span className="text-[#ccff00] text-xs">★★★★★</span>
              </div>
              <div className="w-full bg-white/5 h-[2px] mt-3 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-[99%] h-full bg-[#ccff00]"></div>
              </div>
              <p className="text-[9px] text-slate-500 mt-2 font-bold uppercase tracking-wider">INTEGRITY_INDEX: 100% SUCCESS RATE</p>
            </div>

            {/* HUBUNGI BANTUAN CRITICAL ASSISTANCE */}
            <div className="bg-[#06070d]/80 border-l-2 border-[#ff0055] border-y border-r border-white/10 p-5">
              <h3 className="text-[10px] font-black text-white uppercase tracking-widest mb-1">CRITICAL_ASSISTANCE?</h3>
              <p className="text-[9px] text-slate-500 leading-relaxed mb-4">Jika jalur injeksi paket mengalami hambatan sistem, segera hubungi pusat komando bantuan.</p>
              
              <a 
                href="https://wa.me/6282116299611" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 bg-transparent border border-[#ff0055]/50 text-[#ff0055] hover:text-white text-[10px] font-black uppercase tracking-widest hover:bg-[#ff0055] hover:border-[#ff0055] transition-all duration-300 shadow-[0_0_15px_rgba(255,0,85,0.05)]"
              >
                📢 CONNECT_TO_CS_24H
              </a>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default TopUpDetailPage;