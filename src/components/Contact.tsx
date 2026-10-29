"use client";

import { useState } from "react";
import Photo from "./Photo";
import Section from "./Section";
import { Dagger } from "./TattooArt";

const fieldClass =
  "w-full border-b border-black/30 bg-transparent py-3 text-sm outline-none transition-colors placeholder:text-black/40 focus:border-flame";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <Section id="contato" label="Contato" title={["Fale com a gente e vamos dar", "vida às suas ideias"]}>
      <div className="grid items-center gap-6 md:grid-cols-[1fr_1.2fr]">
        <Photo alt="Tatuador concentrado durante a sessão" art={Dagger} tone="dark" className="reveal aspect-[4/3]" />

        <div className="reveal border border-black p-6 md:p-10">
          {sent ? (
            <div className="py-12 text-center">
              <p className="font-display text-3xl font-bold uppercase text-flame">Recebido!</p>
              <p className="mt-3 text-sm text-graphite">Respondemos em até 24h pelo contato que você deixou.</p>
              <button
                type="button"
                onClick={() => setSent(false)}
                className="mt-6 text-xs font-semibold uppercase tracking-[0.15em] underline"
              >
                Enviar outra mensagem
              </button>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                // Sem backend ainda: conecte aqui um serviço de e-mail ou uma API route.
                setSent(true);
              }}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.1em]">Preencha a solicitação</p>
              <div className="mt-6 grid gap-2">
                <input required name="nome" placeholder="Nome" className={fieldClass} />
                <input required name="telefone" type="tel" placeholder="Telefone / WhatsApp" className={fieldClass} />
                <input name="ideia" placeholder="Conte sua ideia em poucas palavras" className={fieldClass} />
              </div>
              <label className="mt-6 flex items-start gap-3 text-xs leading-relaxed text-graphite">
                <input required type="checkbox" className="mt-0.5 h-4 w-4 accent-[#dc5215]" />
                Concordo com o tratamento dos meus dados para retorno do contato.
              </label>
              <button
                type="submit"
                className="mt-8 w-full bg-flame py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-black md:w-auto md:px-14"
              >
                Enviar
              </button>
            </form>
          )}
        </div>
      </div>
    </Section>
  );
}
