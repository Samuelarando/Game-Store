// src/data/productsData.js

export const ALL_PRODUCTS = [
  { 
    id: 1, 
    name: "86 Diamonds + Bonus", 
    game: "Mobile Legends", 
    type: "topup", 
    price: 20000, 
    tag: "Popular", 
    status: "Instant",
    // Ganti dengan nama file gambar asli yang ada di folder public kamu
    image: "/ml.webp" 
  },
  { 
    id: 2, 
    name: "172 Diamonds Kilat", 
    game: "Mobile Legends", 
    type: "topup", 
    price: 40000, 
    tag: "Best Seller", 
    status: "Instant",
    image: "/ml.webp"
  },
  { 
    id: 3, 
    name: "Akun MLBB Mythical Glory", 
    game: "Mobile Legends", 
    type: "akun", 
    price: 450000, 
    tag: "Premium", 
    specs: ["110 Heroes", "85 Skins", "WR 68%"], 
    status: "Ready Stock", 
    description: "Akun pribadi aman 100%, login via Moonton sepaket dengan emailnya.",
    image: "/ml.webp"
  },
  { 
    id: 4, 
    name: "6256 + 1494 UC Epic", 
    game: "PUBG Mobile", 
    type: "topup", 
    price: 1300000, 
    tag: "Flash Sale", 
    status: "Instant",
    image: "/pubg.jfif"
  },
  { 
    id: 5, 
    name: "Akun PUBG M M416 Glacier", 
    game: "PUBG Mobile", 
    type: "akun", 
    price: 850000, 
    tag: "Rare Skin", 
    specs: ["M416 Lv. 4", "Set Setan", "RP Max"], 
    status: "Ready Stock", 
    description: "Spek mantap eks kolpri, jaminan anti hackback bergaransi toko dari Johen Store.",
    image: "/pubg.jfif"
  },
  { 
    id: 6, 
    name: "1125 Points Vandal", 
    game: "Valorant", 
    type: "topup", 
    price: 135000, 
    tag: "Best Value", 
    status: "Instant",
    image: "/valorant.jpg"
  },
];

export const PAYMENT_METHODS = [
  { id: 'qris', name: 'QRIS (E-Wallet)', icon: '📱', fee: 'Gratis' },
  { id: 'bca', name: 'BCA Virtual Account', icon: '🏦', fee: 'Rp 2,500' },
  { id: 'gopay', name: 'GoPay', icon: '🟢', fee: 'Rp 1,000' }
];