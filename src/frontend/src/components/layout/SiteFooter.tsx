import { BRANDING } from "@/config/branding";
import { useIsCallerAdmin } from "@/hooks/useIsCallerAdmin";
import { Shield } from "lucide-react";

export default function SiteFooter() {
  const { data: isAdmin } = useIsCallerAdmin();

  return (
    <footer className="border-t border-border/40 bg-muted/30">
      <div className="container py-8">
        <div className="grid gap-8 md:grid-cols-3">
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
                  Terms & Conditions
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
        </div>
        <div className="mt-8 border-t border-border/40 pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; 2026 Linex Automation</p>
        </div>
      </div>
    </footer>
  );
}
