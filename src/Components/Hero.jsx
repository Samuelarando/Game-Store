import React from 'react';
import { motion } from 'framer-motion'; // 💡 Import motion
import { heroTextVariant, heroTextChild, floatingCard } from '../animations/variants'; 

function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 px-6 overflow-hidden bg-[#581c87]">
      
      {/* ================= BACKGROUND EFFECT ================= */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1e1b4b] via-[#6d28d9]/40 to-[#pink-500]/20 pointer-events-none" />

      {/* GLOW AMBIENT EFFECTS */}
      <div className="absolute w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-pink-500 blur-[100px] md:blur-[150px] opacity-30 top-[-100px] left-[-100px] pointer-events-none" />
      <div className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-cyan-500 blur-[100px] md:blur-[150px] opacity-20 bottom-[-50px] right-[-50px] pointer-events-none" />

     
      <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-white z-10">

       
        <motion.div 
          variants={heroTextVariant}
          initial="hidden"
          animate="visible"
          className="text-center md:text-left space-y-6"
        >
          {/* Badge Kecil */}
          <motion.div variants={heroTextChild} className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-medium tracking-wide border border-white/10">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            Official Gaming Marketplace
          </motion.div>

          {/* Judul Utama */}
          <motion.h1 variants={heroTextChild} className="text-5xl md:text-7xl font-extrabold tracking-tight leading-none">
            Never <br className="hidden md:block" />
            Stop{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Gaming
            </span>
          </motion.h1>

          {/* Deskripsi */}
          <motion.p variants={heroTextChild} className="max-w-md mx-auto md:mx-0 text-base md:text-lg text-white/80 leading-relaxed">
            Top up game favoritmu dan temukan akun premium idamanmu dengan cepat, murah, dan aman.
          </motion.p>

          {/* Tombol */}
          <motion.div variants={heroTextChild} className="pt-2">
            <button className="bg-[#ccff00] text-black px-8 py-3.5 rounded-xl font-bold hover:bg-[#b5e600] active:scale-95 transition-all shadow-[0_0_20px_rgba(204,255,0,0.4)] hover:shadow-[0_0_30px_rgba(204,255,0,0.6)]">
              What's New 👾
            </button>
          </motion.div>
          
          {/* Statistik */}
          <motion.div variants={heroTextChild} className="flex items-center justify-center md:justify-start gap-4 pt-4 border-t border-white/10 max-w-xs mx-auto md:mx-0">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-slate-400 border-2 border-[#1e1b4b]" />
              <div className="w-8 h-8 rounded-full bg-slate-500 border-2 border-[#1e1b4b]" />
              <div className="w-8 h-8 rounded-full bg-slate-600 border-2 border-[#1e1b4b]" />
            </div>
            <div className="text-left">
              <p className="text-xs font-bold text-cyan-300">20,000+</p>
              <p className="text-[10px] text-white/60 uppercase tracking-wider">Active Subscribers</p>
            </div>
          </motion.div>
        </motion.div>

        {/* --- BLOK GAMBAR ISOMETRIK / DIAGONAL (KANAN) --- */}
        {/* 💡 Beri efek animasi masuk fade-in saat pertama kali dimuat */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative flex justify-center items-center h-[450px] md:h-[550px] w-full"
        >
          
          {/* Grid Container */}
          <div className="relative grid grid-cols-2 gap-4 md:gap-5 transform rotate-[-12deg] scale-100 md:scale-105 translate-x-4 md:translate-x-12">
            
            {/* KOLOM KIRI (Posisi Turun) */}
            <div className="space-y-4 md:space-y-5 transform translate-y-12">
              
              {/* Card Gambar 1 - Delay Melayang: 0 detik */}
              <motion.div 
                variants={floatingCard(0)} 
                animate="animate"
                className="w-36 h-48 md:w-48 md:h-64 rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 group bg-slate-800"
              >
                <img 
                  src="/pubg.jfif" 
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  alt="PUBG Mobile"
                  loading="lazy"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              </motion.div>

              {/* Card Gambar 2 - Delay Melayang: 0.5 detik (Mencegah gerakan serempak) */}
              <motion.div 
                variants={floatingCard(0.5)} 
                animate="animate"
                className="w-36 h-48 md:w-48 md:h-64 rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 group bg-slate-800"
              >
                <img 
                  src="/ff.jpg" 
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  alt="Free Fire"
                  loading = "lazy"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              </motion.div>
            </div>

            {/* KOLOM KANAN (Posisi Normal / Naik) */}
            <div className="space-y-4 md:space-y-5">
              
              {/* Card Gambar Utama 3 - Delay Melayang: 0.25 detik */}
              <motion.div 
                variants={floatingCard(0.25)} 
                animate="animate"
                className="w-36 h-48 md:w-52 md:h-72 rounded-[2rem] overflow-hidden shadow-[0_25px_60px_rgba(6,182,212,0.3)] border-2 border-cyan-400 group relative bg-slate-800"
              >
                <img 
                  src="/ml.webp" 
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  alt="Mobile Legends"
                  loading="lazy"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 via-transparent to-white/10 pointer-events-none" />
              </motion.div>

              {/* Card Gambar 4 - Delay Melayang: 0.75 detik */}
              <motion.div 
                variants={floatingCard(0.75)} 
                animate="animate"
                className="w-36 h-48 md:w-48 md:h-64 rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 group bg-slate-800"
              >
                <img 
                  src="/valorant.jpg" 
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  alt="Valorant"
                  loading="lazy"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              </motion.div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;