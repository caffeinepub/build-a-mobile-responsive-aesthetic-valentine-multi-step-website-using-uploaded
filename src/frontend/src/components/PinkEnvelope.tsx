import { useState } from 'react';
import { Mail } from 'lucide-react';

interface PinkEnvelopeProps {
  isOpen: boolean;
  onToggle: () => void;
}

export default function PinkEnvelope({ isOpen, onToggle }: PinkEnvelopeProps) {
  return (
    <div className="relative w-full max-w-lg">
      <button
        onClick={onToggle}
        className="relative w-full focus:outline-none focus:ring-4 focus:ring-rose-300 rounded-lg transition-all"
        aria-label={isOpen ? 'Close envelope' : 'Open envelope'}
      >
        <div className={`relative transition-all duration-700 ${isOpen ? 'scale-105' : 'scale-100'}`}>
          {/* Envelope body */}
          <div className="bg-gradient-to-br from-pink-200 to-pink-300 rounded-lg shadow-2xl p-8 md:p-12 border-4 border-pink-400">
            <div className="relative">
              {/* Envelope flap */}
              <div
                className={`absolute -top-12 md:-top-16 left-0 right-0 h-24 md:h-32 bg-gradient-to-br from-pink-300 to-pink-400 transition-transform duration-700 origin-top ${
                  isOpen ? '-rotate-180' : 'rotate-0'
                }`}
                style={{
                  clipPath: 'polygon(0 0, 50% 100%, 100% 0)',
                }}
              >
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-8 h-8 bg-rose-400 rounded-full flex items-center justify-center">
                    <Mail className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>

              {/* Letter content */}
              <div
                className={`transition-all duration-700 ${
                  isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
                }`}
              >
                <div className="bg-cream-50 rounded-lg p-6 shadow-inner">
                  <p className="text-rose-700 font-handwriting text-base md:text-lg leading-relaxed">
                    Hey love,
                    <br /><br />
                    I wanted to do something special today, simply because you matter to me. Valentine's Day isn't about grand gestures—it's about the feeling of choosing someone, even in the quiet moments. I admire the way you are, understand, and bring calm positivity into my world. Being around you feels safe, natural, and real. I appreciate your honesty, your kindness, and the way you show up as yourself. I manifest this year to have trip with you, enjoy this 2026 with you. No pressure, no expectations—just something sincere, from the heart.
                    <br /><br />
                    <span className="text-rose-500">Always</span>
                  </p>
                </div>
              </div>

              {!isOpen && (
                <div className="text-center py-8">
                  <p className="text-rose-600 font-handwriting text-lg">Click to open</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </button>
    </div>
  );
}
