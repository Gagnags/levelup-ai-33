import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { 
  Home, 
  Search, 
  Users, 
  GitBranch, 
  Route, 
  MessageSquare, 
  Zap, 
  Database,
  Settings
} from "lucide-react";

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "Explore", href: "/explore", icon: Search },
  { name: "Players", href: "/players", icon: Users },
  { name: "Cohorts", href: "/cohorts", icon: GitBranch },
  { name: "Journeys", href: "/journeys", icon: Route },
  { name: "Copilot", href: "/copilot", icon: MessageSquare },
  { name: "Playbooks", href: "/playbooks", icon: Zap },
  { name: "Catalog", href: "/catalog", icon: Database },
];

export const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="w-64 bg-surface border-r border-border flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <div className="w-4 h-4 bg-primary-foreground rounded-sm"></div>
          </div>
          <div>
            <h1 className="text-xl font-bold text-gradient">GameState</h1>
            <p className="text-xs text-muted-foreground">Labs Platform</p>
          </div>
        </div>
      </div>

      {/* Navigation Items */}
      <div className="flex-1 p-4 space-y-1">
        {navItems.map((item) => {
          const isActive = location.pathname === item.href;
          return (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-smooth hover:bg-secondary",
                isActive 
                  ? "bg-primary text-primary-foreground shadow-lg" 
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <item.icon className="w-5 h-5" />
              {item.name}
            </Link>
          );
        })}
      </div>

      {/* User Settings */}
      <div className="p-4 border-t border-border">
        <Link
          to="/settings"
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-smooth"
        >
          <Settings className="w-5 h-5" />
          Settings
        </Link>
      </div>
    </nav>
  );
};