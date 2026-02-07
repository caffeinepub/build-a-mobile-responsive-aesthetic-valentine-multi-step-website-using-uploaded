import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';

interface PopupModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
}

export default function PopupModal({ isOpen, onClose, onNext }: PopupModalProps) {
  const handleNext = () => {
    onClose();
    onNext();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-gradient-to-br from-pink-50 to-rose-100 border-4 border-rose-300 max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center">
            <div className="flex justify-center mb-4">
              <Heart className="w-16 h-16 text-rose-500 fill-rose-500 animate-heartbeat" />
            </div>
          </DialogTitle>
        </DialogHeader>
        
        <div className="text-center space-y-6">
          <p className="text-rose-700 text-xl md:text-2xl font-handwriting leading-relaxed">
            You just made my heart the happiest. I love you endlessly ❤️
          </p>
          
          <Button
            onClick={handleNext}
            size="lg"
            className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-4 text-lg rounded-full shadow-lg w-full"
          >
            🎁 Next Surprise
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
