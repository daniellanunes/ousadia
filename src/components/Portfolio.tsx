import Photo from "./Photo";
import Section from "./Section";
import { Dagger, Eye, Moth, Rose, Skull, Snake, Swallow } from "./TattooArt";

// Troque `art` por `src: "/portfolio/arquivo.jpg"` quando tiver as fotos reais.
const works = [
  { art: Snake, tone: "light", alt: "Serpente no antebraço", span: "md:row-span-2" },
  { art: Rose, tone: "mid", alt: "Rosa fine line", span: "md:col-span-2" },
  { art: Dagger, tone: "dark", alt: "Punhal neo-tradicional", span: "" },
  { art: Moth, tone: "light", alt: "Mariposa blackwork", span: "md:row-span-2" },
  { art: Skull, tone: "dark", alt: "Caveira", span: "" },
  { art: Swallow, tone: "mid", alt: "Andorinha", span: "" },
  { art: Eye, tone: "light", alt: "Olho geométrico", span: "" },
] as const;

export default function Portfolio() {
  return (
    <Section id="portfolio" label="Portfólio" title={["Não é só um desenho,", "é arte na sua pele"]}>
      <div className="grid auto-rows-[160px] grid-cols-2 gap-3 md:auto-rows-[200px] md:grid-cols-4 md:gap-4">
        {works.map((w) => (
          <Photo key={w.alt} alt={w.alt} art={w.art} tone={w.tone} className={`reveal h-full ${w.span}`} />
        ))}
      </div>
      <a
        href="https://instagram.com/"
        className="mt-8 block text-center text-xs font-semibold uppercase tracking-[0.15em] text-flame hover:underline"
      >
        Mais trabalhos no nosso Instagram →
      </a>
    </Section>
  );
}
