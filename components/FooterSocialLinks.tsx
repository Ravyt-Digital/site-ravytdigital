type Locale = 'pt' | 'en' | 'fr' | 'es';
const labels = {
  pt: { group: 'Acompanhe a Ravyt', tab: 'abre em nova aba' },
  en: { group: 'Follow Ravyt', tab: 'opens in a new tab' },
  fr: { group: 'Suivez Ravyt', tab: 'ouvre un nouvel onglet' },
  es: { group: 'Sigue a Ravyt', tab: 'abre en una nueva pestaña' },
};
const profiles = [
  { name: 'Instagram', url: 'https://www.instagram.com/ravytdigital/', icon: 'instagram' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/company/ravytdigital', icon: 'linkedin' },
  { name: 'Facebook', url: 'https://www.facebook.com/ravytdigital', icon: 'facebook' },
  { name: 'YouTube', url: 'https://youtube.com/@ravytdigital', icon: 'youtube' },
];
function NetworkIcon({ name }: { name: string }) {
  return <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" focusable="false">
    {name === 'instagram' && <><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="1.8"/><circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" strokeWidth="1.8"/><circle cx="17.4" cy="6.6" r="1.1" fill="currentColor"/></>}
    {name === 'linkedin' && <><rect x="3" y="3" width="18" height="18" rx="2" fill="currentColor"/><circle cx="7.5" cy="7.5" r="1.35" fill="var(--social-icon-cutout)"/><path d="M6.3 10h2.4v8H6.3zm4.2 0h2.3v1.1c.7-.9 1.5-1.3 2.7-1.3 2 0 2.7 1.3 2.7 3.5V18h-2.4v-4.3c0-1.1-.2-1.9-1.4-1.9s-1.5.8-1.5 1.9V18h-2.4z" fill="var(--social-icon-cutout)"/></>}
    {name === 'facebook' && <path fill="currentColor" d="M22 12a10 10 0 1 0-11.56 9.88V14.9H7.9V12h2.54V9.79c0-2.51 1.49-3.9 3.78-3.9 1.1 0 2.25.2 2.25.2v2.47H15.2c-1.24 0-1.64.77-1.64 1.56V12h2.79l-.45 2.9h-2.34v6.98A10 10 0 0 0 22 12z"/>}
    {name === 'youtube' && <><path fill="currentColor" d="M21.6 6.4a2.8 2.8 0 0 0-2-2C17.9 4 12 4 12 4s-5.9 0-7.6.4a2.8 2.8 0 0 0-2 2C2 8.1 2 12 2 12s0 3.9.4 5.6a2.8 2.8 0 0 0 2 2C6.1 20 12 20 12 20s5.9 0 7.6-.4a2.8 2.8 0 0 0 2-2c.4-1.7.4-5.6.4-5.6s0-3.9-.4-5.6z"/><path d="m10 8 6 4-6 4z" fill="var(--social-icon-cutout)"/></>}
  </svg>;
}
export default function FooterSocialLinks({ lang = 'pt' }: { lang?: Locale }) {
  const copy = labels[lang];
  return <div className="footer-social-links" role="group" aria-label={copy.group}>
    {profiles.map(profile => <a key={profile.icon} className={`footer-social-link footer-social-${profile.icon}`} href={profile.url} target="_blank" rel="noopener noreferrer" aria-label={`Ravyt Digital — ${profile.name} (${copy.tab})`} title={profile.name}><NetworkIcon name={profile.icon}/></a>)}
  </div>;
}
