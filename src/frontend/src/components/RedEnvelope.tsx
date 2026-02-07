import { ReactNode } from 'react';

interface RedEnvelopeProps {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: ReactNode;
}

export default function RedEnvelope({ title, isOpen, onToggle, children }: RedEnvelopeProps) {
  return (
    <div className="relative">
      <button
        onClick={onToggle}
        className="w-full focus:outline-none focus:ring-4 focus:ring-red-300 rounded-lg transition-all"
        aria-label={isOpen ? `Close ${title}` : `Open ${title}`}
      >
        <div className={`relative transition-all duration-500 ${isOpen ? 'scale-105' : 'scale-100'}`}>
          {/* Envelope */}
          <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-lg shadow-xl p-6 border-4 border-red-700 min-h-[200px] flex flex-col items-center justify-center">
            {!isOpen ? (
              <div className="text-center">
                <div className="text-4xl mb-3">💌</div>
                <p className="text-white font-handwriting text-lg font-bold">{title}</p>
                <p className="text-red-100 text-sm mt-2">Tap to open</p>
              </div>
            ) : (
              <div className="w-full animate-fade-in">
                {children}
              </div>
            )}
          </div>
        </div>
      </button>
    </div>
  );
}
