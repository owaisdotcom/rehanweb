'use client'
import { useState, useEffect } from 'react';
import Home1 from "@/components/layout/main/Home1";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

import PreloaderPrimary from '@/components/shared/others/PreloaderPrimary';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // 1 second delay

    return () => clearTimeout(timer); // Clean up the timer
  }, []);

  if (isLoading) {
    return <PreloaderPrimary />;
  }

  return (
    <PageWrapper>
      <main>
        <Home1 />
        {/*  */}
      </main>
    </PageWrapper>
  );
}