import { ArrowUpRight } from "lucide-react";
import { SiDiscord, SiGithub } from "@icons-pack/react-simple-icons";
import { Frame } from "@/components/frame";
import { HexField } from "@/components/hex-field";
import { Logo } from "@/components/logo";
import { site } from "@/lib/site";

const surfaces = ["Projects", "Environments", "Teams", "Catalog", "Billing"];

export default function Home() {
  return (
    <Frame>
      <main className="relative flex flex-1 flex-col items-center justify-center px-6 py-24 text-center">
        <HexField />

        {/* status pill */}
        <div
          className="rise inline-flex items-center gap-2 rounded-full border border-hairline bg-white/3 px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-muted"
          style={{ animationDelay: "0ms" }}
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="ping-slow absolute inline-flex h-full w-full rounded-full bg-brand-bright" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand-bright" />
          </span>
          Early access
          <span className="text-subtle">·</span>
          Coming soon
        </div>

        {/* mark */}
        <div className="rise relative mt-10" style={{ animationDelay: "60ms" }}>
          <div
            aria-hidden
            className="absolute inset-0 -z-10 blur-2xl"
            style={{
              background:
                "radial-gradient(circle at center, rgba(20,184,166,0.4), transparent 70%)",
            }}
          />
          <Logo className="h-14 w-14 text-brand-bright" />
        </div>

        {/* headline */}
        <h1
          className="rise mt-8 max-w-2xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl"
          style={{ animationDelay: "120ms" }}
        >
          Stop building your platform.{" "}
          <span className="bg-linear-to-r from-brand-bright to-teal-200 bg-clip-text text-transparent">
            Start shipping on it.
          </span>
        </h1>

        {/* subcopy */}
        <p
          className="rise mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted sm:text-lg"
          style={{ animationDelay: "180ms" }}
        >
          Flagon is the unified developer platform. One hub for your projects,
          environments, and teams. We&rsquo;re rebuilding from the ground up, and
          something new is on tap.
        </p>

        {/* CTAs */}
        <div
          className="rise mt-10 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row"
          style={{ animationDelay: "240ms" }}
        >
          <a
            href={site.links.github}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-md border border-hairline bg-white/3 px-5 py-2.5 text-sm font-medium text-foreground transition hover:border-white/20 hover:bg-white/6 sm:w-auto"
          >
            <SiGithub className="h-4 w-4" />
            View on GitHub
            <ArrowUpRight className="h-4 w-4 text-subtle transition group-hover:text-foreground" />
          </a>
          <a
            href={site.links.discord}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-brand px-5 py-2.5 text-sm font-medium text-background shadow-[inset_0_1px_0_0_rgba(255,255,255,0.18)] transition hover:bg-brand-bright focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:w-auto"
          >
            <SiDiscord className="h-4 w-4" />
            Join the Discord
          </a>
        </div>

        {/* surfaces strip */}
        <div
          className="rise mt-14 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 font-mono text-[11px] uppercase tracking-widest text-subtle"
          style={{ animationDelay: "320ms" }}
        >
          {surfaces.map((label, i) => (
            <span key={label} className="flex items-center gap-3">
              {i > 0 && (
                <span className="h-1 w-1 rounded-full bg-white/20" aria-hidden />
              )}
              {label}
            </span>
          ))}
        </div>
      </main>
    </Frame>
  );
}
