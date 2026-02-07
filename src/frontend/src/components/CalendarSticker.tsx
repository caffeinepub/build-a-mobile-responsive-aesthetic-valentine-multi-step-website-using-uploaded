import { Calendar, Heart } from 'lucide-react';

export default function CalendarSticker() {
  return (
    <div className="relative w-full p-6 bg-gradient-to-br from-pink-100 to-rose-100 rounded-lg">
      <div className="flex flex-col items-center space-y-4">
        <div className="relative">
          <Calendar className="w-24 h-24 text-rose-500" />
          <Heart className="absolute -top-2 -right-2 w-8 h-8 text-rose-400 fill-rose-400 animate-heartbeat" />
        </div>
        
        <div className="text-center">
          <p className="text-rose-600 text-xl font-handwriting font-bold mb-2">
            Let's make a date! 💖
          </p>
          <p className="text-rose-500 font-handwriting">
            A special moment, just for us
          </p>
        </div>
      </div>
    </div>
  );
}
