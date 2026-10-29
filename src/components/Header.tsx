"use client";

import { useState } from "react";
import Image from "next/image";

const links = [
  { href: "#sobre", label: "Sobre o Artista" },
  { href: "#estilos", label: "Estilos" },
  { href: "#portfolio", label: "Galeria" },
  { href: "#selos", label: "Projeto Selos" },
  { href: "#estudio", label: "O Estúdio" },
  { href: "#orcamento", label: "Orçamento & Regras" },
  { href: "#local", label: "Onde Estamos" },
  { href: "#contato", label: "Contato" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-8">
        <a href="#topo" className="flex items-center gap-2.5 group">
          <div className="relative h-9 w-9 overflow-hidden rounded-full border border-black/15 bg-black">
            <Image
              src="/tomcash/logo1-DkOgUzll.webp"
              alt="TomCash Tattoo Logo"
              fill
              className="object-contain p-1"
            />
          </div>
          <span className="font-display text-base font-bold uppercase tracking-tight text-black group-hover:text-flame transition-colors">
            TomCash<span className="text-flame"> Tattoo</span>
          </span>
        </a>

        <nav className="hidden gap-5 xl:gap-6 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[11px] font-medium uppercase tracking-[0.08em] text-black/75 transition-colors hover:text-flame"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="https://wa.me/5571989331091?text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20um%20or%C3%A7amento!"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#c99e67] bg-[#c99e67] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-white transition-all hover:bg-black hover:border-black"
          >
            WhatsApp
          </a>
        </div>

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
        <nav className="border-t border-black/10 bg-white px-4 pb-6 lg:hidden max-h-[80vh] overflow-y-auto">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="flex items-baseline gap-4 border-b border-black/10 py-3.5 font-display text-lg font-semibold uppercase"
            >
              <span className="text-xs text-flame">0{i + 1}</span>
              {l.label}
            </a>
          ))}
          <div className="mt-5">
            <a
              href="https://wa.me/5571989331091?text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20um%20or%C3%A7amento!"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-[#c99e67] py-3 text-xs font-semibold uppercase tracking-[0.15em] text-white hover:bg-black transition-colors"
            >
              Conversar no WhatsApp
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
