import Image from "next/image";
import Section from "./Section";

const works = [
  { src: "/tomcash/IMG_1-DzSL33vw.webp", alt: "Tatuagem realizada por TomCash Tattoo 1", span: "md:col-span-2 md:row-span-2" },
  { src: "/tomcash/IMG_3-CAqXKlNU.webp", alt: "Tatuagem realizada por TomCash Tattoo 2", span: "" },
  { src: "/tomcash/IMG_4-BpWmXPlo.webp", alt: "Tatuagem realizada por TomCash Tattoo 3", span: "md:row-span-2" },
  { src: "/tomcash/IMG_5-kSviiu_O.webp", alt: "Tatuagem realizada por TomCash Tattoo 4", span: "" },
  { src: "/tomcash/IMG_6-tTrvDqcq.webp", alt: "Tatuagem realizada por TomCash Tattoo 5", span: "md:col-span-2" },
  { src: "/tomcash/IMG_7-B6qWZTSN.webp", alt: "Tatuagem realizada por TomCash Tattoo 6", span: "" },
  { src: "/tomcash/IMG_8-CuUeIMJM.webp", alt: "Tatuagem realizada por TomCash Tattoo 7", span: "" },
  { src: "/tomcash/IMG_9-WwO-LOUo.webp", alt: "Tatuagem realizada por TomCash Tattoo 8", span: "md:row-span-2" },
  { src: "/tomcash/IMG_10-BNyXj12z.webp", alt: "Tatuagem realizada por TomCash Tattoo 9", span: "" },
  { src: "/tomcash/IMG_11-Day_5IZq.webp", alt: "Tatuagem realizada por TomCash Tattoo 10", span: "md:col-span-2" },
  { src: "/tomcash/IMG_12-Dxsfue5w.webp", alt: "Tatuagem realizada por TomCash Tattoo 11", span: "" },
  { src: "/tomcash/IMG_13-D1n2Y5nI.webp", alt: "Tatuagem realizada por TomCash Tattoo 12", span: "" },
];

export default function Portfolio() {
  return (
    <Section
      id="portfolio"
      label="Galeria"
      title={["Aqui alguns trabalhos já feitos —", "Tatuagens que os clientes amaram"]}
    >
      <div className="grid auto-rows-[220px] grid-cols-2 gap-3 md:auto-rows-[250px] md:grid-cols-4 md:gap-4">
        {works.map((w, index) => (
          <div
            key={index}
            className={`reveal group relative overflow-hidden bg-[#151515] shadow-sm transition-all duration-300 hover:shadow-xl ${w.span}`}
          >
            <Image
              src={w.src}
              alt={w.alt}
              fill
              sizes="(min-width: 768px) 33vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end p-4">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-white">
                TomCash Tattoo · Barra
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-black/10 pt-6">
        <p className="text-xs text-graphite">
          Veja vídeos do processo e novas fotos em nosso perfil oficial.
        </p>
        <a
          href="https://www.instagram.com/tomcashtattoo/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-flame transition-colors hover:text-black"
        >
          Acompanhar no Instagram @tomcashtattoo →
        </a>
      </div>
    </Section>
  );
}
