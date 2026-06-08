import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { JUAL_AKUN_LIST } from '../Data/productsData3';

function AccountMarketPage() {
  const { gameId } = useParams();
  
  const [selectedAccount, setSelectedAccount] = useState(null);

  const currentMarket = JUAL_AKUN_LIST.find((game) => game.id === gameId);

  if (!currentMarket) {
    return (
      <div className="min-h-screen bg-[#0b0f19] text-white flex flex-col items-center justify-center">
        <h2 className="text-xl font-bold mb-4">Lapak Akun Tidak Ditemukan ❌</h2>
        <Link to="/" className="text-[#ff0055] hover:underline">Kembali ke Beranda</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0b0f19] text-white py-12 px-6 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* HEADER LAPAK */}
        <div className="mb-12 border-b border-white/5 pb-6">
          <span className="text-xs font-bold bg-[#ff0055] text-white px-3 py-1 rounded-full uppercase tracking-wider">
            {currentMarket.status} MARKET
          </span>
          <h1 className="text-3xl md:text-4xl font-black mt-3">Lapak {currentMarket.name} 🛒</h1>
        </div>

        {/* GRID STOK AKUN */}
        {currentMarket.accountList.length === 0 ? (
          <p className="text-slate-400 text-center">Stok akun sedang kosong...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {currentMarket.accountList.map((account) => (
              <div key={account.id} className="bg-[#111723]/40 border border-white/5 rounded-3xl p-5 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-black text-slate-100 mb-4">{account.title}</h3>
                  <div className="grid grid-cols-2 gap-2 bg-[#0b0f19]/60 p-3 rounded-2xl text-xs mb-4">
                    <p className="text-slate-400">🏅 Rank: <span className="text-white font-bold">{account.rank}</span></p>
                    <p className="text-slate-400">👕 Skin: <span className="text-white font-bold">{account.skinCount}</span></p>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/5">
                  <p className="text-lg font-black text-[#ff0055]">Rp {account.price.toLocaleString('id-ID')}</p>
                  
                  {/* UBAH LINK JADI BUTTON: saat diklik, simpan data akun ke state */}
                  <button 
                    onClick={() => setSelectedAccount(account)}
                    className="bg-[#ff0055] hover:bg-[#e0004c] text-white text-xs font-black px-4 py-3 rounded-xl transition"
                  >
                    Lihat Spek Detail ➔
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ================================================================= */}
      {/* JALUR MODAL POP-UP (PENGGANTI JALUR 3) */}
      {/* ================================================================= */}
      {selectedAccount && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fadeIn">
          <div className="bg-[#121826] border border-white/10 rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 text-white custom-scrollbar">
            
            {/* Header Modal */}
            <div className="flex justify-between items-start mb-6">
              <div>
                <span className="text-[10px] font-mono text-slate-400">ID: {selectedAccount.id}</span>
                <h2 className="text-lg font-black mt-1 text-[#ccff00]">{selectedAccount.title}</h2>
              </div>
              <button 
                onClick={() => setSelectedAccount(null)} // Tutup modal
                className="bg-white/10 hover:bg-white/20 text-white rounded-full p-2 text-xs font-bold transition w-8 h-8 flex items-center justify-center"
              >
                ✕
              </button>
            </div>

            {/* Galeri Gambar SS Akun (Tinggal ambil dari array images kamu) */}
            <div className="mb-6">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Bukti Screenshot Akun:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {selectedAccount.images?.map((imgUrl, index) => (
                  <div key={index} className="bg-[#172030] rounded-xl overflow-hidden aspect-video border border-white/5">
                    {/* Menggunakan placeholder jika gambar aslimu belum di-input */}
                    <img 
                      src={`https://placehold.co/600x400/172030/ffffff?text=SS+Akun+${index + 1}`} 
                      alt="SS Akun" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* List Skin Langka */}
            <div className="mb-6 bg-[#0b0f19]/80 p-4 rounded-2xl border border-white/5">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">⭐ Koleksi Skin Langka:</p>
              <div className="flex flex-wrap gap-2">
                {selectedAccount.rareSkins?.map((skin, index) => (
                  <span key={index} className="bg-[#ff0055]/10 border border-[#ff0055]/30 text-[#ff0055] text-[11px] font-bold px-3 py-1 rounded-xl">
                    {skin}
                  </span>
                ))}
              </div>
            </div>

            {/* Catatan Penjual */}
            <div className="mb-6">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">📝 Catatan Penjual:</p>
              <p className="text-sm text-slate-300 leading-relaxed bg-[#172030]/50 p-3 rounded-xl border border-white/5">
                {selectedAccount.sellerNote}
              </p>
            </div>

            {/* Tombol Eksekusi Beli Langsung Hubungi WhatsApp */}
            <div className="pt-4 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="text-xs text-slate-400">Total Harga Net</p>
                <p className="text-2xl font-black text-[#ccff00]">Rp {selectedAccount.price.toLocaleString('id-ID')}</p>
              </div>
              <a 
                href={`https://wa.me/628123456789?text=Halo+Johenstore,+saya+berminat+membeli+akun+dengan+ID+${selectedAccount.id}`}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto bg-[#ccff00] hover:bg-[#b5e200] text-black text-center font-black text-sm px-8 py-3.5 rounded-2xl transition duration-300 shadow-lg shadow-[#ccff00]/10"
              >
                Hubungi Admin / Beli Akun ➔
              </a>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}

export default AccountMarketPage;