import React, { useState, useEffect, useRef } from 'react';
import { Send, MessageSquare, X, User, Shield, Check, Heart, HelpCircle } from 'lucide-react';
import { Comment } from '../types.ts';

const generateId = () => Math.random().toString(36).substr(2, 9);

const PRE_SEEDED_COMMENTS: Comment[] = [
  {
    id: 'seed-1',
    name: 'Dr. KH. M. Al-Farabi, M.Ag',
    role: 'Dosen Pembimbing Utama',
    text: 'Inovasi dakwah luar biasa! Penggunaan platform VR di era Society 5.0 menjawab kegelisahan akan syiar agama yang monoton. Sangat diapresiasi kelengkapan teoretisnya.',
    timestamp: '15 Juni 2026, 09:30',
    slideIndex: 1
  },
  {
    id: 'seed-2',
    name: 'Prof. Dr. Suharto, M.T.',
    role: 'Dosen Penguji',
    text: 'Riset yang futuristik dan berani. Bagaimana Anda mengusulkan mitigasi terhadap distorsi narasi sejarah ketika aset visual 3D direkonstruksi dalam Metaverse?',
    timestamp: '15 Juni 2026, 10:15',
    slideIndex: 7
  },
  {
    id: 'seed-3',
    name: 'Syifa Wardani',
    role: 'Mahasiswi KPI',
    text: 'Keren banget kak Zaki! Slider presentasinya gampang dibaca lewat HP, animasinya halus banget. Jadi pingin cobain VR Journey di Senayan Park juga! Sukses sidangnya!',
    timestamp: '15 Juni 2026, 11:02',
    slideIndex: 11
  },
  {
    id: 'seed-4',
    name: 'Rahmat Hidayat',
    role: 'Pengunjung Umum',
    text: 'Saran saya, tambahkan opsi audio kajian real-time dalam virtual room-nya biar dakwahnya makin imersif. Semoga lulus dengan predikat Mumtaz!',
    timestamp: '15 Juni 2026, 12:40',
    slideIndex: 9
  }
];

interface GuestbookProps {
  currentSlideIndex: number;
  currentSlideTitle: string;
  isOpen: boolean;
  onClose: () => void;
}

export function Guestbook({ currentSlideIndex, currentSlideTitle, isOpen, onClose }: GuestbookProps) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newName, setNewName] = useState('');
  const [newRole, setNewRole] = useState('Pengunjung Umum');
  const [newText, setNewText] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('sidang_comments');
    if (saved) {
      try {
        setComments(JSON.parse(saved));
      } catch (e) {
        setComments(PRE_SEEDED_COMMENTS);
      }
    } else {
      setComments(PRE_SEEDED_COMMENTS);
      localStorage.setItem('sidang_comments', JSON.stringify(PRE_SEEDED_COMMENTS));
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim() || !newText.trim()) return;

    const options: Intl.DateTimeFormatOptions = { 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric', 
      hour: '2-digit', 
      minute: '2-digit' 
    };
    const nowStr = new Date().toLocaleDateString('id-ID', options);

    const newComment: Comment = {
      id: generateId(),
      name: newName,
      role: newRole,
      text: newText,
      timestamp: nowStr,
      slideIndex: currentSlideIndex + 1
    };

    const updated = [newComment, ...comments];
    setComments(updated);
    localStorage.setItem('sidang_comments', JSON.stringify(updated));

    setNewName('');
    setNewText('');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  if (!isOpen) return null;

  return (
    <div id="guestbook-drawer" className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm animate-fade-in transition-all">
      <div className="absolute inset-0" onClick={onClose}></div>

      <div className="relative w-full max-w-lg h-full bg-[#02040a] border-l border-amber-500/20 shadow-2xl flex flex-col justify-between z-10 animate-slide-left">
        
        <div className="p-4 border-b border-amber-500/20 flex justify-between items-center bg-[#110f05]/60">
          <div className="flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-[#d4af37]" />
            <div>
              <h3 className="font-serif text-lg text-white font-medium">Buku Tamu & Aspirasi</h3>
              <span className="text-[10px] text-gray-400 font-mono block">Media Q&A Publik - Sidang Skripsi</span>
            </div>
          </div>
          <button onClick={onClose} className="p-1.5 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="px-4 py-2 bg-[#d4af37]/5 border-b border-amber-500/10 text-xs text-amber-300 flex justify-between items-center font-mono">
          <span>Menilai Slide ke-{currentSlideIndex + 1}</span>
          <span className="truncate max-w-[200px] text-right text-gray-400">{currentSlideTitle}</span>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4 no-scrollbar">
          {comments.length === 0 ? (
            <div className="text-center py-12 text-gray-500 text-xs">
              Belum ada pesan yang masuk. Jadilah yang pertama memberikan apresiasi!
            </div>
          ) : (
            comments.map((comment) => (
              <div key={comment.id} className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 space-y-2 hover:border-amber-500/20 transition-all">
                <div className="flex justify-between items-start gap-2">
                  <div>
                    <span className="font-serif text-sm font-semibold text-white block">{comment.name}</span>
                    <span className="text-[10px] font-mono tracking-tight text-amber-500 flex items-center gap-1">
                      {comment.role.includes('Dosen') ? (
                        <Shield className="w-3 h-3 text-[#d4af37]" />
                      ) : comment.role.includes('Penguji') ? (
                        <HelpCircle className="w-3 h-3 text-red-400" />
                      ) : (
                        <User className="w-3 h-3 text-gray-500" />
                      )}
                      {comment.role}
                    </span>
                  </div>
                  <span className="text-[9px] font-mono text-gray-500 whitespace-nowrap">{comment.timestamp}</span>
                </div>
                
                <p className="text-xs text-gray-300 leading-relaxed font-light">{comment.text}</p>
                
                {comment.slideIndex && (
                  <div className="inline-block text-[9px] bg-[#d4af37]/10 text-[#d4af37] px-1.5 py-0.5 rounded font-mono">
                    Slide {comment.slideIndex}
                  </div>
                )}
              </div>
            ))
          )}
        </div>

        <div className="p-4 border-t border-amber-500/20 bg-[#110f05]/60 space-y-3">
          {submitted ? (
            <div className="p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-400 text-xs flex items-center gap-2 justify-center py-4">
              <Check className="w-4 h-4 text-emerald-400 animate-pulse" />
              <span>Aspirasi terkirim! Terima kasih atas dukungannya.</span>
            </div>
          ) : (
            <form id="add-comment-form" onSubmit={handleSubmit} className="space-y-3">
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label htmlFor="input-nama" className="text-[9px] font-mono uppercase tracking-wider text-gray-400 block mb-1">Nama Lengkap</label>
                  <input
                    id="input-nama"
                    type="text"
                    required
                    placeholder="Contoh: Ahmad Rizaldi"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    className="w-full text-xs p-2 rounded-lg bg-black/40 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="select-peran" className="text-[9px] font-mono uppercase tracking-wider text-gray-400 block mb-1">Peran Anda</label>
                  <select
                    id="select-peran"
                    value={newRole}
                    onChange={(e) => setNewRole(e.target.value)}
                    className="w-full text-xs p-2 rounded-lg bg-[#110f05] border border-white/10 text-white focus:outline-none focus:border-amber-500 transition-colors"
                  >
                    <option value="Pengunjung Umum">Pengunjung Umum</option>
                    <option value="Mahasiswa / Rekan">Rekan Seperjuangan</option>
                    <option value="Dosen Akademisi">Akademisi / Dosen</option>
                    <option value="Dewan Penguji">Dewan Penguji</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="input-pesan" className="text-[9px] font-mono uppercase tracking-wider text-gray-400 block mb-1">Pesan / Pertanyaan Sidang</label>
                <textarea
                  id="input-pesan"
                  required
                  rows={2}
                  placeholder="Ketik pertanyaan atau apresiasi Anda..."
                  value={newText}
                  onChange={(e) => setNewText(e.target.value)}
                  className="w-full text-xs p-2 rounded-lg bg-black/40 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-amber-500 transition-colors resize-none"
                />
              </div>

              <button
                id="submit-aspiration"
                type="submit"
                className="w-full py-2.5 rounded-lg bg-[#d4af37] text-black hover:bg-white font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-1.5 transition-all duration-300"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Kirim Dukungan</span>
              </button>
            </form>
          )}

          <div className="text-[9px] text-gray-600 text-center flex items-center justify-center gap-1">
            <Heart className="w-2.5 h-2.5 text-rose-500" />
            <span>Mendukung Integritas Riset Zaki Mubarok</span>
          </div>
        </div>

      </div>
    </div>
  );
}
