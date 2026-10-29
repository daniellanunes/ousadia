import Photo from "./Photo";
import Section from "./Section";
import { Eye, Moth, Skull, Snake } from "./TattooArt";

// Equipe de exemplo — substitua pelos tatuadores reais.
const team = [
  { name: "Vítor", art: Skull, tone: "dark", bio: "Na tatuagem desde 2012. Blackwork pesado e realismo em preto e cinza." },
  { name: "Duda", art: Moth, tone: "light", bio: "Traço fino e delicado. Especialista em fine line e floral desde 2018." },
  { name: "Artur", art: Snake, tone: "mid", bio: "Tatua desde 2015. Neo-tradicional com cor, contraste e muita personalidade." },
  { name: "Érica", art: Eye, tone: "dark", bio: "Começou em 2016 e mistura geométrico com pontilhismo em peças grandes." },
] as const;

export default function Team() {
  return (
    <Section id="equipe" label="Equipe" title={["Nosso time é formado por", "profissionais de verdade"]}>
      <ul className="grid grid-cols-2 gap-x-3 gap-y-10 md:grid-cols-4 md:gap-4">
        {team.map((p, i) => (
          <li key={p.name} className={`reveal ${i % 2 ? "md:mt-20" : ""}`}>
            <Photo alt={`Retrato de ${p.name}`} art={p.art} tone={p.tone} className="aspect-[3/4]" />
            <p className="mt-3 font-display text-lg font-semibold uppercase">{p.name}</p>
            <p className="mt-1 text-xs leading-relaxed text-graphite">{p.bio}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
