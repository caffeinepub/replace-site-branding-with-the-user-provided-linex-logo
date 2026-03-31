import { BRANDING } from "@/config/branding";
import { useIsCallerAdmin } from "@/hooks/useIsCallerAdmin";
import { Heart, Shield, ShieldCheck } from "lucide-react";

export default function SiteFooter() {
  const { data: isAdmin } = useIsCallerAdmin();

  return (
    <footer className="border-t border-border/40 bg-muted/30">
      <div className="container py-8">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-3 text-sm font-extrabold uppercase">
              {BRANDING.company.name}
            </h3>
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
                <a
                  href="/about"
                  className="hover:text-foreground transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/solutions"
                  className="hover:text-foreground transition-colors"
                >
                  Solutions
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-foreground transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/privacy"
                  className="hover:text-foreground transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  className="hover:text-foreground transition-colors"
                >
                  Terms &amp; Conditions
                </a>
              </li>
              {isAdmin && (
                <li>
                  <a
                    href="/admin/inquiries"
                    className="hover:text-foreground transition-colors flex items-center gap-1"
                  >
                    <Shield className="h-3 w-3" />
                    Admin
                  </a>
                </li>
              )}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-semibold">Contact</h3>
            <p className="text-sm text-muted-foreground">
              Get in touch to discuss your automation needs and discover how we
              can help optimize your operations.
            </p>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-semibold">Certifications</h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 rounded-lg border border-industrial-accent/30 bg-industrial-accent/5 px-3 py-2">
                <ShieldCheck className="h-4 w-4 flex-shrink-0 text-industrial-accent" />
                <div>
                  <p className="text-xs font-bold text-foreground">
                    ISO 9001:2015
                  </p>
                  <p className="text-xs text-muted-foreground">Certified</p>
                </div>
              </div>
              <div className="flex items-center gap-2 rounded-lg border border-industrial-accent/30 bg-industrial-accent/5 px-3 py-2">
                <ShieldCheck className="h-4 w-4 flex-shrink-0 text-industrial-accent" />
                <div>
                  <p className="text-xs font-bold text-foreground">
                    IEC Certified
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Import &amp; Export
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-border/40 pt-6 text-center text-sm text-muted-foreground">
          <p className="flex items-center justify-center gap-1">
            © {new Date().getFullYear()}. Built with{" "}
            <Heart
              className="h-4 w-4 text-industrial-accent"
              fill="currentColor"
            />{" "}
            by Linex Automation
          </p>
        </div>
      </div>
    </footer>
  );
}
