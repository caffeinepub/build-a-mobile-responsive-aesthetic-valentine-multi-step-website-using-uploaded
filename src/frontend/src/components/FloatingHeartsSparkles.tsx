import { Heart, Sparkles } from 'lucide-react';

interface FloatingHeartsSparksProps {
  density?: 'low' | 'medium' | 'high';
}

export default function FloatingHeartsSparkles({ density = 'medium' }: FloatingHeartsSparksProps) {
  const count = density === 'low' ? 8 : density === 'medium' ? 15 : 25;
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: count }).map((_, i) => {
        const isHeart = i % 2 === 0;
        const Icon = isHeart ? Heart : Sparkles;
        const size = Math.random() * 20 + 15;
        const left = Math.random() * 100;
        const animationDelay = Math.random() * 10;
        const animationDuration = Math.random() * 10 + 15;
        
        return (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${left}%`,
              top: '-50px',
              animationDelay: `${animationDelay}s`,
              animationDuration: `${animationDuration}s`,
            }}
          >
            <Icon
              className={isHeart ? 'text-rose-300 fill-rose-300' : 'text-pink-300'}
              style={{ width: size, height: size }}
            />
          </div>
        );
      })}
    </div>
  );
}
