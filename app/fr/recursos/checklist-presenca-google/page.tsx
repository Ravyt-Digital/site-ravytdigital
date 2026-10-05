import { BlogHeader, BlogFooter } from '@/locales/fr/components/BlogChrome';
import ChecklistResource from '@/components/ChecklistResource';
import { checklistCopy, checklistPath } from '@/lib/google-checklist';
import { pageMetadata } from '@/lib/metadata';
const copy = checklistCopy.fr;
export const metadata = pageMetadata({ title:copy.title, description:copy.description, alternates:{ canonical:'/fr' + checklistPath } });
export default function Page() { return <><BlogHeader/><ChecklistResource lang="fr"/><BlogFooter/></>; }
