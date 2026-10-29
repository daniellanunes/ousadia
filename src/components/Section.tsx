import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  label: string;
  /** Título em duas linhas: a segunda vem recuada, como no layout suíço do modelo. */
  title: [ReactNode, ReactNode];
  children: ReactNode;
  className?: string;
};

export default function Section({ id, label, title, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-20 border-t border-black/10 py-20 md:py-28 ${className}`}>
      <div className="mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-[180px_1fr] md:px-8">
        <p className="reveal pt-2 text-[11px] font-medium uppercase tracking-[0.15em] text-graphite">
          [ {label} ]
        </p>
        <div>
          <h2 className="reveal font-display text-[clamp(1.75rem,4.2vw,3.25rem)] font-semibold uppercase leading-[1.05] tracking-tight">
            <span className="block">{title[0]}</span>
            <span className="block text-right">{title[1]}</span>
          </h2>
          <div className="mt-12 md:mt-16">{children}</div>
        </div>
      </div>
    </section>
  );
}
