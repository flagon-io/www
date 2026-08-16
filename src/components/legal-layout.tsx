import type { ReactNode } from "react";

type LegalLayoutProps = {
  title: string;
  updated: string;
  children: ReactNode;
};

export function LegalLayout({ title, updated, children }: LegalLayoutProps) {
  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-16 sm:py-20">
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h1>
      <p className="mt-3 font-mono text-xs text-subtle">Last updated {updated}</p>

      <div className="mt-8 rounded-lg border border-hairline bg-white/3 p-4 text-sm text-muted">
        <strong className="font-semibold text-foreground">Draft.</strong> This
        document is a working draft for Flagon, Inc. and is not yet legally
        binding. It will be reviewed and finalized before Flagon leaves early
        access.
      </div>

      <div className="legal-prose mt-8">{children}</div>
    </main>
  );
}
