import { Heart } from 'lucide-react';

export default function KissStickerBurst() {
  return (
    <div className="relative w-full h-64 flex items-center justify-center overflow-hidden bg-gradient-to-br from-pink-100 to-rose-100 rounded-lg">
      {Array.from({ length: 20 }).map((_, i) => {
        const size = Math.random() * 30 + 20;
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const rotation = Math.random() * 360;
        const animationDelay = Math.random() * 2;
        
        return (
          <div
            key={i}
            className="absolute animate-kiss-pop"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              transform: `rotate(${rotation}deg)`,
              animationDelay: `${animationDelay}s`,
            }}
          >
            <Heart
              className="text-rose-400 fill-rose-400"
              style={{ width: size, height: size }}
            />
          </div>
        );
      })}
      
      <div className="relative z-10 text-center">
        <p className="text-rose-600 text-3xl font-handwriting">💋 💋 💋</p>
        <p className="text-rose-500 text-lg font-handwriting mt-2">Sending you all my kisses!</p>
      </div>
    </div>
  );
}
