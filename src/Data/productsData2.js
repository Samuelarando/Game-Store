// Tambahkan ini di bagian bawah file src/data/productsData.js kamu yang kemarin

export const PROMO_BANNERS = [
  {
    id: 1,
    title: "Diskon Akhir Pekan Up To 50%",
    subtitle: "Khusus Top Up MLBB & Wild Rift",
    badge: "Limited Time",
    borderColor: "group-hover:border-cyan-500/50",
    glowColor: "bg-cyan-500/20",
    bgGradient: "from-slate-900 via-purple-950/40 to-slate-900",
    code: "JOHENWEEKEND"
  },
  {
    id: 2,
    title: "Cashback Kilat 20% Semua Game",
    subtitle: "Gunakan kode voucher untuk klaim",
    badge: "Flash Sale",
    borderColor: "group-hover:border-pink-500/50",
    glowColor: "bg-pink-500/20",
    bgGradient: "from-slate-900 via-rose-950/40 to-slate-900",
    code: "JOHENUNTUNG"
  }
];

export const POPULAR_CATEGORIES = [
  { 
    id: 1, 
    name: "Mobile Legends", 
    tagline: "Top Up & Jual Akun", 
    totalProducts: "120+ Items", 
    accent: "group-hover:text-cyan-400",
    image: "/ml.webp" 
  },
  { 
    id: 2, 
    name: "PUBG Mobile", 
    tagline: "UC & Akun Mythic", 
    totalProducts: "85+ Items", 
    accent: "group-hover:text-amber-400",
    image: "/pubg.jfif" 
  },
  { 
    id: 3, 
    name: "Valorant", 
    tagline: "Points & Skins", 
    totalProducts: "95+ Items", 
    accent: "group-hover:text-red-400",
    image: "/valorant.jpg" 
  },
  { 
    id: 4, 
    name: "Free Fire", 
    tagline: "Diamonds & Akun", 
    totalProducts: "110+ Items", 
    accent: "group-hover:text-green-400",
    image: "/ff.jpg" 
  }
];