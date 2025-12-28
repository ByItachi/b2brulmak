import React from "react";
import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { 
  LayoutDashboard, 
  PackageSearch, 
  ShoppingCart, 
  FileText, 
  Settings, 
  LogOut, 
  Menu,
  X,
  UserCircle,
  Bell
} from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@assets/generated_images/modern_industrial_minimalist_company_logo.png";
import { MOCK_DEALER, getCart } from "@/lib/mockData";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [location] = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);
  const cartItemCount = getCart().length;

  const navItems = [
    { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { href: "/products", label: "Product Search", icon: PackageSearch },
    { href: "/cart", label: "My Order", icon: ShoppingCart, badge: cartItemCount > 0 ? cartItemCount : null },
    { href: "/orders", label: "Order History", icon: FileText },
    { href: "/settings", label: "Settings", icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-background flex font-sans">
      {/* Sidebar */}
      <aside 
        className={cn(
          "bg-sidebar text-sidebar-foreground fixed inset-y-0 left-0 z-50 w-64 transition-transform duration-300 ease-in-out border-r border-sidebar-border flex flex-col",
          !isSidebarOpen && "-translate-x-full lg:translate-x-0 lg:static"
        )}
      >
        <div className="h-16 flex items-center px-6 border-b border-sidebar-border/50">
           <img src={logo} alt="Company Logo" className="h-8 w-auto mr-3 bg-white rounded p-0.5" />
           <span className="font-heading font-bold text-lg tracking-wide">RULMAN B2B</span>
        </div>

        <div className="flex-1 py-6 px-3 space-y-1">
          {navItems.map((item) => {
            const isActive = location === item.href;
            return (
              <Link key={item.href} href={item.href}>
                <div 
                  className={cn(
                    "flex items-center px-3 py-2.5 rounded-md text-sm font-medium transition-colors cursor-pointer group relative",
                    isActive 
                      ? "bg-sidebar-primary text-sidebar-primary-foreground" 
                      : "text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                  )}
                >
                  <item.icon className={cn("h-5 w-5 mr-3", isActive ? "text-white" : "text-sidebar-foreground/50 group-hover:text-sidebar-accent-foreground")} />
                  {item.label}
                  {item.badge && (
                    <span className="absolute right-3 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                      {item.badge}
                    </span>
                  )}
                </div>
              </Link>
            );
          })}
        </div>

        <div className="p-4 border-t border-sidebar-border/50">
          <div className="flex items-center gap-3 mb-4">
             <div className="h-10 w-10 rounded-full bg-sidebar-accent flex items-center justify-center">
                <UserCircle className="h-6 w-6 text-sidebar-foreground/70" />
             </div>
             <div className="flex-1 min-w-0">
               <p className="text-sm font-medium truncate">{MOCK_DEALER.name}</p>
               <p className="text-xs text-sidebar-foreground/50 truncate">ID: {MOCK_DEALER.id}</p>
             </div>
          </div>
          <Link href="/login">
            <Button variant="outline" className="w-full justify-start text-sidebar-foreground border-sidebar-border hover:bg-sidebar-accent hover:text-sidebar-accent-foreground">
              <LogOut className="h-4 w-4 mr-2" />
              Sign Out
            </Button>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen overflow-hidden">
        {/* Header */}
        <header className="h-16 bg-card border-b border-border flex items-center justify-between px-6 sticky top-0 z-40 shadow-sm">
          <div className="flex items-center gap-4">
             <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
               {isSidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
             </Button>
             <h1 className="text-xl font-heading font-semibold text-foreground hidden sm:block">
               {navItems.find(i => i.href === location)?.label || "Dashboard"}
             </h1>
          </div>

          <div className="flex items-center gap-4">
             <div className="text-right hidden md:block">
               <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Current Balance</p>
               <p className="text-sm font-bold text-destructive font-mono">
                 {MOCK_DEALER.currency} {MOCK_DEALER.balance.toLocaleString('en-US', { minimumFractionDigits: 2 })}
               </p>
             </div>
             <div className="h-8 w-px bg-border hidden md:block" />
             <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5 text-muted-foreground" />
                <span className="absolute top-2 right-2 h-2 w-2 bg-destructive rounded-full" />
             </Button>
          </div>
        </header>

        {/* Scrollable Content */}
        <main className="flex-1 overflow-auto bg-muted/20 p-6">
          <div className="max-w-7xl mx-auto space-y-6 animate-in fade-in duration-500">
             {children}
          </div>
        </main>
      </div>
    </div>
  );
}
