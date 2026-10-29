import Section from "./Section";

const reviews = [
  {
    name: "Carolina M.",
    text: "Fiz o projeto de um selo postal com a memória de uma viagem à Chapada. O Tom conseguiu capturar cada detalhe com um traço limpo e delicado. Super recomendo!",
  },
  {
    name: "Rafael B.",
    text: "Atendimento diferenciado no Barra Center, estúdio com uma energia incrível e vista para o Farol da Barra. A tatuagem em blackwork superou todas as expectativas.",
  },
  {
    name: "Beatriz S.",
    text: "Segurança total do início ao fim. O Tom explicou o processo do sinal, mandou o esboço antes e no dia o resultado ficou impecável. Já planejando a próxima!",
  },
  {
    name: "Lucas P.",
    text: "O domínio que ele tem de cor e sombreamento parece mesmo uma pintura sobre tela. Experiência de alto padrão em Salvador.",
  },
];

export default function Reviews() {
  return (
    <Section
      id="depoimentos"
      label="Experiências Reais"
      title={["O que dizem os clientes —", "Confiança e arte reconhecida"]}
    >
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {reviews.map((r, i) => (
          <li
            key={r.name}
            className={`reveal flex flex-col items-center ${i % 2 ? "lg:mt-8" : ""}`}
          >
            <blockquote className="relative w-full border border-black/15 bg-white px-5 pb-8 pt-10 text-center text-xs leading-relaxed shadow-sm">
              <span className="absolute left-1/2 top-2 -translate-x-1/2 font-display text-4xl font-bold leading-none text-flame">
                “
              </span>
              <p className="text-black/80">{r.text}</p>
            </blockquote>
            <span className="-mt-5 grid h-10 w-10 place-items-center rounded-full border border-flame bg-white font-display text-xs font-bold text-flame shadow-sm">
              {r.name[0]}
            </span>
            <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-black">
              {r.name}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
