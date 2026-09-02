import type { ReactNode } from "react";
import { BlogFooter, BlogHeader } from "@/components/BlogChrome";
export default function BlogLayout({children}:{children:ReactNode}){return <><BlogHeader current="insights"/>{children}<BlogFooter/></>}
