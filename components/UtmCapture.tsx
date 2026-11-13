'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { rememberReferral } from '@/components/SalesForms';
import { readUtms } from '@/lib/utm';

export default function UtmCapture() {
  const pathname = usePathname();
  useEffect(() => { readUtms(); rememberReferral(); }, [pathname]);
  return null;
}
