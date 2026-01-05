import { Link } from "react-router-dom";
import { Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container py-12 md:py-16">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {/* Logo */}
          <Link 
            to="/" 
            className="inline-block font-heading text-2xl md:text-3xl font-medium text-foreground"
          >
            Mehndi by Ayesha
          </Link>

          {/* Tagline */}
          <p className="text-muted-foreground font-body text-base max-w-md mx-auto">
            Traditional Pakistani & Arabic mehndi designs for your special occasions.
          </p>

          {/* Divider */}
          <div className="gold-divider" />

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6 md:gap-8">
            <Link to="/gallery" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Gallery
            </Link>
            <Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Services
            </Link>
            <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>

          {/* Social Links */}
          <div className="flex justify-center gap-4">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
          </div>

          {/* Location & Copyright */}
          <div className="pt-4 border-t border-border/50 space-y-2">
            <p className="text-sm text-muted-foreground">
              Serving Irvine & Orange County, California
            </p>
            <p className="text-xs text-muted-foreground/70">
              © {currentYear} Mehndi by Ayesha. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
