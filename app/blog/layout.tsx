
import {PriceText} from "@/components/i18n/Regional";
import type { ReactNode } from "react";
import { BlogFooter, BlogHeader } from "@/components/BlogChrome";
export default function BlogLayout({children}:{children:ReactNode}){return <><BlogHeader current="insights"/>{<PriceText>{children}</PriceText>}<BlogFooter/></>}
