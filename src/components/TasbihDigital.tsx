import React, { useState, useRef, useEffect } from 'react';
import { RefreshCw, Play, Volume2, VolumeX, Heart, Sparkles, AlertCircle } from 'lucide-react';

const DHIKR_PRESETS = [
  { 
    phrase: 'Subhanallah', 
    target: 33, 
    meaning: 'Maha Suci Allah',
    pronunciation: 'Subhanallah',
    arabicPhrase: 'سبحان الله',
    frequencies: [528, 659, 784]
  },
  { 
    phrase: 'Alhamdulillah', 
    target: 33, 
    meaning: 'Segala Puji Bagi Allah',
    pronunciation: 'Alhamdulillah',
    arabicPhrase: 'الحمد لله',
    frequencies: [396, 494, 594]
  },
  { 
    phrase: 'Allahu Akbar', 
    target: 33, 
    meaning: 'Allah Maha Besar',
    pronunciation: 'Allahu Akbar',
    arabicPhrase: 'الله أكبر',
    frequencies: [288, 360, 432]
  },
  { 
    phrase: 'Shalawat Nabawi', 
    target: 100, 
    meaning: 'Pujian atas Rasulullah SAW',
    pronunciation: 'Allahumma shalli ala Muhammad',
    arabicPhrase: 'اللهم صل على محمد',
    frequencies: [320, 384, 480, 640]
  }
];

interface TasbihDigitalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function TasbihDigital({ isOpen, onClose }: TasbihDigitalProps) {
  const [selectedPreset, setSelectedPreset] = useState(0);
  const [count, setCount] = useState(0);
  const [globalTotal, setGlobalTotal] = useState(0);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [audioMode, setAudioMode] = useState<'voice' | 'spiritual' | 'click'>('voice');
  const audioCtxRef = useRef<AudioContext | null>(null);

  const preset = DHIKR_PRESETS[selectedPreset];

  useEffect(() => {
    const savedTotal = localStorage.getItem('tasbih_global_total');
    if (savedTotal) {
      setGlobalTotal(parseInt(savedTotal, 10));
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.getVoices();
    }
  }, []);

  const playClickSound = (freq = 800, duration = 0.05) => {
    if (!soundEnabled) return;
    try {
      const AudioCtxClass = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtxClass) return;
      const ctx = audioCtxRef.current || new AudioCtxClass();
      audioCtxRef.current = ctx;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);

      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch (e) {
      console.log('Audio feedback failed', e);
    }
  };

  const speakDhikr = (phrase: string, pronunciation: string, arabicPhrase?: string, isTargetCompletion = false) => {
    if (!soundEnabled) return;
    try {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        
        const voices = window.speechSynthesis.getVoices();
        const isMaleVoice = (v: SpeechSynthesisVoice) => {
          const nameLower = v.name.toLowerCase();
          return nameLower.includes('male') || nameLower.includes('pria');
        };

        const arabicVoice = voices.find(v => v.lang.startsWith('ar')) || voices[0];
        let textToSpeak = pronunciation;
        
        if (arabicVoice && arabicVoice.lang.startsWith('ar') && arabicPhrase) {
          textToSpeak = arabicPhrase;
        }

        if (isTargetCompletion) {
          textToSpeak += arabicVoice?.lang.startsWith('ar') ? " . تَقَبَّلَ اللَّهُ" : " selesai. Alhamdulillah.";
        }

        const utterance = new SpeechSynthesisUtterance(textToSpeak);
        if (arabicVoice) {
          utterance.voice = arabicVoice;
          utterance.lang = arabicVoice.lang;
        }
        utterance.pitch = 0.65;
        utterance.rate = 1.0;
        utterance.volume = 0.95;
        
        window.speechSynthesis.speak(utterance);
      }
    } catch (e) {
      console.warn('TTS initiation failed', e);
    }
  };

  const playSpiritualSound = (frequencies: number[]) => {
    if (!soundEnabled) return;
    try {
      const AudioCtxClass = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtxClass) return;
      const ctx = audioCtxRef.current || new AudioCtxClass();
      audioCtxRef.current = ctx;

      frequencies.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        const triggerDelay = idx * 0.045;
        const noteDuration = 0.4 - idx * 0.05;

        osc.type = idx === 0 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(freq, ctx.currentTime + triggerDelay);

        gain.gain.setValueAtTime(0, ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0.04, ctx.currentTime + triggerDelay + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + triggerDelay + noteDuration);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(ctx.currentTime + triggerDelay);
        osc.stop(ctx.currentTime + triggerDelay + noteDuration);
      });
    } catch (e) {
      console.log('Spiritual sound synthesis error', e);
    }
  };

  const handleTap = () => {
    const nextCount = count + 1;
    const isTargetHit = nextCount === preset.target;
    
    setCount(isTargetHit ? 0 : nextCount);
    
    const nextTotal = globalTotal + 1;
    setGlobalTotal(nextTotal);
    localStorage.setItem('tasbih_global_total', nextTotal.toString());

    if (isTargetHit) {
      playClickSound(1200, 0.35);
      if (soundEnabled) {
        if (audioMode === 'voice') {
          speakDhikr(preset.phrase, preset.pronunciation, preset.arabicPhrase, true);
        } else if (audioMode === 'spiritual') {
          playSpiritualSound([880, 1109, 1318]);
        }
      }
      if (navigator.vibrate) {
        navigator.vibrate([100, 50, 100]);
      }
    } else {
      if (soundEnabled) {
        if (audioMode === 'voice') {
          speakDhikr(preset.phrase, preset.pronunciation, preset.arabicPhrase, false);
          playClickSound(350, 0.02);
        } else if (audioMode === 'spiritual') {
          playSpiritualSound(preset.frequencies);
        } else {
          playClickSound(600, 0.04);
        }
      }
      if (navigator.vibrate) {
        navigator.vibrate(30);
      }
    }
  };

  const handleReset = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCount(0);
    playClickSound(400, 0.15);
  };

  const handlePresetChange = (index: number) => {
    setSelectedPreset(index);
    setCount(0);
    const nextPreset = DHIKR_PRESETS[index];
    if (soundEnabled) {
      if (audioMode === 'voice') {
        speakDhikr(nextPreset.phrase, nextPreset.pronunciation, nextPreset.arabicPhrase, false);
      } else if (audioMode === 'spiritual') {
        playSpiritualSound(nextPreset.frequencies);
      } else {
        playClickSound(500, 0.08);
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div id="tasbih-overlay" className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-4 animate-fade-in">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-sm bg-[#02040a] border border-amber-500/30 rounded-3xl p-6 shadow-2xl flex flex-col justify-between overflow-hidden animate-scale-up z-10">
        
        <div className="absolute -top-12 -left-12 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

        <div className="flex justify-between items-center mb-5 z-10">
          <div>
            <span className="text-[10px] font-mono tracking-widest text-[#d4af37] uppercase flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-[#d4af37]" />
              Tasbih Digital Seluler
            </span>
            <h3 className="font-serif text-lg text-white font-medium">Zikir Pendukung</h3>
          </div>
          <div className="flex gap-1.5">
            <button 
              id="toggle-tasbih-audio"
              onClick={() => {
                setSoundEnabled(!soundEnabled);
                playClickSound(700, 0.05);
              }}
              className="p-2 rounded-full border border-white/5 bg-white/[0.02] text-[#d4af37] hover:bg-white/10 transition-all"
            >
              {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4 text-gray-600" />}
            </button>
            <button 
              id="close-tasbih"
              onClick={onClose}
              className="text-white bg-white/5 border border-white/10 hover:bg-white/10 text-xs px-3.5 py-1.5 rounded-full transition-all"
            >
              Tutup
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-1.5 mb-5 z-10">
          {DHIKR_PRESETS.map((p, index) => (
            <button
              id={`tasbih-preset-${index}`}
              key={p.phrase}
              onClick={() => handlePresetChange(index)}
              className={`text-left p-2.5 rounded-xl border text-xs transition-all ${
                selectedPreset === index
                  ? 'bg-[#d4af37]/10 border-[#d4af37] text-white'
                  : 'bg-white/[0.01] border-white/5 text-gray-400 hover:bg-white/5'
              }`}
            >
              <div className="font-serif font-semibold">{p.phrase}</div>
              <div className="text-[9px] text-gray-500 font-mono mt-0.5">Target: {p.target}x</div>
            </button>
          ))}
        </div>

        <div className="text-center py-2 px-3 bg-[#d4af37]/5 border border-amber-500/10 rounded-xl mb-3.5 text-xs text-gray-300 font-serif italic">
          "{preset.meaning}"
        </div>

        <div className="mb-4 bg-white/[0.02] border border-white/5 rounded-2xl p-2.5 space-y-1.5 z-10">
          <span className="text-[9px] font-mono tracking-widest text-[#d4af37] uppercase block text-center">MODE RESPONS SUARA</span>
          <div className="grid grid-cols-3 gap-1">
            {[
              { id: 'voice', label: 'Suara Lafadz', sub: 'Lafalan Arab/ID' },
              { id: 'spiritual', label: 'Nada Spiritual', sub: 'Melodi harmonis' },
              { id: 'click', label: 'Ketuk Biasa', sub: 'Bead tap click' }
            ].map((mode) => (
              <button
                id={`tasbih-audio-mode-${mode.id}`}
                key={mode.id}
                onClick={() => {
                  setAudioMode(mode.id as any);
                  setSoundEnabled(true);
                  if (mode.id === 'voice') speakDhikr(preset.phrase, preset.pronunciation, preset.arabicPhrase, false);
                  else if (mode.id === 'spiritual') playSpiritualSound(preset.frequencies);
                  else playClickSound(600, 0.04);
                }}
                className={`flex flex-col items-center justify-center py-1.5 px-0.5 rounded-lg border text-center transition-all ${
                  soundEnabled && audioMode === mode.id
                    ? 'bg-[#d4af37]/20 border-[#d4af37] text-white shadow-[0_0_8px_rgba(212,175,55,0.2)]'
                    : 'bg-white/[0.01] border-white/5 text-gray-400 hover:bg-white/5'
                }`}
              >
                <span className="text-[10px] font-medium block">{mode.label}</span>
                <span className="text-[7.5px] text-gray-500 leading-none mt-0.5 block">{mode.sub}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center justify-center py-2 mb-2 z-10">
          <button
            id="tasbih-tap-button"
            onClick={handleTap}
            className="w-40 h-40 rounded-full bg-gradient-to-tr from-[#110f05] via-[#221c08] to-[#110f05] border-2 border-amber-500/40 hover:border-amber-400 p-2 shadow-2xl relative group active:scale-95 transition-all text-center flex flex-col justify-center items-center"
          >
            <div className="absolute inset-0 rounded-full border-2 border-[#d4af37]/10 animate-ping pointer-events-none" />

            <span className="text-[10px] font-mono tracking-widest text-[#d4af37]/60 block mb-1">KETUK PORTAL</span>
            <span className="font-mono text-5xl font-bold text-white tracking-widest drop-shadow-[0_2px_10px_rgba(215,175,55,0.3)]">
              {count}
            </span>
            <span className="text-[9px] text-gray-500 font-mono mt-2 block">
              Siklus: {preset.target}
            </span>
          </button>
        </div>

        <div className="flex justify-between items-center pt-3 border-t border-white/10 text-xs font-mono z-10">
          <div className="flex flex-col">
            <span className="text-[10px] text-gray-500 uppercase tracking-wider">Total Zikirku</span>
            <span className="text-[#d4af37] font-semibold">{globalTotal} kali</span>
          </div>

          <button
            id="reset-tasbih-counter"
            onClick={handleReset}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-red-500/20 text-red-400 bg-red-950/10 hover:bg-red-500/20 transition-all font-mono text-[10px] uppercase"
          >
            <RefreshCw className="w-3 h-3" />
            <span>Reset</span>
          </button>
        </div>

        <div className="text-[9px] text-gray-500 text-center mt-4 font-mono flex items-center justify-center gap-1">
          <AlertCircle className="w-3 h-3 text-[#d4af37]/70" />
          <span>Tap getaran hibrida diaktifkan di HP Anda</span>
        </div>

      </div>
    </div>
  );
}
