import { Heart, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import FloatingHeartsSparkles from '@/components/FloatingHeartsSparkles';

interface WelcomeStepProps {
  onNext: () => void;
}

export default function WelcomeStep({ onNext }: WelcomeStepProps) {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-pink-50 via-white to-pink-100">
      <FloatingHeartsSparkles />
      
      <div className="relative z-10 flex flex-col items-center justify-center px-4 py-8 max-w-2xl mx-auto">
        <div className="mb-8 relative">
          <img
            src="/assets/2d890fb92aceda3b60c22f6fd1544340.jpg"
            alt="Adorable puppy with roses"
            className="w-full max-w-md rounded-3xl shadow-2xl border-4 border-white"
          />
        </div>
        
        <p className="text-rose-400 text-lg md:text-xl mb-8 text-center font-handwriting italic">
          Just because today feels right…
        </p>
        
        <Button
          onClick={onNext}
          size="lg"
          className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-6 text-lg rounded-full shadow-lg animate-heartbeat"
        >
          <Heart className="mr-2 h-5 w-5 fill-current" />
          Click Next
        </Button>
      </div>
    </div>
  );
}
