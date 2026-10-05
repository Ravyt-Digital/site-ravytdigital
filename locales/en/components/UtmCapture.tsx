'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { readUtms } from '@/lib/utm';

export default function UtmCapture() {
  const pathname = usePathname();
  useEffect(() => { readUtms(); }, [pathname]);
  return null;
}
