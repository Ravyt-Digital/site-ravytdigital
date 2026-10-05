import { BlogHeader, BlogFooter } from '@/locales/en/components/BlogChrome';
import ChecklistResource from '@/components/ChecklistResource';
import { checklistCopy, checklistPath } from '@/lib/google-checklist';
import { pageMetadata } from '@/lib/metadata';
const copy = checklistCopy.en;
export const metadata = pageMetadata({ title:copy.title, description:copy.description, alternates:{ canonical:'/en' + checklistPath } });
export default function Page() { return <><BlogHeader/><ChecklistResource lang="en"/><BlogFooter/></>; }
