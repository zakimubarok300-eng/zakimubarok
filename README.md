# Sidang Skripsi Zaki Mubarok - Metaverse Dakwah

Aplikasi presentasi interaktif untuk sidang skripsi tentang "Menghadirkan Dakwah Ke Metaverse" dengan fitur-fitur inovatif:

## 🚀 Fitur Utama

- **Presentasi Interaktif**: Navigasi smooth antar slide dengan keyboard, mouse, atau touch swipe
- **Simulasi VR Audio**: Dengarkan murottal Quran dari berbagai sumber CDN
- **Tasbih Digital**: Counter digital dengan suara guidance dan nada spiritual
- **Buku Tamu Interaktif**: Komentar dan Q&A dari audiens
- **Responsive Design**: Optimal untuk desktop, tablet, dan mobile
- **Share Slide**: Bagikan link langsung ke slide tertentu
- **Fullscreen Mode**: Mode presentasi fullscreen untuk layar besar

## 📋 Teknologi Stack

- **Frontend**: React 19 + TypeScript
- **Styling**: Tailwind CSS 4 + Motion/Framer Motion
- **Build Tool**: Vite 6
- **Icons**: Lucide React
- **Audio**: Web Audio API + Speech Synthesis

## 🔧 Instalasi & Setup

```bash
# Clone repository
git clone https://github.com/zakimubarok300-eng/zakimubarok.git
cd zakimubarok

# Install dependencies
npm install

# Development server
npm run dev

# Build production
npm run build

# Preview production build
npm run preview
```

Aplikasi akan berjalan di `http://localhost:3000`

## 📱 Fitur Navigasi

### Keyboard
- `Arrow Right` / `Space`: Slide berikutnya
- `Arrow Left`: Slide sebelumnya  
- `F`: Toggle fullscreen

### Mouse/Touch
- Klik tombol navigasi
- Swipe kiri/kanan di mobile
- Deep linking via `#slide=N` di URL

## 🎯 Slide Structure

1. **Cover** - Judul dan informasi peneliti
2. **Latar Belakang** - Konteks penelitian
3. **Fokus Penelitian** - Rumusan masalah
4. **Metodologi** - Pendekatan penelitian
5. **Landasan Teori** - Teori yang digunakan
6. **Potensi Dakwah** - Temuan positif
7. **Tantangan** - Hambatan implementasi
8. **Matriks Analisis** - Tabel perbandingan
9. **Paradigma** - Penutup konseptual
10. **Rekomendasi** - Saran strategis
11. **Hadits** - Motivasi spiritual
12. **Profil Peneliti** - Biodata
13. **Penutup** - Ending slide

## 🌐 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### GitHub Pages
```bash
npm run build
# Push dist folder ke gh-pages branch
```

### Docker
```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json .
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "preview"]
```

## 📄 Lisensi

Proyek ini untuk keperluan sidang skripsi. Silakan sesuaikan sesuai kebutuhan.

## 👤 Penulis

**Zaki Mubarok**  
NIM: 2020.85.11.0036  
Program Studi: Komunikasi dan Penyiaran Islam  
Universitas: UII Darullughah Wadda'wah

---

*Last Updated: June 15, 2026*
