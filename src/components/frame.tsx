import type { ReactNode } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

/**
 * Shared page shell: a centered, hairline-railed content column with a
 * full-bleed header and footer. Pages provide their own <main> and any
 * page-specific backdrop (e.g. the homepage hero's HexField).
 */
export function Frame({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex flex-1 flex-col">
      {/* full-bleed topbar */}
      <SiteHeader />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col border-x border-hairline">
        {children}
        <SiteFooter />
      </div>
    </div>
  );
}
