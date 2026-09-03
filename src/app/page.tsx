import { Frame } from "@/components/frame";
import { HexField } from "@/components/hex-field";
import { FlagonPour } from "@/components/flagon-pour";

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
          Rebuilding
          <span className="text-subtle">·</span>
          Coming soon
        </div>

        {/* centerpiece: the tankard, filling */}
        <div className="rise mt-10" style={{ animationDelay: "60ms" }}>
          <FlagonPour className="relative h-40 w-40 sm:h-48 sm:w-48" />
        </div>

        {/* headline */}
        <h1
          className="rise mt-8 max-w-2xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl"
          style={{ animationDelay: "120ms" }}
        >
          Something new is{" "}
          <span className="bg-linear-to-r from-brand-bright to-teal-200 bg-clip-text text-transparent">
            on tap.
          </span>
        </h1>

        {/* subcopy */}
        <p
          className="rise mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted sm:text-lg"
          style={{ animationDelay: "180ms" }}
        >
          Flagon is being rebuilt from the ground up. We&rsquo;re heads-down
          figuring out what comes next, and it&rsquo;s going to be worth the
          wait.
        </p>

        {/* sign-off */}
        <div
          className="rise mt-12 flex items-center gap-4 font-mono text-[11px] uppercase tracking-widest text-subtle"
          style={{ animationDelay: "240ms" }}
        >
          <span className="h-px w-8 bg-linear-to-r from-transparent to-hairline" />
          Check back soon
          <span className="h-px w-8 bg-linear-to-l from-transparent to-hairline" />
        </div>
      </main>
    </Frame>
  );
}
