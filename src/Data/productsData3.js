export const TOPUP_LIST = [
  {
    id: "mlbb",
    name: "Mobile Legends: Bang Bang",
    status: "POPULER",
    type:"topup",
    image: "/ml.webp", 
    priceList: [
      { id: "ml-5", nominal: "5 Diamonds", price: 1500 },
      { id: "ml-50", nominal: "50 Diamonds", price: 14000 },
      { id: "ml-100", nominal: "100 Diamonds", price: 28000 },
      { id: "ml-1000", nominal: "1000 Diamonds", price: 275000 }
    ]
  },
  {
    id: "ff",
    name: "Free Fire",
    type: "topup",
    status: "TERLARIS",
    image: "/ff.jpg",
    priceList: [
      { id: "ff-12", nominal: "12 Diamonds", price: 2000 },
      { id: "ff-50", nominal: "50 Diamonds", price: 8000 },
      { id: "ff-140", nominal: "140 Diamonds", price: 20000 },
      { id: "ff-355", nominal: "355 Diamonds", price: 50000 }
    ]
  },
  {
    id: "val",
    name: "Valorant",
    type: "topup",
    status: "PROMO",
    image: "/valorant.jpg",
    priceList: [
      { id: "val-125", nominal: "125 Points", price: 15000 },
      { id: "val-500", nominal: "500 Points", price: 60000 },
      { id: "val-1375", nominal: "1375 Points", price: 150000 }
    ]
  },
  {
    id: "pubg",
    name: "PUBG Mobile",
    type: "topup",
    status: "NEW",
    image: "/UC-PUBG.png",
    priceList: [
      { id: "pubg-35", nominal: "35 Unknown Cash", price: 7000 },
      { id: "pubg-74", nominal: "74 Unknown Cash", price: 14000 },
      { id: "pubg-221", nominal: "221 Unknown Cash", price: 43000 }
    ]
  }
];


export const JUAL_AKUN_LIST = [
  {
    id: "mlbb-akun", // <-- ID dibedakan khusus pasar akun
    name: "Mobile Legends (Market Akun)",
    status: "PREMIUM",
    image: "/akun-ml1.jfif",
    accountList: [
      {
        id: 'ACC-MLBB-001',
        title: 'MLBB SULTAN ALL UNLOCKED // SKIN KOF CHOU & GUSION SKY LARK',
        price: 1250000,
        status: 'AVAILABLE', 
        rank: 'Mythical Glory',
        winrate: '68.5%',
        heroCount: 122,
        skinCount: 245,
        rareSkins: ['Chou Iori Yagami (KOF)', 'Gusion Cosmic Gleam (LEGEND)'],
        images: ['/images/accounts/mlbb001-ss1.jpg'],
        sellerNote: 'Log Moonton sepuasnya, aman 100% include garansi anti hackback toko.'
      },
      {
        id: 'ACC-MLBB-002',
        title: 'AKUN BANTAH WR 75% // HERO COLL_VALENTINA MANTAP',
        price: 450000,
        status: 'AVAILABLE',
        rank: 'Mythic I',
        winrate: '75.2%',
        heroCount: 80,
        skinCount: 64,
        rareSkins: ['Valentina Cyber Agent'],
        images: ['/images/accounts/mlbb002-ss1.jpg'],
        sellerNote: 'Monsep (Moonton Sepaket) Gmail Kosong.'
      }
    ]
  },
  {
    id: "ff-akun", // <-- ID dibedakan khusus pasar akun
    name: "Free Fire (Market Akun)",
    status: "TERLARIS",
    image: "/ff.jpg",
    accountList: [
      {
        id: 'ACC-FF-001',
        title: 'AKUN FF OLD SEASON 1 // BUNDLE HIP HOP',
        price: 2800000,
        status: 'AVAILABLE',
        rank: 'Heroic',
        winrate: '58%',
        heroCount: 50,
        skinCount: 185,
        rareSkins: ['Bundle Hip Hop S1', 'Criminal Merah'],
        images: ['/images/accounts/ff001-ss1.jpg'],
        sellerNote: 'Data lengkap siap unbind aman jaya.'
      }
    ]
  },
  {
    id: "val-akun", // <-- ID dibedakan khusus pasar akun
    name: "Valorant (Market Akun)",
    status: "PROMO",
    image: "/valo.jfif",
    accountList: [
      {
        id: 'ACC-VAL-001',
        title: 'VALORANT IMMORTAL // REAVER VANDAL',
        price: 850000,
        status: 'AVAILABLE',
        rank: 'Immortal 1',
        winrate: '54.2%',
        heroCount: 22,
        skinCount: 32,
        rareSkins: ['Reaver Vandal', 'Prime Phantom'],
        images: ['/images/accounts/val001-ss1.jpg'],
        sellerNote: 'Region Indo, first e-mail.'
      }
    ]
  }
];