import { BlogHeader, BlogFooter } from '@/components/BlogChrome';
import ChecklistResource from '@/components/ChecklistResource';
import { checklistCopy, checklistPath } from '@/lib/google-checklist';
import { pageMetadata } from '@/lib/metadata';
const copy = checklistCopy.pt;
export const metadata = pageMetadata({ title:copy.title, description:copy.description, alternates:{ canonical:'' + checklistPath } });
export default function Page() { return <><BlogHeader/><ChecklistResource lang="pt"/><BlogFooter/></>; }
