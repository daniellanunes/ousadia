import Section from "./Section";

const terms = [
  {
    step: "01",
    title: "Orçamento Aprovado & Sinal",
    highlight: "30% ou 50% de sinal",
    desc: "Para que possamos desenvolver sua arte especialmente pra você e deixarmos tudo preparado para te atender, um sinal é cobrado:",
    bullets: [
      "30% do valor total caso a arte já esteja pronta, com ajustes pequenos.",
      "50% do valor total caso a arte seja autoral e necessite ser criada do início.",
      "Processo Criativo: Esboços são enviados para alinhamento. A arte final é enviada com até 24 horas de antecedência da data da sessão.",
    ],
  },
  {
    step: "02",
    title: "Agendamento & Confirmação",
    highlight: "Garantia da data e horário",
    desc: "A data e o horário escolhidos para o procedimento só serão confirmados mediante o pagamento do sinal.",
    bullets: [
      "O cliente deverá realizar o pagamento do sinal no ato do agendamento, garantindo a reserva do horário.",
      "Pagamento do sinal deve ser realizado via Pix ou transferência bancária.",
    ],
  },
  {
    step: "03",
    title: "Pagamento do Procedimento",
    highlight: "Quitação no dia",
    desc: "O saldo do valor total da tatuagem deverá ser quitado no dia do procedimento.",
    bullets: [
      "Mesmo para tatuagens que necessitam de mais de uma sessão, o valor integral deve ser quitado antes do início da primeira sessão.",
      "Formas de pagamento aceitas: Pix / transferência bancária, dinheiro, cartão de débito ou cartão de crédito (parcelamento em até 12x com juros da máquina).",
    ],
  },
];

export default function Process() {
  return (
    <Section
      id="orcamento"
      label="Transparência & Regras"
      title={["Termos e Condições para —", "Orçamento, Agendamento e Pagamento"]}
    >
      <div className="mb-8 max-w-3xl space-y-3 text-sm leading-relaxed text-black/80">
        <p>
          Cada tatuagem é única — e o orçamento também. O valor de um trabalho é definido
          com base em diversos fatores, como o tamanho da peça, o nível de detalhamento, a localização
          no corpo, o tempo estimado de execução e o estilo escolhido.
        </p>
        <p className="text-graphite">
          Para oferecer um orçamento justo e personalizado, analisamos sua ideia com atenção.
          Aqui, respeitamos o seu tempo, seu corpo e seu processo — para que você se sinta seguro, acolhido e satisfeito.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {terms.map((t) => (
          <div
            key={t.step}
            className="reveal flex flex-col justify-between border border-black/15 bg-white p-6 shadow-sm transition-all hover:border-flame"
          >
            <div>
              <div className="flex items-center justify-between border-b border-black/10 pb-3">
                <span className="font-display text-2xl font-bold text-flame">{t.step}</span>
                <span className="text-[10px] uppercase tracking-wider font-semibold bg-[#fafafa] px-2 py-1 border border-black/10">
                  {t.highlight}
                </span>
              </div>
              <h3 className="mt-4 font-display text-base font-bold uppercase tracking-tight text-black">
                {t.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-graphite">{t.desc}</p>
              <ul className="mt-4 space-y-2 text-xs leading-relaxed text-black/80">
                {t.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-flame font-bold">•</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Caixa de aviso importante / desistência */}
      <div className="reveal mt-6 border-l-4 border-flame bg-[#fff9f4] p-5 text-xs leading-relaxed text-black/85">
        <h4 className="font-bold uppercase tracking-wider text-black">
          Atenção Importante sobre Cancelamentos:
        </h4>
        <p className="mt-1">
          O valor do sinal não é reembolsável em casos de desistência por parte do cliente,
          salvo em situações previamente discutidas e acordadas. Alterações no agendamento
          devem ser comunicadas com a devida antecedência.
        </p>
      </div>
    </Section>
  );
}
