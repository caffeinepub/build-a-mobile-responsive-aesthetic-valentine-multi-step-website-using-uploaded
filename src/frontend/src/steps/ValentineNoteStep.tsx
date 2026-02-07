import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PinkEnvelope from '@/components/PinkEnvelope';

interface ValentineNoteStepProps {
  onNext: () => void;
  onBack: () => void;
}

export default function ValentineNoteStep({ onNext, onBack }: ValentineNoteStepProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-white via-pink-50 to-rose-50 px-4 py-8">
      <Button
        onClick={onBack}
        variant="ghost"
        size="icon"
        className="absolute top-4 left-4 text-rose-500 hover:text-rose-600"
      >
        <ArrowLeft className="h-6 w-6" />
      </Button>

      <div className="max-w-2xl mx-auto flex flex-col items-center">
        <h2 className="text-rose-600 text-3xl md:text-4xl mb-8 text-center font-handwriting">
          A Valentine Note 💌
        </h2>

        <PinkEnvelope isOpen={isOpen} onToggle={() => setIsOpen(!isOpen)} />

        {isOpen && (
          <Button
            onClick={onNext}
            size="lg"
            className="mt-8 bg-rose-500 hover:bg-rose-600 text-white px-8 py-6 text-lg rounded-full shadow-lg animate-fade-in"
          >
            💖 Open My Heart
          </Button>
        )}
      </div>
    </div>
  );
}
