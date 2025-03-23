
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import Sidebar from './Sidebar';
import Header from './Header';
import PageTransition from '../page-transition/PageTransition';

interface MainLayoutProps {
  children: ReactNode;
  className?: string;
}

const MainLayout = ({ children, className }: MainLayoutProps) => {
  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar />
      
      <div className="flex-1 ml-60 relative">
        <Header />
        
        <main className={cn(
          "px-8 pt-24 pb-12 min-h-screen",
          className
        )}>
          <PageTransition>
            {children}
          </PageTransition>
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
