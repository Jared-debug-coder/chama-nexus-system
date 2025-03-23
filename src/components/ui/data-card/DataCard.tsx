
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface DataCardProps {
  title: string;
  value: string | number;
  icon?: ReactNode;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  className?: string;
  valueClassName?: string;
  children?: ReactNode;
}

const DataCard = ({
  title,
  value,
  icon,
  trend,
  className,
  valueClassName,
  children,
}: DataCardProps) => {
  return (
    <div className={cn(
      "glass-card rounded-xl p-6 flex flex-col transition-all duration-300 animate-scale-in",
      className
    )}>
      <div className="flex justify-between items-start mb-4">
        <p className="text-sm font-medium text-muted-foreground">{title}</p>
        {icon && <div className="text-primary">{icon}</div>}
      </div>
      
      <div className="flex items-end justify-between">
        <div className="space-y-1">
          <h3 className={cn(
            "text-2xl font-semibold tracking-tight",
            valueClassName
          )}>
            {value}
          </h3>
          
          {trend && (
            <p className={cn(
              "text-xs font-medium flex items-center",
              trend.isPositive ? "text-green-500" : "text-red-500"
            )}>
              {trend.isPositive ? "↑" : "↓"} {Math.abs(trend.value)}%
            </p>
          )}
        </div>
        
        {children}
      </div>
    </div>
  );
};

export default DataCard;
