import { Heart } from 'lucide-react';
import { BRANDING } from '@/config/branding';

export default function SiteFooter() {
  return (
    <footer className="border-t border-border/40 bg-muted/30">
      <div className="container py-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="mb-4 flex items-center space-x-3">
              <img
                src={BRANDING.logo.main}
                alt={BRANDING.logo.alt}
                className="h-12 w-auto"
              />
            </div>
            <h3 className="mb-3 text-sm font-bold uppercase">{BRANDING.company.name}</h3>
            <p className="text-sm text-muted-foreground">
              {BRANDING.company.tagline}
            </p>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="/" className="hover:text-foreground transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-foreground transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="/solutions" className="hover:text-foreground transition-colors">
                  Solutions
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-foreground transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-semibold">Contact</h3>
            <p className="text-sm text-muted-foreground">
              Get in touch to discuss your automation needs and discover how we can help optimize
              your operations.
            </p>
          </div>
        </div>
        <div className="mt-8 border-t border-border/40 pt-6 text-center text-sm text-muted-foreground">
          <p className="flex items-center justify-center gap-1">
            © 2026. Built with <Heart className="h-4 w-4 text-industrial-accent" fill="currentColor" /> using{' '}
            <a
              href="https://caffeine.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium hover:text-foreground transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
