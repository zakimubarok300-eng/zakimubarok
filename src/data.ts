import { SlideItem } from './types.ts';

export const slidesData: SlideItem[] = [
  {
    id: 1,
    title: "Cover",
    type: "cover",
    coverData: {
      title: "Menghadirkan Dakwah Ke Metaverse",
      subtitle: "Penggunaan Dunia Virtual Reality Dalam Komunikasi Dakwah Modern",
      author: "Zaki Mubarok",
      institution: "UII Darullughah Wadda'wah"
    }
  },
  {
    id: 2,
    title: "Latar Belakang",
    type: "split",
    splitData: {
      bullets: [
        {
          title: "Disrupsi Digital",
          desc: "Perkembangan teknologi melahirkan ekosistem Metaverse dan Virtual Reality (VR) yang mengubah paradigma interaksi global secara komprehensif."
        },
        {
          title: "Adaptasi Dakwah",
          desc: "Dakwah harus senantiasa proaktif beradaptasi dengan era Revolusi Sosial 5.0 agar syiar agama tetap relevan dan dinamis di tengah masyarakat modern."
        },
        {
          title: "Medium Baru",
          desc: "Virtual Reality membuka horizon baru sebagai instrumen komunikasi interaktif, menawarkan kedalaman pengalaman spiritual yang berkesan bagi para digital natives."
        }
      ],
      imageUrl: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?q=80&w=2070&auto=format&fit=crop",
      imageAlt: "Metaverse and VR Technology Presentation Art"
    }
  },
  {
    id: 3,
    title: "Fokus Penelitian",
    type: "highlight",
    highlightData: {
      iconName: "Target",
      title: "Fokus Penelitian",
      text: "\"Apa saja potensi inovatif sekaligus tantangan strategis yang dihadapi dalam mengimplementasikan Virtual Reality sebagai sarana komunikasi dakwah kontemporer?\"",
      subText: "Rumusan Masalah Utama Penyelidikan"
    }
  },
  {
    id: 4,
    title: "Metodologi Riset",
    type: "grid",
    gridData: {
      items: [
        {
          iconName: "Microscope",
          title: "Pendekatan",
          desc: "Kualitatif Deskriptif. Memadukan eksplorasi lapangan secara langsung dengan studi pustaka yang mendalam untuk mendapatkan benang merah teoretis."
        },
        {
          iconName: "MapPin",
          title: "Lokasi & Subjek",
          desc: "Eksklusif dilakukan di VR Journey Indonesia, Senayan Park. Mengambil data dari Jajaran Manajerial, Staf Ahli, dan Pengguna aktif."
        },
        {
          iconName: "Database",
          title: "Pengumpulan Data",
          desc: "Observasi partisipatif secara langsung, Wawancara Mendalam (In-depth Interview), serta penelusuran Dokumentasi resmi."
        }
      ]
    }
  },
  {
    id: 5,
    title: "Landasan Teori",
    type: "grid",
    gridData: {
      items: [
        {
          iconName: "Brain",
          title: "Kognitif & Info",
          desc: "Kebutuhan intelektual akan pemahaman sejarah Islam (seperti Hijrah dan Isra' Mi'raj) secara mendetail melalui visualisasi 3D."
        },
        {
          iconName: "Heart",
          title: "Emosional & Personal",
          desc: "Kebutuhan koneksi batin, merasakan atmosfer spiritual secara langsung, dan membangun hubungan emosional intim dengan sejarah agama."
        },
        {
          iconName: "Users",
          title: "Sosial & Integrasi",
          desc: "Kebutuhan interaksi dalam komunitas virtual religius, menjembatani keterbatasan ruang, fisik, dan waktu untuk beribadah serentak."
        }
      ]
    }
  },
  {
    id: 6,
    title: "Penutup",
    type: "penutup"
  }
];