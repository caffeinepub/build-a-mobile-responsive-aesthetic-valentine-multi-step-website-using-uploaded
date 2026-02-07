import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import RedEnvelope from '@/components/RedEnvelope';
import KissStickerBurst from '@/components/KissStickerBurst';
import CalendarSticker from '@/components/CalendarSticker';

interface SurpriseEnvelopesStepProps {
  onNext: () => void;
  onBack: () => void;
}

export default function SurpriseEnvelopesStep({ onNext, onBack }: SurpriseEnvelopesStepProps) {
  const [openEnvelopes, setOpenEnvelopes] = useState<number[]>([]);

  const toggleEnvelope = (index: number) => {
    setOpenEnvelopes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-rose-50 via-pink-50 to-red-50 px-4 py-8">
      <Button
        onClick={onBack}
        variant="ghost"
        size="icon"
        className="absolute top-4 left-4 text-rose-500 hover:text-rose-600"
      >
        <ArrowLeft className="h-6 w-6" />
      </Button>

      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <h2 className="text-rose-600 text-3xl md:text-4xl mb-12 text-center font-handwriting">
          Next Surprise 💝
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 w-full">
          <RedEnvelope
            title="Love Letter 💌"
            isOpen={openEnvelopes.includes(0)}
            onToggle={() => toggleEnvelope(0)}
          >
            <div className="p-6 bg-cream-50 rounded-lg">
              <p className="text-rose-700 font-handwriting text-lg leading-relaxed">
                My dearest love, every moment with you feels like a dream. You bring joy to my heart and light to my days. I cherish every smile, every laugh, and every precious memory we create together. You are my forever. ❤️
              </p>
            </div>
          </RedEnvelope>

          <RedEnvelope
            title="Kisses For You 😘"
            isOpen={openEnvelopes.includes(1)}
            onToggle={() => toggleEnvelope(1)}
          >
            <KissStickerBurst />
          </RedEnvelope>

          <RedEnvelope
            title="Ask for a Date 💖"
            isOpen={openEnvelopes.includes(2)}
            onToggle={() => toggleEnvelope(2)}
          >
            <CalendarSticker />
          </RedEnvelope>
        </div>

        <Button
          onClick={onNext}
          size="lg"
          className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-6 text-lg rounded-full shadow-lg"
        >
          💞 One Last Thing
        </Button>
      </div>
    </div>
  );
}
