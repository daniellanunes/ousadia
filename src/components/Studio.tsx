import Image from "next/image";
import Section from "./Section";

const studioPhotos = [
  { src: "/tomcash/IMG_4866-pfgN8ksh.webp", alt: "Ambiente e vista do Salvador Tattoo Studio" },
  { src: "/tomcash/IMG_4872-Bg8Wb1Af.webp", alt: "Bancada e estrutura profissional de alto padrão" },
  { src: "/tomcash/IMG_4875-DY9SpWJU.webp", alt: "Espaço acolhedor e climatizado na Barra" },
];

export default function Studio() {
  return (
    <Section
      id="estudio"
      label="O Espaço"
      title={["Salvador Tattoo Studio —", "Um lugar seguro, confortável e cheio de estilo"]}
    >
      <div className="grid grid-cols-12 items-center gap-6 md:gap-10">
        <div className="reveal col-span-12 lg:col-span-6 space-y-4 text-sm leading-relaxed text-black/85">
          <p className="font-display text-base font-semibold text-black">
            O <span className="text-flame">Salvador Tattoo Studio</span> é um estúdio que fundei com
            outros profissionais apaixonados pela arte da tatuagem.
          </p>
          <p>
            Localizado na Barra, um dos bairros mais icônicos de Salvador, com vista privilegiada
            para o mar e o Farol — um verdadeiro cartão-postal da cidade da Bahia.
          </p>
          <p>
            O estúdio foi pensado para oferecer uma experiência completa, unindo excelência artística,
            conforto e bem-estar. Cada detalhe do espaço foi projetado para acolher com cuidado,
            com ambiente climatizado, iluminação natural, vista inspiradora e estrutura profissional de alto padrão.
          </p>
          <p>
            Nosso compromisso é garantir não só uma tatuagem de qualidade técnica e artística impecável,
            mas também um momento agradável, seguro e inesquecível para quem nos visita.
          </p>
          <div className="border border-black/15 bg-[#fafafa] p-4 text-xs">
            <span className="font-semibold uppercase tracking-wider text-black block mb-1">
              Endereço:
            </span>
            Centro Comercial Barra Center — Av. Oceânica, 551, sala 106 — Barra, Salvador - BA, CEP 40140-080
          </div>
        </div>

        {/* Galeria de fotos do estúdio */}
        <div className="reveal col-span-12 lg:col-span-6 space-y-3">
          <div className="relative aspect-[16/10] w-full overflow-hidden shadow-lg border border-black/10">
            <Image
              src={studioPhotos[0].src}
              alt={studioPhotos[0].alt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            {studioPhotos.slice(1).map((p, idx) => (
              <div
                key={idx}
                className="relative aspect-[4/3] w-full overflow-hidden shadow-md border border-black/10"
              >
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

