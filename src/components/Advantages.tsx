import Image from "next/image";
import Section from "./Section";

const styles = [
  {
    name: "Blackwork",
    img: "/tomcash/IMG_1-DeMZbL7N.webp",
    desc: "Contraste marcante, preenchimentos densos e texturas precisas.",
  },
  {
    name: "Fine Line",
    img: "/tomcash/IMG_2-BR816FZN.webp",
    desc: "Traços ultrafinos, elegância, delicadeza e precisão cirúrgica.",
  },
  {
    name: "Colorido",
    img: "/tomcash/IMG_3-DlbDNVR-.webp",
    desc: "Cores profundas aplicadas com técnicas de pintura e saturação impecável.",
  },
  {
    name: "Anime",
    img: "/tomcash/IMG_4-CXVQWsJg.webp",
    desc: "Traços expressivos inspirados na animação japonesa e cultura pop.",
  },
  {
    name: "Realismo",
    img: "/tomcash/IMG_5-CAtQdCLA.webp",
    desc: "Sombreamentos suaves, volume, luz e fidelidade visual.",
  },
  {
    name: "Artístico & Autoral",
    img: "/tomcash/IMG_6-BCoGd3cX.webp",
    desc: "Projetos exclusivos desenvolvidos sob medida para a sua história.",
  },
];

export default function Advantages() {
  return (
    <Section
      id="estilos"
      label="Variedade & Técnica"
      title={["Estilos de Tatuagem —", "Linguagens visuais na pele"]}
    >
      <div className="mb-8 max-w-3xl text-sm leading-relaxed text-graphite">
        <p>
          Que tal conhecer sobre o trabalho do Tom? Você encontrará trabalhos concluídos,
          o projeto exclusivo com os selos e ainda pode escolher uma arte autoral criada especialmente para você.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-5 lg:grid-cols-6">
        {styles.map((s, i) => (
          <div
            key={s.name}
            className="reveal group flex flex-col overflow-hidden border border-black/10 bg-white transition-all hover:border-flame hover:shadow-lg"
          >
            <div className="relative aspect-square w-full overflow-hidden bg-black/5">
              <Image
                src={s.img}
                alt={`Estilo ${s.name} por TomCash`}
                fill
                sizes="(min-width: 1024px) 16vw, (min-width: 640px) 33vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute left-2 top-2 rounded bg-black/80 px-1.5 py-0.5 text-[10px] font-bold text-flame">
                0{i + 1}
              </span>
            </div>
            <div className="p-3 text-center">
              <h3 className="font-display text-xs font-bold uppercase tracking-wider text-black group-hover:text-flame transition-colors">
                {s.name}
              </h3>
              <p className="mt-1 text-[11px] leading-tight text-graphite line-clamp-2">
                {s.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-black/10 pt-6">
        <p className="text-xs uppercase tracking-[0.1em] text-graphite">
          Quer misturar estilos ou criar algo exclusivo?
        </p>
        <div className="flex gap-3">
          <a
            href="#portfolio"
            className="border border-black px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.1em] transition-colors hover:bg-black hover:text-white"
          >
            Ver Galeria
          </a>
          <a
            href="#orcamento"
            className="bg-flame px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.1em] text-white transition-colors hover:bg-black"
          >
            Solicitar Orçamento
          </a>
        </div>
      </div>
    </Section>
  );
}
