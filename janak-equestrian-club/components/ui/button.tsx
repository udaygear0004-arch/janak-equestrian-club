import { cn } from '@/lib/utils';
import type { ButtonHTMLAttributes } from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'ghost';
};

export function Button({ className, variant = 'primary', ...props }: Props) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition duration-300',
        variant === 'primary'
          ? 'border border-gold/40 bg-gold/10 text-white shadow-glow hover:-translate-y-0.5 hover:bg-gold/15'
          : 'border border-white/15 bg-white/5 text-white/80 hover:bg-white/10',
        className
      )}
      {...props}
    />
  );
}
