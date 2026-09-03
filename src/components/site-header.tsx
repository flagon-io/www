import Link from "next/link";
import { Logo } from "@/components/logo";
import { Plus } from "@/components/plus";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-hairline bg-background/70 backdrop-blur-md">
      {/* nav contents stay aligned to the content column below */}
      <div className="relative mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-5">
        <Link
          href="/"
          className="flex items-center gap-2.5 rounded-md outline-none focus-visible:ring-2 focus-visible:ring-brand"
        >
          <Logo className="h-6 w-6 text-brand" />
          <span className="text-[15px] font-semibold tracking-tight">
            Flagon
          </span>
        </Link>

        {/* crosshair marks where the header divider meets the column rails */}
        <Plus className="absolute bottom-0 left-0 h-3.5 w-3.5 -translate-x-1/2 translate-y-1/2 text-white/15" />
        <Plus className="absolute bottom-0 right-0 h-3.5 w-3.5 translate-x-1/2 translate-y-1/2 text-white/15" />
      </div>
    </header>
  );
}
