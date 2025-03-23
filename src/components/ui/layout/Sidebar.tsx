
import { ReactNode, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { 
  Users, Home, FileText, Landmark, Settings, 
  CreditCard, PiggyBank, BarChart3, Shield, UserRound
} from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { useIsMobile } from '@/hooks/use-mobile';

interface SidebarProps {
  className?: string;
}

interface NavItemProps {
  to: string;
  icon: ReactNode;
  label: string;
}

const NavItem = ({ to, icon, label }: NavItemProps) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <NavLink
      to={to}
      className={({ isActive }) => cn(
        "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200",
        isActive 
          ? "bg-sidebar-accent text-sidebar-accent-foreground" 
          : "text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent/50"
      )}
    >
      <div className={cn(
        "h-9 w-9 flex items-center justify-center rounded-md transition-colors",
        isActive ? "bg-primary text-primary-foreground" : "bg-sidebar-accent/50"
      )}>
        {icon}
      </div>
      <span>{label}</span>
    </NavLink>
  );
};

const Sidebar = ({ className }: SidebarProps) => {
  const [expanded, setExpanded] = useState(true);
  const isMobile = useIsMobile();
  
  return (
    <div className={cn(
      "h-screen fixed top-0 left-0 z-30 bg-sidebar flex flex-col transition-all duration-300 border-r border-sidebar-border",
      expanded ? "w-60" : "w-[78px]",
      isMobile && "w-[280px] -translate-x-full",
      className
    )}>
      <div className="p-6">
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-md bg-primary flex items-center justify-center">
            <PiggyBank className="h-5 w-5 text-white" />
          </div>
          {expanded && <h1 className="text-xl font-bold tracking-tight text-sidebar-foreground">Chama Nexus</h1>}
        </div>
      </div>
      
      <Separator className="bg-sidebar-border" />
      
      <div className="flex-1 py-6 px-3 space-y-1 overflow-y-auto">
        <NavItem to="/" icon={<Home className="h-5 w-5" />} label="Dashboard" />
        <NavItem to="/members" icon={<Users className="h-5 w-5" />} label="Members" />
        <NavItem to="/loans" icon={<CreditCard className="h-5 w-5" />} label="Loans" />
        <NavItem to="/savings" icon={<PiggyBank className="h-5 w-5" />} label="Savings" />
        <NavItem to="/policies" icon={<Shield className="h-5 w-5" />} label="Policies" />
        <NavItem to="/invoices" icon={<FileText className="h-5 w-5" />} label="Invoices" />
        <NavItem to="/payments" icon={<Landmark className="h-5 w-5" />} label="Payments" />
        <NavItem to="/reports" icon={<BarChart3 className="h-5 w-5" />} label="Reports" />
      </div>
      
      <div className="p-3 mt-auto space-y-1">
        <NavItem to="/profile" icon={<UserRound className="h-5 w-5" />} label="Profile" />
        <NavItem to="/settings" icon={<Settings className="h-5 w-5" />} label="Settings" />
      </div>
    </div>
  );
};

export default Sidebar;
