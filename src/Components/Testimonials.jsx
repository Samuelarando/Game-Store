import React from 'react';
import { TESTIMONIALS_DATA } from '../data/testimonialsData';

function Testimonials() {
  return (
    <section id="testimonials" className="bg-[#0b0f19] text-white py-24 px-6 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-2">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-purple-500 block">
            // TRUSTED BY GAMERS
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight">
            Apa Kata Mereka? ⭐
          </h2>
          <p className="text-slate-400 text-sm max-w-md mx-auto pt-2">
            Lebih dari 10,000+ transaksi telah berhasil diproses dengan tingkat kepuasan pelanggan hingga 99.9%.
          </p>
        </div>

        {/* Grid Testi */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((testi) => (
            <div 
              key={testi.id}
              className="bg-[#111723]/40 border border-white/5 p-8 rounded-[2rem] flex flex-col justify-between backdrop-blur-xl relative group hover:border-purple-500/30 transition-all duration-300"
            >
              <div>
                {/* Rating Stars */}
                <div className="flex gap-1 mb-4 text-amber-400">
                  {[...Array(testi.rating)].map((_, i) => (
                    <span key={i}>⭐</span>
                  ))}
                </div>
                {/* Comment */}
                <p className="text-slate-300 text-sm italic leading-relaxed">
                  "{testi.comment}"
                </p>
              </div>

              {/* User Profile */}
              <div className="flex items-center gap-4 mt-8 pt-4 border-t border-white/5">
                <img 
                  src={testi.avatar} 
                  alt={testi.name} 
                  className="w-12 h-12 rounded-full bg-slate-800 border border-white/10"
                />
                <div>
                  <h4 className="text-sm font-black text-white">{testi.name}</h4>
                  <p className="text-[11px] text-slate-500 font-medium">{testi.role}</p>
                  <span className="inline-block bg-purple-500/10 border border-purple-500/20 text-purple-400 text-[9px] font-bold px-2 py-0.5 rounded-md mt-1">
                    {testi.game}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Testimonials;