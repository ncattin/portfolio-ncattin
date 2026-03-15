import { Link, useLocation } from "react-router-dom";
import { Linkedin, Mail, Menu, Phone, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Accueil", path: "/" },
  { label: "Missions", path: "/missions" },
  { label: "Compétences", path: "/competences" },
  { label: "Parcours", path: "/parcours" },
  { label: "Contact", path: "/contact" },
];

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="text-xl font-bold text-gradient">NC</Link>
          <div className="hidden md:flex gap-8 text-sm">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`transition-colors ${location.pathname === item.path ? "text-primary" : "text-muted-foreground hover:text-primary"}`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
        {mobileOpen && (
          <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl px-6 py-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={`block text-sm ${location.pathname === item.path ? "text-primary" : "text-muted-foreground"}`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </nav>

      {/* Content */}
      <main className="flex-1 pt-16">{children}</main>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <span>© 2025 Cattin Nathan. Tous droits réservés.</span>
          <div className="flex gap-4">
            <a href="https://fr.linkedin.com/in/nathan-cattin-4829632a1" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="mailto:nathan.cattin31@gmail.com" className="hover:text-primary transition-colors">
              <Mail className="w-4 h-4" />
            </a>
            <a href="tel:+33678431646" className="hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
