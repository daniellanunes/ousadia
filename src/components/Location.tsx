import Section from "./Section";

const address = "Rua Augusta, 1500 - Consolação, São Paulo - SP";

export default function Location() {
  return (
    <Section id="local" label="Onde estamos" title={["Onde as obras-primas", "são criadas"]}>
      <div className="grid gap-8 md:grid-cols-[1fr_1.6fr] md:items-end">
        <div className="reveal space-y-4 text-sm leading-relaxed">
          <p>
            Estamos a 5 minutos do metrô Consolação, no 2º andar.
            <br />
            {address}
          </p>
          <p className="text-graphite">
            Terça a sábado, das 11h às 20h.
            <br />
            Atendimento somente com horário marcado.
          </p>
          <p>
            <a href="tel:+5511999999999" className="font-semibold hover:text-flame">
              +55 (11) 99999-9999
            </a>
          </p>
        </div>
        <div className="reveal relative aspect-[16/10] overflow-hidden border border-black">
          <iframe
            title="Mapa do estúdio"
            src={`https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`}
            className="absolute inset-0 h-full w-full grayscale"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </Section>
  );
}
