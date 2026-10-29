import Section from "./Section";

const items = [
  {
    title: "Busca do desenho perfeito",
    text: "Ouvimos sua ideia e desenhamos opções até chegar no traço que tem a sua cara.",
  },
  {
    title: "Fale com a gente",
    text: "Tire dúvidas sobre tamanho, local e cuidados antes mesmo de marcar a sessão.",
  },
  {
    title: "Atendimento sem pressa",
    text: "Cada sessão é agendada com folga para que tudo aconteça no seu tempo.",
  },
  {
    title: "Equipamento de ponta",
    text: "Máquinas rotativas modernas, agulhas descartáveis e tintas certificadas pela Anvisa.",
  },
];

export default function Advantages() {
  return (
    <Section id="diferenciais" label="Diferenciais" title={["Cada cliente é único,", "cada história é individual"]}>
      <ol className="grid gap-10 md:grid-cols-2 md:gap-x-16 md:gap-y-4">
        {items.map((item, i) => (
          <li
            key={item.title}
            className={`reveal flex gap-5 ${i % 2 ? "md:mt-16" : ""} ${i > 1 ? "md:ml-[15%]" : ""}`}
          >
            <span
              className={`font-display text-5xl font-bold leading-none text-flame md:text-6xl ${
                i % 2 ? "md:[writing-mode:vertical-rl]" : ""
              }`}
            >
              0{i + 1}
            </span>
            <div className="max-w-xs pt-1">
              <h3 className="text-xs font-semibold uppercase tracking-[0.1em]">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-graphite">{item.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
