import { ArrowLeft, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import FloatingHeartsSparkles from '@/components/FloatingHeartsSparkles';
import ShareFooter from '@/components/ShareFooter';

interface FinalStepProps {
  onBack: () => void;
}

export default function FinalStep({ onBack }: FinalStepProps) {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 px-4 py-8 overflow-hidden">
      <FloatingHeartsSparkles density="medium" />
      
      <Button
        onClick={onBack}
        variant="ghost"
        size="icon"
        className="absolute top-4 left-4 text-rose-500 hover:text-rose-600 z-20"
      >
        <ArrowLeft className="h-6 w-6" />
      </Button>

      <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center text-center">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border-4 border-rose-200">
          <h1 className="text-rose-600 text-4xl md:text-5xl mb-6 font-handwriting font-bold">
            Happy Valentine's Day, my forever love 💖
          </h1>
          
          <p className="text-rose-500 text-xl md:text-2xl font-handwriting leading-relaxed">
            This little website is my heart, wrapped just for you.
          </p>
        </div>

        <ShareFooter />
      </div>
    </div>
  );
}
