import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import HandwritingHeading from '@/components/HandwritingHeading';

interface RoseDayStepProps {
  onNext: () => void;
  onBack: () => void;
}

export default function RoseDayStep({ onNext, onBack }: RoseDayStepProps) {
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

      <div className="max-w-2xl mx-auto flex flex-col items-center">
        <div className="mb-8 relative">
          <img
            src="/assets/d57a21519166527bde92e518e80174df.jpg"
            alt="Puppy with rose"
            className="w-full max-w-md rounded-3xl shadow-2xl border-4 border-white"
          />
        </div>

        <HandwritingHeading className="text-rose-600 text-3xl md:text-4xl mb-4 text-center">
          Happy Rose Day, my love 💓❤️🌹
        </HandwritingHeading>

        <p className="text-rose-500 text-xl md:text-2xl mb-8 text-center font-handwriting italic">
          Every rose reminds me of you.
        </p>

        <Button
          onClick={onNext}
          size="lg"
          className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-6 text-lg rounded-full shadow-lg"
        >
          🌹 Next
        </Button>
      </div>
    </div>
  );
}
