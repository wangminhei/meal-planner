"use client";

import { useState, useEffect, useRef } from 'react';
import { generateDailyMenu, DayMenu, Recipe } from '@/lib/mealLogic';

export default function Home() {
  const [menu, setMenu] = useState<DayMenu | null>(null);
  const [history, setHistory] = useState<string[]>([]);
  const [isClient, setIsClient] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playClickSound = () => {
    try {
      const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
      const ctx = new AudioContext();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      
      osc.type = 'sine';
      osc.frequency.setValueAtTime(600, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1200, ctx.currentTime + 0.1);
      
      gain.gain.setValueAtTime(0.5, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);
      
      osc.start();
      osc.stop(ctx.currentTime + 0.1);
    } catch (e) {
      console.error("Audio API not supported", e);
    }
  };

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isMusicPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(e => console.log("Can't play audio:", e));
      }
      setIsMusicPlaying(!isMusicPlaying);
    }
  };

  useEffect(() => {
    setIsClient(true);
    const saved = localStorage.getItem('vietMealHistory');
    if (saved) {
      try {
        setHistory(JSON.parse(saved));
      } catch (e) {}
    }
  }, []);

  const handleGenerate = () => {
    playClickSound(); // Phát âm thanh khi Click
    
    // Nếu nhạc chưa bật, tự động bật nhẹ nhàng khi người dùng tương tác lần đầu
    if (!isMusicPlaying && audioRef.current) {
      audioRef.current.volume = 0.3; // Chỉnh âm lượng nhạc nền vừa phải
      audioRef.current.play().then(() => setIsMusicPlaying(true)).catch(e => console.log(e));
    }

    setIsGenerating(true);
    setTimeout(() => {
      // Keep only last 28 records (7 days * 4 dishes) to check against
      const recentHistory = history.slice(-28);
      const pastIds = new Set(recentHistory);
      
      const newMenu = generateDailyMenu(pastIds);
      setMenu(newMenu);
      
      const newIds = [newMenu.man.id, newMenu.rau.id, newMenu.canh.id, newMenu.phu.id];
      const updatedHistory = [...history, ...newIds];
      setHistory(updatedHistory);
      localStorage.setItem('vietMealHistory', JSON.stringify(updatedHistory));
      setIsGenerating(false);
    }, 600); // fake loading for smooth micro-animations
  };

  if (!isClient) return <div className="loadingContainer">Đang tải cấu hình...</div>;

  return (
    <main className="container">
      {/* Thẻ Audio chạy nhạc nền vui tươi (Link nhạc royalty-free) */}
      <audio ref={audioRef} loop src="https://cdn.pixabay.com/download/audio/2022/05/16/audio_db6591201e.mp3?filename=happy-asian-intro-110034.mp3" />
      
      <button className="music-toggle" onClick={toggleMusic} title="Bật/Tắt nhạc nền">
        {isMusicPlaying ? "🔊 Hát hò" : "🔇 Yên tĩnh"}
      </button>

      <header className="header">
        <h1>Bữa Cơm Ngon Mẹ Nấu ❤️</h1>
        <p>AI Meal Planner: Tự động lên thực đơn 500+ món chuẩn vị Nam Trung Bộ.</p>
        <button className="generate-btn" onClick={handleGenerate} disabled={isGenerating}>
          {isGenerating ? "Đang xốc chảo..." : "Gợi ý Thực Đơn Hôm Nay"}
        </button>
      </header>

      {menu && (
        <div className="menu-display fade-in">
          <div className="menu-summary glass-panel">
            <h2>HÔM NAY ĂN GÌ:</h2>
            <ul>
              <li><strong>🥘 Món mặn:</strong> {menu.man.name}</li>
              <li><strong>🥗 Món rau:</strong> {menu.rau.name}</li>
              <li><strong>🍲 Món canh:</strong> {menu.canh.name}</li>
              <li><strong>🥒 Món phụ:</strong> {menu.phu.name}</li>
            </ul>
          </div>

          <div className="recipes-grid">
            <RecipeCard recipe={menu.man} icon="🥘" />
            <RecipeCard recipe={menu.rau} icon="🥗" />
            <RecipeCard recipe={menu.canh} icon="🍲" />
            <RecipeCard recipe={menu.phu} icon="🥒" />
          </div>
        </div>
      )}

      <footer className="footer">
        Made with 🧡 by <strong>WangMinHei</strong>
      </footer>
    </main>
  );
}

function RecipeCard({ recipe, icon }: { recipe: Recipe; icon: string }) {
  return (
    <div className="recipe-card glass-panel">
      {recipe.image && (
        <div className="recipe-image-wrapper">
          <img src={recipe.image} alt={recipe.name} className="recipe-image" loading="lazy" />
        </div>
      )}
      <div className="recipe-header">
        <h3>{icon} {recipe.name}</h3>
        <span className="time-badge">⏱ {recipe.time}</span>
      </div>
      
      <div className="recipe-section">
        <h4>Nguyên liệu:</h4>
        <ul className="ingredients-list">
          {recipe.ingredients.map((ing, idx) => (
            <li key={idx}>{ing}</li>
          ))}
        </ul>
      </div>

      <div className="recipe-section">
        <h4>Cách nấu:</h4>
        <ol className="steps-list">
          {recipe.steps.map((step, idx) => (
            <li key={idx}>{step}</li>
          ))}
        </ol>
      </div>

      {recipe.tips && (
        <div className="recipe-tip">
          <strong>💡 Mẹo Nam Trung Bộ:</strong> {recipe.tips}
        </div>
      )}
    </div>
  );
}
