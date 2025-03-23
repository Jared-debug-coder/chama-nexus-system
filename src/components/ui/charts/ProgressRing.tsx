
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface ProgressRingProps {
  value: number;
  maxValue: number;
  size?: number;
  strokeWidth?: number;
  className?: string;
  valueClassName?: string;
  showValue?: boolean;
  valuePrefix?: string;
  valueSuffix?: string;
  color?: string;
  backgroundColor?: string;
  animationDuration?: number;
}

const ProgressRing = ({
  value,
  maxValue,
  size = 80,
  strokeWidth = 4,
  className,
  valueClassName,
  showValue = true,
  valuePrefix = '',
  valueSuffix = '',
  color = 'stroke-primary',
  backgroundColor = 'stroke-muted',
  animationDuration = 1.5,
}: ProgressRingProps) => {
  const [currentValue, setCurrentValue] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentValue(value);
    }, 100);
    
    return () => clearTimeout(timer);
  }, [value]);
  
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const progress = Math.min(currentValue / maxValue, 1);
  const dashOffset = circumference * (1 - progress);
  
  const center = size / 2;
  const displayValue = Math.round(progress * 100);
  
  return (
    <div className={cn("relative inline-flex", className)}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        {/* Background circle */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          strokeWidth={strokeWidth}
          className={backgroundColor}
        />
        
        {/* Progress circle */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
          strokeLinecap="round"
          className={cn(
            color, 
            "transition-all transform origin-center"
          )}
          style={{ 
            transitionProperty: 'stroke-dashoffset',
            transitionDuration: `${animationDuration}s`,
            transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
            transform: 'rotate(-90deg)',
            transformOrigin: 'center',
          }}
        />
      </svg>
      
      {showValue && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className={cn("text-sm font-medium", valueClassName)}>
            {valuePrefix}{displayValue}{valueSuffix}
          </span>
        </div>
      )}
    </div>
  );
};

export default ProgressRing;
