import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SiDiscord, SiGithub } from "@icons-pack/react-simple-icons";
import { Logo } from "@/components/logo";
import { Plus } from "@/components/plus";
import { site } from "@/lib/site";

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

        <nav className="flex items-center gap-1">
          <a
            href={site.links.discord}
            target="_blank"
            rel="noreferrer"
            aria-label="Flagon on Discord"
            className="hidden h-9 w-9 items-center justify-center rounded-md text-muted transition hover:bg-white/5 hover:text-foreground sm:inline-flex"
          >
            <SiDiscord className="h-4.5 w-4.5" />
          </a>
          <a
            href={site.links.github}
            target="_blank"
            rel="noreferrer"
            aria-label="Flagon on GitHub"
            className="hidden h-9 w-9 items-center justify-center rounded-md text-muted transition hover:bg-white/5 hover:text-foreground sm:inline-flex"
          >
            <SiGithub className="h-4.5 w-4.5" />
          </a>
          <a
            href={site.links.dashboard}
            className="ml-2 inline-flex items-center gap-1.5 rounded-md bg-brand px-3.5 py-1.5 text-sm font-medium text-background transition hover:bg-brand-bright focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Dashboard
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </nav>

        {/* crosshair marks where the header divider meets the column rails */}
        <Plus className="absolute bottom-0 left-0 h-3.5 w-3.5 -translate-x-1/2 translate-y-1/2 text-white/15" />
        <Plus className="absolute bottom-0 right-0 h-3.5 w-3.5 translate-x-1/2 translate-y-1/2 text-white/15" />
      </div>
    </header>
  );
}
