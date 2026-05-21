import React, { useState } from 'react';

function CekStatus() {
  const [invoiceId, setInvoiceId] = useState('');
  const [searchResult, setSearchResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleCheckStatus = (e) => {
    e.preventDefault();
    if (!invoiceId) return;

    setLoading(true);
    setSearchResult(null);

    // Simulasi hit API pencarian data transaksi selama 1 detik
    setTimeout(() => {
      setLoading(false);
      // Dummy response data tracking pesanan
      if (invoiceId.toUpperCase() === "JOHEN-12345") {
        setSearchResult({
          found: true,
          invoice: "JOHEN-12345",
          game: "Mobile Legends",
          item: "86 Diamonds + Bonus",
          target: "12345678 (2044)",
          date: "21 Mei 2026 - 21:45 WIB",
          payment: "QRIS",
          status: "SUCCESS",
          statusColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30"
        });
      } else {
        setSearchResult({ found: false });
      }
    }, 1000);
  };

  return (
    <div className="bg-[#0b0f19] min-h-screen text-white pt-36 px-6 relative overflow-hidden flex flex-col items-center">
      
      {/* Background Grid Accent */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-xl relative z-10">
        
        {/* Header */}
        <div className="text-center mb-10 space-y-2">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
            Lacak Pesanan Kamu 🔍
          </h2>
          <p className="text-slate-400 text-xs">
            Pesanan belum masuk? Masukkan ID Invoice kamu di bawah untuk memantau status pengiriman item game secara realtime.
          </p>
        </div>

        {/* Form Pencarian */}
        <form onSubmit={handleCheckStatus} className="bg-[#121826]/60 border border-white/5 p-6 rounded-3xl backdrop-blur-xl shadow-2xl space-y-4">
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">
              Nomor Invoice / ID Transaksi
            </label>
            <input 
              type="text" 
              placeholder="Contoh: JOHEN-12345"
              value={invoiceId}
              onChange={(e) => setInvoiceId(e.target.value)}
              className="w-full bg-[#172030]/50 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all font-mono uppercase"
            />
          </div>

          <button 
            type="submit"
            disabled={loading}
            className="w-full bg-purple-600 hover:bg-purple-500 font-black text-xs uppercase tracking-wider py-4 rounded-xl transition duration-300 shadow-lg shadow-purple-600/20 disabled:opacity-50"
          >
            {loading ? "Mencari Data..." : "Periksa Status Sekarang"}
          </button>
        </form>

        {/* ====== HASIL PENCARIAN ====== */}
        {searchResult && (
          <div className="mt-8 animate-fadeIn">
            {searchResult.found ? (
              // Jika Transaksi Ditemukan
              <div className="bg-[#111723]/40 border border-white/5 p-6 rounded-3xl backdrop-blur-md space-y-4">
                <div className="flex justify-between items-center border-b border-white/5 pb-3">
                  <span className="text-xs text-slate-400 font-mono">{searchResult.invoice}</span>
                  <span className={`text-[10px] font-black tracking-wider px-3 py-1 rounded-full border ${searchResult.statusColor}`}>
                    {searchResult.status}
                  </span>
                </div>
                
                <div className="grid grid-cols-2 gap-y-3 text-xs">
                  <div>
                    <p className="text-slate-500 text-[10px] uppercase font-bold tracking-wide">Game</p>
                    <p className="font-semibold text-slate-200 mt-0.5">{searchResult.game}</p>
                  </div>
                  <div>
                    <p className="text-slate-500 text-[10px] uppercase font-bold tracking-wide">Item</p>
                    <p className="font-semibold text-slate-200 mt-0.5">{searchResult.item}</p>
                  </div>
                  <div>
                    <p className="text-slate-500 text-[10px] uppercase font-bold tracking-wide">ID Tujuan / Target</p>
                    <p className="font-mono text-purple-400 mt-0.5">{searchResult.target}</p>
                  </div>
                  <div>
                    <p className="text-slate-500 text-[10px] uppercase font-bold tracking-wide">Metode Pembayaran</p>
                    <p className="font-semibold text-slate-200 mt-0.5">{searchResult.payment}</p>
                  </div>
                </div>

                <div className="text-[10px] text-slate-500 text-center pt-2 border-t border-white/5">
                  Diproses pada: {searchResult.date}
                </div>
              </div>
            ) : (
              // Jika Transaksi Tidak Ditemukan
              <div className="bg-rose-500/10 border border-rose-500/20 p-5 rounded-2xl text-center">
                <p className="text-sm text-rose-400 font-semibold">❌ ID Transaksi Tidak Ditemukan</p>
                <p className="text-xs text-slate-400 mt-1">Pastikan penulisan ID Invoice sudah benar, atau coba gunakan kode demo: <span className="font-mono text-white bg-white/5 px-1.5 py-0.5 rounded">JOHEN-12345</span></p>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
}

export default CekStatus;