import { useState } from 'react';
import { Share2, Check, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ShareFooter() {
  const [copied, setCopied] = useState(false);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // Fallback for browsers that don't support clipboard API
      const textArea = document.createElement('textarea');
      textArea.value = window.location.href;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="mt-12 text-center">
      <Button
        onClick={copyLink}
        variant="outline"
        className="bg-white/80 backdrop-blur-sm border-2 border-rose-300 text-rose-600 hover:bg-rose-50 px-6 py-3 rounded-full shadow-lg"
      >
        {copied ? (
          <>
            <Check className="mr-2 h-5 w-5" />
            Link Copied!
          </>
        ) : (
          <>
            <Share2 className="mr-2 h-5 w-5" />
            Copy Link
          </>
        )}
      </Button>
      
      <p className="mt-8 text-sm text-rose-400">
        © 2026. Built with <Heart className="inline h-4 w-4 fill-rose-400 text-rose-400" /> using{' '}
        <a href="https://caffeine.ai" target="_blank" rel="noopener noreferrer" className="underline hover:text-rose-600">
          caffeine.ai
        </a>
      </p>
    </div>
  );
}
