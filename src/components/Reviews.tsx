import Section from "./Section";

// Depoimentos de exemplo — substitua pelos reais.
const reviews = [
  { name: "Mariana L.", text: "Fiz minha primeira tattoo aqui e fui super bem recebida. O Vítor explicou cada etapa e o resultado ficou impecável." },
  { name: "Thiago R.", text: "Já é minha quarta peça com a Duda. Traço limpo, cicatrização perfeita e um atendimento que faz você querer voltar." },
  { name: "Fernanda S.", text: "Cobri uma tatuagem antiga que me incomodava há anos. Ficou melhor do que eu tinha imaginado." },
  { name: "Lucas M.", text: "Estúdio limpo, organizado e com uma energia ótima. Saí de lá já pensando na próxima." },
];

export default function Reviews() {
  return (
    <Section
      id="depoimentos"
      label="Depoimentos"
      title={["Ao longo dos anos conquistamos", "a confiança de muitos clientes"]}
    >
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {reviews.map((r, i) => (
          <li key={r.name} className={`reveal flex flex-col items-center ${i % 2 ? "lg:mt-10" : ""}`}>
            <blockquote className="relative border border-black px-5 pb-10 pt-12 text-center text-sm leading-relaxed">
              <span className="absolute left-1/2 top-2 -translate-x-1/2 font-display text-5xl font-bold leading-none text-flame">
                “
              </span>
              {r.text}
            </blockquote>
            <span className="-mt-6 grid h-12 w-12 place-items-center rounded-full border border-black bg-white font-display font-bold">
              {r.name[0]}
            </span>
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.1em]">{r.name}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
