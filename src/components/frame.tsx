import type { ReactNode } from "react";
import { HexField } from "@/components/hex-field";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

/**
 * Shared page shell: full-bleed backdrop plus a centered, hairline-railed
 * content column. Header and footer are fixed; pages provide their own <main>.
 * Crosshair marks live on the header/footer dividers (inset from the viewport
 * edges) so nothing overflows the page.
 */
export function Frame({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex flex-1 flex-col">
      <HexField />

      {/* full-bleed topbar */}
      <SiteHeader />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col border-x border-hairline">
        {children}
        <SiteFooter />
      </div>
    </div>
  );
}
