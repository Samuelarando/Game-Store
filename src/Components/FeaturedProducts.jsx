import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import { TOPUP_LIST, JUAL_AKUN_LIST } from '../Data/productsData3';

const TABS_DATA = ['all', 'topup', 'akun'];

function FeaturedProducts() {
  const [activeTab, setActiveTab] = useState('all');

  // LOGIKA FILTER BARU: Menentukan kelompok data yang berhak muncul berdasarkan tab
  const showTopUp = activeTab === 'all' || activeTab === 'topup';
  const showJualAkun = activeTab === 'all' || activeTab === 'akun';

  return (
    <section className="bg-[#0b0f19] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-black mb-8">Pilih Game Favoritmu 🎮</h2>
        
        {/* Tombol Filter Tabs */}
        <div className="flex bg-[#121826] p-2 rounded-2xl border border-white/5 inline-flex mb-12">
          {TABS_DATA.map((tab) => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-xl text-xs font-black uppercase transition-all duration-300 ${
                activeTab === tab ? 'text-black bg-[#ccff00]' : 'text-slate-400 hover:text-white'
              }`}
            >
              {tab === 'all' && 'Semua Game'}
              {tab === 'topup' && '⚡ Top Up'}
              {tab === 'akun' && '💎 Akun Premium'}
            </button>
          ))}
        </div>

        {/* GRID UTAMA */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          
          {/* 1. LOOPING KELOMPOK TOP UP */}
          {showTopUp && TOPUP_LIST.map((game) => (
            <Link 
              key={game.id}
              to={`/topup/${game.id}`} 
              className="bg-[#111723]/40 border border-white/5 rounded-3xl p-4 flex flex-col items-center cursor-pointer hover:border-cyan-500/40 transition duration-300 group block"
            >
              <div className="w-full aspect-square bg-[#172030] rounded-2xl overflow-hidden mb-4 relative">
                {/* Badge Status Top Up */}
                <span className="absolute top-2 left-2 z-10 text-[9px] font-bold bg-[#ccff00] text-black px-2 py-0.5 rounded">
                  {game.status}
                </span>
                <img 
                  src={game.image} 
                  alt={game.name} 
                  loading="lazy" 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500" 
                />
              </div>
              <h3 className="text-sm font-black text-center tracking-tight text-slate-200 group-hover:text-[#ccff00]">
                {game.name}
              </h3>
            </Link>
          ))}

          {/* 2. LOOPING KELOMPOK JUAL AKUN */}
          {showJualAkun && JUAL_AKUN_LIST.map((game) => (
            <Link 
              key={game.id}
              to={`/jualakun/${game.id}`} 
              className="bg-[#111723]/40 border border-white/5 rounded-3xl p-4 flex flex-col items-center cursor-pointer hover:border-[#ff0055]/40 transition duration-300 group block"
            >
              <div className="w-full aspect-square bg-[#172030] rounded-2xl overflow-hidden mb-4 relative">
                {/* Badge Status Jual Akun */}
                <span className="absolute top-2 left-2 z-10 text-[9px] font-bold bg-[#ff0055] text-white px-2 py-0.5 rounded">
                  {game.status}
                </span>
                <img 
                  src={game.image} 
                  alt={game.name} 
                  loading="lazy" 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500" 
                />
              </div>
              <h3 className="text-sm font-black text-center tracking-tight text-slate-200 group-hover:text-[#ff0055]">
                {game.name}
              </h3>
            </Link>
          ))}

        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;