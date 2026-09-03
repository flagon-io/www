import Link from "next/link";
import { Plus } from "@/components/plus";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative flex flex-col items-center gap-4 border-t border-hairline bg-background/70 px-6 py-6 backdrop-blur-md sm:flex-row sm:justify-between">
      {/* left: legal */}
      <div className="order-2 flex items-center gap-5 font-mono text-[11px] uppercase tracking-widest sm:order-1">
        <Link
          href="/terms"
          className="text-subtle transition hover:text-foreground"
        >
          Terms
        </Link>
        <Link
          href="/privacy"
          className="text-subtle transition hover:text-foreground"
        >
          Privacy
        </Link>
      </div>

      {/* right: incorporation */}
      <p className="order-1 font-mono text-xs text-subtle sm:order-3">
        © {year} Flagon, Inc.
      </p>

      {/* divider-end marks */}
      <Plus className="absolute left-0 top-0 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 text-white/15" />
      <Plus className="absolute right-0 top-0 h-3.5 w-3.5 translate-x-1/2 -translate-y-1/2 text-white/15" />
    </footer>
  );
}
