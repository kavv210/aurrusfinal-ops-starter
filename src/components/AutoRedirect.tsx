'use client';

import { useEffect } from 'react';

export default function AutoRedirect() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = '/';
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return null;
}
