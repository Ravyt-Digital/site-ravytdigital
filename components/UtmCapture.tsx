'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { readReferral } from '@/lib/referral';
import { readUtms } from '@/lib/utm';

export default function UtmCapture() {
  const pathname = usePathname();
  useEffect(() => { readUtms(); readReferral(); }, [pathname]);
  return null;
}
