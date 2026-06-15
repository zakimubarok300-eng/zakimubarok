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
    title: "Potensi Dakwah Imersif",
    type: "split",
    splitData: {
      bullets: [
        {
          title: "Pengalaman Sensorik & Emosional",
          desc: "VR memberikan pengalaman mendalam yang seolah membawa audiens hadir fisik di tengah peristiwa sejarah, melampaui efektivitas ceramah satu arah."
        },
        {
          title: "Rekonstruksi Digital Presisi",
          desc: "Mampu memvisualisasikan situs sakral (seperti Ka'bah kuno dan Masjidil Haram), mengobati kerinduan umat yang terhalang jarak fisik."
        },
        {
          title: "Relevansi Generasional",
          desc: "Sangat diminati oleh Generasi Z dan Milenial, meruntuhkan stigma dakwah 'membosankan' menjadi pengalaman belajar yang interaktif dan dinamis."
        }
      ],
      imageUrl: "https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?q=80&w=2024&auto=format&fit=crop",
      imageAlt: "Kaaba / Mecca Digital Render Illustration"
    }
  },
  {
    id: 7,
    title: "Tantangan Implementasi",
    type: "grid",
    gridData: {
      items: [
        {
          iconName: "Receipt",
          title: "Capital Expenditure",
          desc: "Biaya produksi CGI/Render yang masif dan proses sertifikasi kesesuaian syariat berimbas langsung pada tingginya harga tiket bagi pengguna akhir.",
          accentBg: true
        },
        {
          iconName: "Sparkles",
          title: "Limitasi Realisme",
          desc: "Penggunaan format animasi (untuk menghindari penggambaran figur suci secara langsung) dinilai audiens mengurangi empati dibanding live-action.",
          accentBg: true
        },
        {
          iconName: "Radio",
          title: "Infrastruktur & Literasi",
          desc: "Akses broadband yang belum merata di daerah luar kota serta minimnya pemahaman awal masyarakat awam mengenai teknologi perangkat VR.",
          accentBg: true
        }
      ]
    }
  },
  {
    id: 8,
    title: "Matriks Analisis",
    type: "table",
    tableData: {
      headers: ["Parameter Pemenuhan", "Nilai Tambah (Potensi)", "Titik Kritis (Tantangan)"],
      rows: [
        ["Pengalaman Imersif", "Memberi dampak emosional tak terlupakan pada audiens.", "Visual animasi dirasa kurang realistis bagi sebagian kalangan."],
        ["Edukasi Spiritual", "Mendekatkan generasi muda pada nilai esensial Islam.", "Sosialisasi dan akses masih terpusat di kota besar."],
        ["Aksesibilitas", "Menjangkau audiens urban perkotaan dengan waktu terbatas.", "Terhambat oleh keterbatasan infrastruktur jaringan lokal."],
        ["Kepuasan Pengguna", "Generasi digital antusias & retensi belajar meningkat drastis.", "Tarif layanan saat ini dinilai masih relatif mahal."]
      ]
    }
  },
  {
    id: 9,
    title: "Lompatan Paradigma",
    type: "big-number",
    bigNumberData: {
      numberStr: "5.0",
      title: "Sebuah Lompatan Paradigma",
      subtitle: "Pemanfaatan VR dalam dakwah bukan sekadar pergantian medium komunikasi.",
      description: "Ini adalah integrasi utuh antara peradaban teknologi Society 5.0 dengan syiar agama Islam, memastikan pesan agung tetap relevan, menembus batas ruang dan waktu untuk generasi mendatang."
    }
  },
  {
    id: 10,
    title: "Rekomendasi Strategis",
    type: "grid",
    gridData: {
      items: [
        {
          iconName: "Wand2",
          title: "Inovasi Hybrid",
          desc: "Eksplorasi penggabungan rekaman latar nyata dengan efek CGI (Mixed Reality) guna meningkatkan level realisme tanpa melanggar batasan syariat."
        },
        {
          iconName: "Handshake",
          title: "Sinergi Kemitraan",
          desc: "Membangun kolaborasi strategis antara ulama, akademisi, dan investor teknologi untuk menciptakan skema subsidi yang menekan biaya akses mandiri."
        },
        {
          iconName: "Megaphone",
          title: "Ekspansi Literasi",
          desc: "Gencarkan program roadshow demo teknologi ke institusi pendidikan tradisional (seperti Pondok Pesantren & Universitas) di luar kota besar."
        }
      ]
    }
  },
  {
    id: 11,
    title: "Hadits Pendorong",
    type: "quote",
    quoteData: {
      text: "\"Sebaik-baiknya manusia adalah yang paling bermanfaat bagi manusia lainnya.\"",
      source: "— Hadits Riwayat Ahmad / Thabrani —"
    }
  },
  {
    id: 12,
    title: "Profil Peneliti",
    type: "bio",
    bioData: {
      name: "Zaki Mubarok",
      title: "Peneliti Komunikasi Digital & Penyiaran Islam",
      birth: "Bekasi, 22 Oktober 2001",
      nim: "2020.85.11.0036",
      prodi: "Komunikasi dan Penyiaran Islam",
      institusi: "Universitas Islam Internasional Darullughah Wadda'wah",
      email: "zakimubarok13220@gmail.com",
      instagram: "@zakii_mubarok_",
      imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
    }
  },
  {
    id: 13,
    title: "Penutup",
    type: "penutup"
  }
];
