export const CONSENT_KEY = 'ravyt_cookie_consent_v1';
const RECEIPT_KEY = `${CONSENT_KEY}_receipt`;
export const CONSENT_VERSION = '2026-10-05';
const MAX_AGE = 180 * 24 * 60 * 60 * 1000;
export function privacySignalActive() {
 return typeof navigator !== 'undefined' && (navigator as Navigator & {globalPrivacyControl?: boolean}).globalPrivacyControl === true;
}
export function savedConsent(): 'accepted' | 'rejected' | null {
 if (typeof window === 'undefined') return null;
 if (privacySignalActive()) return 'rejected';
 try {
  const choice = localStorage.getItem(CONSENT_KEY);
  const receipt = JSON.parse(localStorage.getItem(RECEIPT_KEY) || 'null');
  if (!receipt || receipt.version !== CONSENT_VERSION || receipt.choice !== choice || typeof receipt.at !== 'number' || receipt.at > Date.now() || Date.now() - receipt.at >= MAX_AGE) return null;
  return choice === 'accepted' || choice === 'rejected' ? choice : null;
 } catch { return null; }
}
export function saveConsent(accepted: boolean) {
 const choice = accepted && !privacySignalActive() ? 'accepted' : 'rejected';
 try {
  localStorage.setItem(RECEIPT_KEY, JSON.stringify({choice, at: Date.now(), version: CONSENT_VERSION}));
  localStorage.setItem(CONSENT_KEY, choice);
  localStorage.removeItem(`${CONSENT_KEY}_categories`);
 } catch { return 'rejected' as const; }
 return choice;
}
