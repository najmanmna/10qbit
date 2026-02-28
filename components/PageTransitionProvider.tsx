"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

export default function PageTransitionProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Start progress bar on route change
    NProgress.configure({ showSpinner: false, speed: 400 });
    
    // In Next.js App Router, the page finishes loading when the pathname changes
    NProgress.done();
    
    return () => {
      NProgress.start();
    };
  }, [pathname, searchParams]);

  return <>{children}</>;
}