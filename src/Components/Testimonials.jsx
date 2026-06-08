import React, { useState, useEffect } from 'react';

function JohenTestimonials() {
  // 1. DATA STATIS (3 Review yang ada di screenshot kamu)
  const staticReviews = [
    {
      id: 's1',
      name: 'Rian Aprina',
      role: 'Pro Player MLBB',
      image: 'https://placehold.co/100x100/172030/ffffff?text=RA',
      rating: 5,
      comment: 'Top up 86 Diamond di sini cuma butuh waktu 3 detik langsung masuk! Proses instan-nya johenstore gokil. Recommended parah!'
    },
    {
      id: 's2',
      name: 'Fajar Nugraha',
      role: 'Gamer Jatinangor',
      image: 'https://placehold.co/100x100/172030/ffffff?text=FN',
      rating: 5,
      comment: 'Awalnya ragu beli akun M416 Glacier di sini karena takut di hackback. Ternyata dapet garansi toko dan dapet email sepihak. Mantap!'
    },
    {
      id: 's3',
      name: 'Siti Rahma',
      role: 'Casual Gamer',
      image: 'https://placehold.co/100x100/172030/ffffff?text=SR',
      rating: 5,
      comment: 'Harga VP-nya paling murah se-Bandung raya kalau dibandingin sama lapak lain. CS nya juga ramah banget pas nanya nanya via WA.'
    }
  ];

  // 2. STATE UNTUK REVIEW DINAMIS (Yang diposting user)
  const [userReviews, setUserReviews] = useState([]);
  const [formData, setFormData] = useState({ name: '', role: '', comment: '', rating: 5 });

  // Load ulasan dari localStorage saat web dibuka
  useEffect(() => {
    const saved = localStorage.getItem('johen_live_reviews');
    if (saved) setUserReviews(JSON.parse(saved));
  }, []);

  const handlePost = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.comment) return alert('Nama dan isi ulasan wajib diisi!');

    const newPost = {
      ...formData,
      id: Date.now(),
      date: new Date().toLocaleDateString('id-ID')
    };

    const updated = [newPost, ...userReviews];
    setUserReviews(updated);
    localStorage.setItem('johen_live_reviews', JSON.stringify(updated));
    setFormData({ name: '', role: '', comment: '', rating: 5 });
  };

  return (
    <section className="bg-black text-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* HEADER SECTION */}
        <div className="text-center mb-16">
          <p className="text-[#ccff00] font-black text-xs uppercase tracking-[0.3em] mb-4">// TRUSTED BY GAMERS</p>
          <h2 className="text-3xl md:text-4xl font-black mb-4 uppercase">Testimoni Pelanggan</h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            Lebih dari 10,000+ transaksi telah berhasil diproses dengan tingkat kepuasan pelanggan mencapai 99.9%.
          </p>
        </div>

        {/* GRID 1: REVIEW STATIS (FEATURED) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {staticReviews.map((rev) => (
            <div key={rev.id} className="bg-[#111723]/20 border border-white/5 p-8 rounded-[2rem] hover:border-[#ccff00]/30 transition duration-500">
              <div className="text-[#ccff00] text-xl mb-6">★★★★★</div>
              <p className="text-sm text-slate-300 leading-relaxed italic mb-8">"{rev.comment}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-800 border border-white/10 overflow-hidden">
                   <img src={rev.image} alt={rev.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="text-sm font-black">{rev.name}</h4>
                  <p className="text-[10px] text-slate-500 uppercase font-bold">{rev.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* DIVIDER */}
        <div className="flex items-center gap-4 mb-16">
          <div className="h-[1px] bg-white/10 flex-1"></div>
          <p className="text-[10px] font-black text-slate-600 uppercase tracking-widest">Post Your Review</p>
          <div className="h-[1px] bg-white/10 flex-1"></div>
        </div>

        {/* GRID 2: INTERACTIVE REVIEW (POSTING LANGSUNG) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* FORM POSTING (KIRI) */}
          <div className="md:col-span-1 bg-black border border-white/10 p-8 rounded-[2rem] h-fit sticky top-10">
            <h3 className="text-lg font-black mb-1 uppercase">Beri Ulasan ✍️</h3>
            <p className="text-[10px] text-slate-500 font-bold mb-6 uppercase tracking-wider">Berikan feedback untuk JOHENSTORE</p>
            
            <form onSubmit={handlePost} className="space-y-4">
              <input 
                type="text" 
                placeholder="Nama / Nickname" 
                className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-xs focus:border-[#ccff00] outline-none"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
              <input 
                type="text" 
                placeholder="Tipe Gamer (Contoh: Pro Player)" 
                className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-xs focus:border-[#ccff00] outline-none"
                value={formData.role}
                onChange={(e) => setFormData({...formData, role: e.target.value})}
              />
              <textarea 
                placeholder="Tulis ulasanmu di sini..." 
                className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-xs focus:border-[#ccff00] outline-none resize-none h-24"
                value={formData.comment}
                onChange={(e) => setFormData({...formData, comment: e.target.value})}
              ></textarea>
              <button className="w-full bg-[#ccff00] text-black font-black py-4 rounded-xl text-xs uppercase tracking-widest hover:bg-white transition duration-300">
                Posting Sekarang ➔
              </button>
            </form>
          </div>

          {/* LIST REVIEW DINAMIS (KANAN) */}
          <div className="md:col-span-2 space-y-6 max-h-[600px] overflow-y-auto pr-4 custom-scrollbar">
            {userReviews.length === 0 ? (
              <div className="border border-dashed border-white/10 rounded-3xl p-20 text-center">
                 <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Belum ada ulasan publik</p>
              </div>
            ) : (
              userReviews.map((post) => (
                <div key={post.id} className="bg-[#111723]/10 border border-white/5 p-6 rounded-2xl animate-fadeIn">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#ccff00] text-black flex items-center justify-center font-black text-[10px]">
                        {post.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="text-xs font-black">{post.name}</h4>
                        <p className="text-[9px] text-slate-500 uppercase font-bold">{post.role}</p>
                      </div>
                    </div>
                    <span className="text-[9px] font-mono text-slate-600">{post.date}</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed italic">"{post.comment}"</p>
                </div>
              ))
            )}
          </div>

        </div>
      </div>
    </section>
  );
}

export default JohenTestimonials;