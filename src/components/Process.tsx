import Photo from "./Photo";
import Section from "./Section";
import { Dagger, Rose, Swallow } from "./TattooArt";

const steps = [
  {
    title: "Envie sua ideia",
    text: "Preencha o formulário com a descrição, referências e o local do corpo. Respondemos em até 24h.",
    art: Rose,
  },
  {
    title: "Consulta e esboço",
    text: "Conversamos sobre tamanho, estilo e orçamento. O tatuador prepara o esboço e ajusta com você.",
    art: Dagger,
  },
  {
    title: "Dia da sessão",
    text: "Você chega, aprova o decalque na pele e relaxa. No fim, sai com todas as orientações de cuidado.",
    art: Swallow,
  },
];

export default function Process() {
  return (
    <Section
      id="processo"
      label="Como funciona"
      title={["Deixamos o processo simples", "e confortável do começo ao fim"]}
    >
      <ol className="space-y-10 md:space-y-6">
        {steps.map((s, i) => (
          <li
            key={s.title}
            className={`reveal grid items-center gap-4 md:grid-cols-[200px_1fr_220px] md:gap-8 ${
              i % 2 ? "md:[direction:rtl]" : ""
            }`}
          >
            <Photo alt={s.title} art={s.art} tone={i === 1 ? "light" : "dark"} className="aspect-[4/3]" />
            <div className="relative md:[direction:ltr]">
              <span className="absolute -top-px left-0 hidden h-px w-full bg-flame md:block" />
              <div className="pt-4">
                <p className="text-xs font-semibold uppercase tracking-[0.1em]">
                  <span className="text-flame">Passo 0{i + 1} — </span>
                  {s.title}
                </p>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-graphite">{s.text}</p>
              </div>
            </div>
            <span className="hidden md:block" />
          </li>
        ))}
      </ol>
    </Section>
  );
}
