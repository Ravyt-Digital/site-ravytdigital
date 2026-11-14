const referralKey = 'ravyt-referral';
const referralPattern = /^[a-zA-Z0-9_-]{3,40}$/;

export function readReferral() {
  const code = new URLSearchParams(location.search).get('ref');
  if (code && referralPattern.test(code)) {
    try { sessionStorage.setItem(referralKey, code); } catch {}
    return code;
  }
  try {
    const stored = sessionStorage.getItem(referralKey) ?? '';
    return referralPattern.test(stored) ? stored : '';
  } catch {
    return '';
  }
}
