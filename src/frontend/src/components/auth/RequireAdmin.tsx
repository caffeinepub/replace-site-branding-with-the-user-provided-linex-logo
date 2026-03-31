import { Alert, AlertDescription } from "@/components/ui/alert";
import { useInternetIdentity } from "@/hooks/useInternetIdentity";
import { useIsCallerAdmin } from "@/hooks/useIsCallerAdmin";
import { AlertCircle, Loader2, Shield } from "lucide-react";
import type { ReactNode } from "react";
import LoginButton from "./LoginButton";

interface RequireAdminProps {
  children: ReactNode;
}

export default function RequireAdmin({ children }: RequireAdminProps) {
  const { identity, isInitializing } = useInternetIdentity();
  const { data: isAdmin, isLoading: isAdminLoading } = useIsCallerAdmin();

  const isAuthenticated = !!identity;

  // Show loading while checking authentication or admin status
  if (isInitializing || (isAuthenticated && isAdminLoading)) {
    return (
      <div className="container py-12">
        <div className="flex items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
        </div>
      </div>
    );
  }

  // Prompt to login if not authenticated
  if (!isAuthenticated) {
    return (
      <div className="container py-12">
        <Alert>
          <Shield className="h-4 w-4" />
          <AlertDescription className="flex items-center justify-between">
            <span>Please log in to access the admin dashboard.</span>
            <LoginButton />
          </AlertDescription>
        </Alert>
      </div>
    );
  }

  // Show access denied if authenticated but not admin
  if (!isAdmin) {
    return (
      <div className="container py-12">
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            Access denied: admin permissions required.
          </AlertDescription>
        </Alert>
      </div>
    );
  }

  // Render admin content
  return <>{children}</>;
}
