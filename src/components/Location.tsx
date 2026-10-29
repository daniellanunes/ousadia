import Section from "./Section";

const address = "Centro Comercial Barra Center - Av. Oceânica, 551 - sala 106 - Barra, Salvador - BA, 40140-080";
const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.418142504204!2d-38.526958600000015!3d-13.009023199999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x716035be7e33827%3A0xe5f3592c4f508fed!2sTomCashTattoo!5e0!3m2!1spt-BR!2sbr!4v1743624412139!5m2!1spt-BR!2sbr";

export default function Location() {
  return (
    <Section
      id="local"
      label="Onde Estamos"
      title={["Saiba onde me encontrar —", "No coração da Barra, Salvador"]}
    >
      <div className="grid gap-8 md:grid-cols-[1.1fr_1.5fr] md:items-start">
        <div className="reveal space-y-6 text-sm leading-relaxed">
          <div className="border border-black/15 bg-white p-6 shadow-sm">
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-black">
              Salvador Tattoo Studio (Barra Center)
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-black/80">
              {address}
            </p>
            <p className="mt-1 text-xs text-graphite">
              Ponto de referência: Em frente à orla da Barra, com vista inspiradora para o Farol da Barra.
            </p>
          </div>

          <div className="border border-black/15 bg-white p-6 shadow-sm space-y-3">
            <h4 className="font-display text-xs font-bold uppercase tracking-wider text-black">
              Horário de Atendimento:
            </h4>
            <div className="text-xs space-y-1 text-black/80">
              <p><strong className="text-black">Segunda a Sexta:</strong> 08:00 às 23:30</p>
              <p><strong className="text-black">Sábado:</strong> 08:00 às 22:00</p>
              <p><strong className="text-black">Domingo:</strong> 08:00 às 22:00</p>
            </div>
            <p className="text-[11px] text-graphite italic pt-1">
              * Atendimento com hora marcada para garantir exclusividade e tranquilidade.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-1">
            <a
              href="https://wa.me/5571989331091?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20um%20hor%C3%A1rio!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-flame px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white hover:bg-black transition-colors"
            >
              Falar no WhatsApp
            </a>
            <a
              href="https://www.instagram.com/tomcashtattoo/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border border-black px-6 py-3 text-xs font-semibold uppercase tracking-wider text-black hover:bg-black hover:text-white transition-colors"
            >
              Instagram @tomcashtattoo
            </a>
          </div>
        </div>

        {/* Mapa interativo embed */}
        <div className="reveal relative aspect-[16/11] overflow-hidden border border-black shadow-md">
          <iframe
            title="Localização do estúdio TomCash Tattoo"
            src={mapEmbedUrl}
            className="absolute inset-0 h-full w-full border-0"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </Section>
  );
}
