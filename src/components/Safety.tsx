import Section from "./Section";

const items = [
  {
    title: "Esterilização completa",
    text: "Autoclave classe B, materiais descartáveis abertos na sua frente e bancada higienizada a cada cliente.",
  },
  {
    title: "Proteção individual",
    text: "Luvas nitrílicas, barreiras plásticas em todos os equipamentos e protocolo seguido à risca.",
  },
  {
    title: "Acompanhamento",
    text: "Kit de cuidados no fim da sessão e suporte pelo WhatsApp durante toda a cicatrização.",
  },
];

export default function Safety() {
  return (
    <Section id="seguranca" label="Segurança" title={["Seu conforto e sua segurança", "são a nossa principal tatuagem"]}>
      <ul className="grid gap-10 md:grid-cols-3">
        {items.map((item, i) => (
          <li key={item.title} className={`reveal border-l border-flame pl-5 ${i === 1 ? "md:mt-12" : i === 2 ? "md:mt-24" : ""}`}>
            <h3 className="text-xs font-semibold uppercase tracking-[0.1em]">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-graphite">{item.text}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
