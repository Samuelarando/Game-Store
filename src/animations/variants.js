// Pengingat isi src/animations/variants.js kamu:
export const stackToGrid = {
  hidden: (index) => ({
    opacity: 0,
    y: 80,
    scale: 0.85,
    x: index % 2 === 0 ? -40 : 40,
    rotate: index % 2 === 0 ? -5 : 5,
  }),
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 14,
    },
  },
  // 💡 Tambahkan exit di bawah ini agar saat difilter/dihapus, kartunya menghilang dengan estetik
  exit: {
    opacity: 0,
    scale: 0.9,
    y: 20,
    transition: { duration: 0.2 }
  }
};

export const promoSlideIn = {
  hidden: (index) => ({
    opacity: 0,
    x: index % 2 === 0 ? -60 : 60, // Genap dari kiri, ganjil dari kanan
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 55,
      damping: 14,
    },
  },
};

// 8. Animasi Kategori Game (Efek Pop-Up Mengembang / Scale Up)
export const categoryPopUp = {
  hidden: { 
    opacity: 0, 
    scale: 0.8, 
    y: 20 
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 12,
    },
  },
};

export const heroTextVariant = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 15,
      staggerChildren: 0.15, // Memicu element anak (badge, h1, p, button) muncul bergantian
    },
  },
};

// 5. Animasi Child Teks Hero
export const heroTextChild = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 60, damping: 13 }
  }
};

export const floatingCard = (delay = 0) => ({
  animate: {
    y: [0, -12, 0], // Naik turun sejauh 12 pixel
    transition: {
      duration: 4,
      ease: "easeInOut",
      repeat: Infinity,
      delay: delay, // Jeda waktu agar gerakan antar kartu tidak kompak (lebih natural)
    },
  },
});


export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Jeda waktu meluncur antar kartu
    },
  },
};


