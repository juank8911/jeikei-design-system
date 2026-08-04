import React from 'react';
import { useSystem } from '../system/SystemContext';
import { cx } from '../../utils/cx';

export interface NeoButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const NeoButton: React.FC<NeoButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className,
  onClick,
  ...props 
}) => {
  const { engine } = useSystem();

  const handleInteraction = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (engine) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;
      engine.emitPulse(x, y, 1.25);
    }
    if (onClick) onClick(e);
  };

  const base = 'jk-neo-button relative inline-flex items-center justify-center overflow-hidden transition-all duration-300 font-bold uppercase tracking-widest';
  
  const variants = {
    primary: 'jk-neon-primary bg-neo-accent text-black font-bold uppercase tracking-[0.2em] shadow-neon-primary active:scale-95',
    secondary: 'jk-glass text-white/90 hover:bg-white/5 border-white/5 active:scale-95',
    outline: 'border border-white/20 text-white/50 hover:text-white hover:border-white/40 bg-transparent active:scale-95',
    ghost: 'text-white/40 hover:text-white hover:bg-white/5 bg-transparent'
  };

  const sizes = {
    sm: 'px-4 py-1.5 text-[8px]',
    md: 'px-8 py-2.5 text-[10px]',
    lg: 'px-12 py-4 text-[12px] font-black'
  };

  return (
    <button 
      className={cx(base, variants[variant], sizes[size], className)}
      onClick={handleInteraction}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      {/* Interaction Ripple Layer (Optimized with Glass and Shine) */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 opacity-0 active:opacity-100 transition-all duration-300 backdrop-blur-[2px] shadow-[0_0_15px_rgba(255,255,255,0.2)] mix-blend-overlay" />
    </button>
  );
};
