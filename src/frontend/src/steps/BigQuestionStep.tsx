import { useState, useRef } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PopupModal from '@/components/PopupModal';
import FloatingHeartsSparkles from '@/components/FloatingHeartsSparkles';

interface BigQuestionStepProps {
  onNext: () => void;
  onBack: () => void;
}

export default function BigQuestionStep({ onNext, onBack }: BigQuestionStepProps) {
  const [showPopup, setShowPopup] = useState(false);
  const [yesPosition, setYesPosition] = useState({ x: 0, y: 0 });
  const yesButtonRef = useRef<HTMLButtonElement>(null);

  const moveYesButton = () => {
    const maxX = 100;
    const maxY = 100;
    const newX = Math.random() * maxX - maxX / 2;
    const newY = Math.random() * maxY - maxY / 2;
    setYesPosition({ x: newX, y: newY });
  };

  const handleYesClick = () => {
    setShowPopup(true);
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 via-rose-100 to-pink-200 px-4 py-8 overflow-hidden">
      <FloatingHeartsSparkles density="low" />
      
      <Button
        onClick={onBack}
        variant="ghost"
        size="icon"
        className="absolute top-4 left-4 text-rose-500 hover:text-rose-600 z-20"
      >
        <ArrowLeft className="h-6 w-6" />
      </Button>

      <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
        <h2 className="text-rose-700 text-3xl md:text-5xl mb-12 text-center font-handwriting font-bold px-4">
          Will you be my Valentine forever and ever?
        </h2>

        <div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
          <button
            ref={yesButtonRef}
            onClick={handleYesClick}
            onMouseEnter={moveYesButton}
            onTouchStart={moveYesButton}
            style={{
              transform: `translate(${yesPosition.x}px, ${yesPosition.y}px)`,
              transition: 'transform 0.3s ease-out'
            }}
            className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-4 text-lg rounded-full shadow-lg"
          >
            ✔️ Yes
          </button>

          <Button
            onClick={handleYesClick}
            size="lg"
            className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-4 text-lg rounded-full shadow-lg animate-sparkle"
          >
            💕 Obviously Yes
          </Button>
        </div>
      </div>

      <PopupModal
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
        onNext={onNext}
      />
    </div>
  );
}
