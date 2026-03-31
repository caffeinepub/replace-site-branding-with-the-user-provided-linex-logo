import {
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import RequireAdmin from "./components/auth/RequireAdmin";
import SiteLayout from "./components/layout/SiteLayout";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import PrivacyPage from "./pages/PrivacyPage";
import SolutionDetailPage from "./pages/SolutionDetailPage";
import SolutionsPage from "./pages/SolutionsPage";
import TermsPage from "./pages/TermsPage";
import AdminInquiriesPage from "./pages/admin/AdminInquiriesPage";

const rootRoute = createRootRoute({
  component: SiteLayout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: AboutPage,
});

const solutionsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/solutions",
  component: SolutionsPage,
});

const solutionDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/solutions/$id",
  component: SolutionDetailPage,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: ContactPage,
});

const privacyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/privacy",
  component: PrivacyPage,
});

const termsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/terms",
  component: TermsPage,
});

const adminInquiriesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/admin/inquiries",
  component: () => (
    <RequireAdmin>
      <AdminInquiriesPage />
    </RequireAdmin>
  ),
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  solutionsRoute,
  solutionDetailRoute,
  contactRoute,
  privacyRoute,
  termsRoute,
  adminInquiriesRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
