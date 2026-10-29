import Section from "./Section";

const items = [
  {
    title: "Esterilização & Biossegurança",
    text: "Materiais 100% descartáveis e de uso único, abertos na frente do cliente. Tintas e insumos com registro ativo na Anvisa.",
  },
  {
    title: "Ambiente Seguro & Climatizado",
    text: "Espaço no Salvador Tattoo Studio projetado com padrões rigorosos de higiene, barreiras plásticas em todos os equipamentos e conforto térmico.",
  },
  {
    title: "Suporte Pós-Procedimento",
    text: "Orientações completas de cuidados para cicatrização perfeita e canal aberto via WhatsApp para esclarecer qualquer dúvida.",
  },
];

export default function Safety() {
  return (
    <Section
      id="seguranca"
      label="Cuidado & Saúde"
      title={["Seu conforto e sua segurança —", "Prioridade absoluta em cada traço"]}
    >
      <ul className="grid gap-8 md:grid-cols-3">
        {items.map((item, i) => (
          <li
            key={item.title}
            className={`reveal border-l-2 border-flame pl-5 ${
              i === 1 ? "md:mt-6" : i === 2 ? "md:mt-12" : ""
            }`}
          >
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-black">
              {item.title}
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-graphite">{item.text}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
