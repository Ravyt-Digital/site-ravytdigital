import { BlogHeader, BlogFooter } from '@/locales/es/components/BlogChrome';
import ChecklistResource from '@/components/ChecklistResource';
import { checklistCopy, checklistPath } from '@/lib/google-checklist';
import { pageMetadata } from '@/lib/metadata';
const copy = checklistCopy.es;
export const metadata = pageMetadata({ title:copy.title, description:copy.description, alternates:{ canonical:'/es' + checklistPath } });
export default function Page() { return <><BlogHeader/><ChecklistResource lang="es"/><BlogFooter/></>; }
