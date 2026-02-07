import { cn } from '@/lib/utils';

interface HandwritingHeadingProps {
  children: React.ReactNode;
  className?: string;
}

export default function HandwritingHeading({ children, className }: HandwritingHeadingProps) {
  return (
    <h2 className={cn('font-handwriting', className)}>
      {children}
    </h2>
  );
}
