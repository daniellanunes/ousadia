"use client";

import { useState } from "react";
import Image from "next/image";
import Section from "./Section";

const fieldClass =
  "w-full border-b border-black/30 bg-transparent py-3 text-sm outline-none transition-colors placeholder:text-black/40 focus:border-flame";

export default function Contact() {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [estilo, setEstilo] = useState("Blackwork");
  const [ideia, setIdeia] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Olá TomCash Tattoo! Meu nome é ${nome} (${telefone}). Gostaria de orçar uma tatuagem no estilo ${estilo}. Detalhes da ideia: ${ideia}`;
    const waUrl = `https://wa.me/5571989331091?text=${encodeURIComponent(msg)}`;
    window.open(waUrl, "_blank");
    setSent(true);
  };

  return (
    <Section
      id="contato"
      label="Contato"
      title={["Vamos fazer um orçamento? —", "Fale direto com o Tom"]}
    >
      <div className="grid items-center gap-8 md:grid-cols-[1fr_1.3fr]">
        <div className="reveal relative aspect-[4/3] w-full overflow-hidden border border-black/10 bg-black/5 shadow-md">
          <Image
            src="/tomcash/IMG_22-CdZcJtyB.webp"
            alt="Arte TomCash Tattoo"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 flex flex-col justify-end text-white">
            <p className="font-display text-lg font-bold uppercase">
              TomCash Tattoo
            </p>
            <p className="text-xs text-white/80 mt-1">
              Barra Center, Salvador - BA
            </p>
            <div className="mt-3 flex gap-2">
              <a
                href="https://wa.me/5571989331091"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-flame px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-white hover:bg-black transition-colors"
              >
                (71) 98933-1091
              </a>
              <a
                href="https://wa.me/5574988610287"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black/60 border border-white/20 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-white hover:bg-black transition-colors"
              >
                (74) 98861-0287
              </a>
            </div>
          </div>
        </div>

        <div className="reveal border border-black p-6 md:p-10 bg-white shadow-sm">
          {sent ? (
            <div className="py-12 text-center">
              <p className="font-display text-3xl font-bold uppercase text-flame">
                Mensagem Preparada!
              </p>
              <p className="mt-3 text-sm text-graphite">
                A conversa foi aberta no WhatsApp oficial do estúdio. Responderemos o quanto antes!
              </p>
              <button
                type="button"
                onClick={() => setSent(false)}
                className="mt-6 text-xs font-semibold uppercase tracking-[0.15em] underline hover:text-flame"
              >
                Enviar nova mensagem
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <p className="font-display text-sm font-bold uppercase tracking-[0.1em] text-black">
                Preencha os detalhes da sua ideia
              </p>
              <div className="mt-6 grid gap-3">
                <input
                  required
                  name="nome"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  placeholder="Seu nome completo"
                  className={fieldClass}
                />
                <input
                  required
                  name="telefone"
                  type="tel"
                  value={telefone}
                  onChange={(e) => setTelefone(e.target.value)}
                  placeholder="Seu WhatsApp (com DDD)"
                  className={fieldClass}
                />
                <div className="pt-2">
                  <label className="text-[11px] uppercase tracking-wider text-graphite font-semibold block mb-1">
                    Estilo pretendido:
                  </label>
                  <select
                    value={estilo}
                    onChange={(e) => setEstilo(e.target.value)}
                    className="w-full border-b border-black/30 bg-transparent py-2.5 text-xs outline-none focus:border-flame cursor-pointer"
                  >
                    <option value="Blackwork">Blackwork</option>
                    <option value="Fine Line">Fine Line</option>
                    <option value="Colorido / Pintura">Colorido / Pintura</option>
                    <option value="Anime / Pop">Anime / Pop</option>
                    <option value="Realismo">Realismo</option>
                    <option value="Projeto Selos Autorais">Projeto Selos Autorais</option>
                    <option value="Arte Exclusiva / Outro">Arte Exclusiva / Outro</option>
                  </select>
                </div>
                <textarea
                  required
                  rows={3}
                  name="ideia"
                  value={ideia}
                  onChange={(e) => setIdeia(e.target.value)}
                  placeholder="Descreva sua ideia, local do corpo aproximado e tamanho estimado (cm)"
                  className={`${fieldClass} resize-none`}
                />
              </div>

              <div className="mt-6 flex flex-col gap-3">
                <button
                  type="submit"
                  className="w-full bg-flame py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-black"
                >
                  Enviar para WhatsApp do Tom →
                </button>
                <p className="text-[11px] text-center text-graphite">
                  Ao clicar, você será direcionado para o atendimento oficial via WhatsApp.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </Section>
  );
}
