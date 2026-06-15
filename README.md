# Sidang Skripsi Zaki Mubarok - Dakwah Metaverse

🎓 **Presentasi Interaktif Sidang Skripsi S1**  
📍 Tema: *Menghadirkan Dakwah Ke Metaverse: Penggunaan Virtual Reality Dalam Komunikasi Dakwah Modern*

## 🌟 Fitur Utama

✨ **13 Slide Presentasi Dinamis**
- Cover, Background, Research Focus
- Methodology, Theory Foundation
- Potential & Challenges Analysis
- Strategic Recommendations & Author Bio

🎮 **Interactive Components**
- 📍 Slide Navigation (Keyboard, Touch, Click)
- 🎬 Autoplay dengan Kontrol Kecepatan
- 📱 Responsive Design (Mobile & Desktop)
- 🔗 Deep Linking (#slide=X)
- 📤 Shareable Slide Links

🎙️ **VR Audio Simulator**
- Quran Recitation from Multiple CDNs
- 3 Immersive Scenarios (Kabah, Isra'Miraj, Shafa-Marwah)
- Real-time Audio Controls & Fallback Support

🧿 **Digital Tasbih**
- Voice-guided Dhikr with Multiple Modes
- Spiritual Sound Synthesis
- Haptic Vibration Support
- Session History Tracking

💬 **Guestbook & Q&A**
- Pre-seeded Comments from Faculty
- Real-time Submission & LocalStorage
- Slide-specific Feedback

## 🚀 Quick Start

### Prerequisites
- **Node.js** v16+ (Download from [nodejs.org](https://nodejs.org/))
- **npm** atau **yarn**

### Installation

```bash
# Clone repository
git clone https://github.com/zakimubarok300-eng/zakimubarok.git
cd zakimubarok

# Install dependencies
npm install

# Run development server
npm run dev

# Open in browser
# http://localhost:3000
```

### Build for Production

```bash
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
.
├── src/
│   ├── main.tsx                 # React entry point
│   ├── App.tsx                  # Main app component
│   ├── index.css                # Global styles & Tailwind
│   ├── data.ts                  # Slide content data
│   ├── types.ts                 # TypeScript interfaces
│   └── components/
│       ├── SlideRenderer.tsx     # Slide display logic
│       ├── Guestbook.tsx        # Comments drawer
│       ├── TasbihDigital.tsx    # Digital rosary
│       ├── VRSimulator.tsx      # Audio VR scenarios
│       └── IconRenderer.tsx     # Icon component
├── index.html                   # HTML template
├── vite.config.ts              # Vite configuration
├── tsconfig.json               # TypeScript config
├── package.json                # Dependencies
└── README.md                   # This file
```

## 🎨 Customization

### Edit Slide Content
Modify `src/data.ts` untuk mengubah konten slide:

```typescript
export const slidesData: SlideItem[] = [
  {
    id: 1,
    title: "Cover",
    type: "cover",
    coverData: {
      title: "Your Title Here",
      // ...
    }
  }
];
```

### Customize Colors
Edit `src/index.css` dan `vite.config.ts`:
- Primary: `#d4af37` (Gold)
- Background: `#02040a` (Dark Blue)

## 🌐 Deployment Options

### Option 1: GitHub Pages
```bash
# Add to vite.config.ts
export default {
  base: '/zakimubarok/',
  // ...
}

npm run build
# Push dist/ folder to gh-pages branch
```

### Option 2: Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### Option 3: Netlify
```bash
npm run build
# Drag & drop dist/ folder to Netlify
```

### Option 4: Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "preview"]
```

## 📱 Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Tech Stack

- **React** 19.0.1
- **Vite** 6.2.3
- **TypeScript** 5.8.2
- **Tailwind CSS** 4.1.14
- **Framer Motion** 12.23.24
- **Lucide React** 0.546.0

## 📖 Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `→` / `Space` | Next Slide |
| `←` | Previous Slide |
| `F` | Toggle Fullscreen |
| `1-9` | Jump to Slide |

## 🐛 Troubleshooting

### Audio not playing?
- Check browser autoplay policy
- Ensure CORS headers on CDN servers
- Try switching CDN server in VR Simulator

### Styles not applying?
```bash
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Build errors?
```bash
npm run clean
npm run build
```

## 📄 License

This project is created for Zaki Mubarok's thesis presentation.  
All rights reserved © 2026

## 👨‍💼 Author

**Zaki Mubarok**  
📧 zakimubarok13220@gmail.com  
📱 [@zakii_mubarok_](https://instagram.com/zakii_mubarok_)  
NIM: 2020.85.11.0036  
Program Studi: Komunikasi dan Penyiaran Islam  
Institusi: UII Darullughah Wadda'wah

---

**Wassalamu'alaikum Warahmatullahi Wabarakatuh** ☪️
