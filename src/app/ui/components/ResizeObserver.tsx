'use client'; 
import { useEffect } from 'react';
import ResizeObserver from 'resize-observer-polyfill';

const ResizeObserverPolyfill = () => {
  useEffect(() => {
    if (typeof window !== 'undefined' && !window.ResizeObserver) {
      window.ResizeObserver = ResizeObserver;
    }
  }, []);

  return null;
};

export default ResizeObserverPolyfill;