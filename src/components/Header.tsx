"use client";

import { useState } from "react";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#portfolio", label: "Portfólio" },
  { href: "#equipe", label: "Equipe" },
  { href: "#processo", label: "Como funciona" },
  { href: "#contato", label: "Contato" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#local", label: "Onde estamos" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 md:px-8">
        <a href="#topo" className="font-display text-sm font-bold uppercase tracking-tight">
          Ousadia<span className="text-flame">.</span>
        </a>

        <nav className="hidden gap-6 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[11px] font-medium uppercase tracking-[0.08em] text-black/70 transition-colors hover:text-flame"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="text-[11px] font-semibold uppercase tracking-[0.15em] lg:hidden"
        >
          {open ? "Fechar" : "Menu"}
        </button>
      </div>

      {open && (
        <nav className="border-t border-black/10 bg-white px-4 pb-6 lg:hidden">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="flex items-baseline gap-4 border-b border-black/10 py-3 font-display text-xl font-semibold uppercase"
            >
              <span className="text-xs text-flame">0{i + 1}</span>
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
