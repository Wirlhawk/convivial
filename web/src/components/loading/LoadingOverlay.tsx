"use client";

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import NinjaAnimation from './NinjaAnimation';
import { TextShimmerWave } from '@/components/ui/text-shimmer-wave';

interface LoadingOverlayProps {
  children: React.ReactNode;
}

const LoadingOverlay: React.FC<LoadingOverlayProps> = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time - in a real app, you might want to
    // tie this to actual data loading or page readiness
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white"
            initial={{ opacity: 1 }}
            exit={{ 
              opacity: 0,
              y: -20,
              transition: { duration: 0.8, ease: "easeInOut" }
            }}
          >
            {/* <NinjaAnimation /> */}
            <img 
              src="/assets/ninjas/hoop_ninja.gif" 
              alt="Loading Ninja" 
              className="w-96 h-96 sm:w-128 sm:h-128 object-contain"
            />

            <TextShimmerWave
              className="text-xl sm:text-4xl font-bowlby tracking-wide font-bold [--base-color:var(--primary)] [--base-gradient-color:var(--secondary)] dark:[--base-color:var(--primary)] dark:[--base-gradient-color:var(--secondary)]"
              duration={2}
              spread={2}
            >
              Entering another dimension...
            </TextShimmerWave>
          </motion.div>
        )}
      </AnimatePresence>
      <div className={loading ? 'invisible' : 'visible'}>
        {children}
      </div>
    </>
  );
};

export default LoadingOverlay;