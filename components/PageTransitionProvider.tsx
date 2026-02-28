"use client";

import { useEffect, Suspense } from "react"; // Added Suspense
import { usePathname, useSearchParams } from "next/navigation";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

// 1. Move the logic into a sub-component
function TransitionHandler() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    NProgress.configure({ showSpinner: false, speed: 400 });
    NProgress.done();
    
    return () => {
      NProgress.start();
    };
  }, [pathname, searchParams]);

  return null; // This component doesn't render anything UI-wise
}

// 2. Wrap it in Suspense in the main export
export default function PageTransitionProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Suspense fallback={null}>
        <TransitionHandler />
      </Suspense>
      {children}
    </>
  );
}