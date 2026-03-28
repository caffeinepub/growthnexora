import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
  useLocation,
} from "@tanstack/react-router";
import { useEffect } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { InternetIdentityProvider } from "./hooks/useInternetIdentity";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import PortfolioPage from "./pages/PortfolioPage";
import PricingPage from "./pages/PricingPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import ServicesPage from "./pages/ServicesPage";

const queryClient = new QueryClient();

function PageTransition() {
  const location = useLocation();

  // biome-ignore lint/correctness/useExhaustiveDependencies: pathname change is the intended trigger
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname]);

  return (
    <div key={location.pathname} className="page-enter">
      <Outlet />
    </div>
  );
}

function RootLayout() {
  const location = useLocation();

  // biome-ignore lint/correctness/useExhaustiveDependencies: pathname change is the intended trigger
  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      const sections = document.querySelectorAll<HTMLElement>("main .reveal");
      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              observer.unobserve(entry.target);
            }
          }
        },
        { threshold: 0.08, rootMargin: "0px 0px -40px 0px" },
      );
      for (const el of sections) {
        observer.observe(el);
      }

      // Stagger children inside .stagger-children grids
      const cards = document.querySelectorAll<HTMLElement>(
        "main .stagger-children > *",
      );
      let i = 0;
      for (const card of cards) {
        card.style.transitionDelay = `${i * 80}ms`;
        card.classList.add("reveal");
        i++;
      }

      // Re-observe newly-classed stagger cards
      const newReveals = document.querySelectorAll<HTMLElement>("main .reveal");
      for (const el of newReveals) {
        observer.observe(el);
      }

      return () => observer.disconnect();
    });
    return () => cancelAnimationFrame(raf);
  }, [location.pathname]);

  return (
    <QueryClientProvider client={queryClient}>
      <InternetIdentityProvider>
        <div
          className="min-h-screen flex flex-col"
          style={{ backgroundColor: "#0B0B0B" }}
        >
          <Navbar />
          <main className="flex-1">
            <PageTransition />
          </main>
          <Footer />
        </div>
      </InternetIdentityProvider>
    </QueryClientProvider>
  );
}

const rootRoute = createRootRoute({ component: RootLayout });

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});
const servicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services",
  component: ServicesPage,
});
const portfolioRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/portfolio",
  component: PortfolioPage,
});
const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: AboutPage,
});
const pricingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/pricing",
  component: PricingPage,
});
const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: ContactPage,
});
const privacyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/privacy-policy",
  component: PrivacyPolicyPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  servicesRoute,
  portfolioRoute,
  aboutRoute,
  pricingRoute,
  contactRoute,
  privacyRoute,
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
