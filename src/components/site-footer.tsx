import Link from "next/link";
import { Plus } from "@/components/plus";
import { site } from "@/lib/site";

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

      {/* center: incorporation */}
      <p className="order-1 font-mono text-xs text-subtle sm:absolute sm:left-1/2 sm:order-2 sm:-translate-x-1/2">
        © {year} Flagon, Inc.
      </p>

      {/* right: social */}
      <div className="order-3 flex items-center gap-5 font-mono text-[11px] uppercase tracking-widest">
        <a
          href={site.links.discord}
          target="_blank"
          rel="noreferrer"
          className="text-subtle transition hover:text-foreground"
        >
          Discord
        </a>
        <a
          href={site.links.github}
          target="_blank"
          rel="noreferrer"
          className="text-subtle transition hover:text-foreground"
        >
          GitHub
        </a>
      </div>

      {/* divider-end marks */}
      <Plus className="absolute left-0 top-0 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 text-white/15" />
      <Plus className="absolute right-0 top-0 h-3.5 w-3.5 translate-x-1/2 -translate-y-1/2 text-white/15" />
    </footer>
  );
}
