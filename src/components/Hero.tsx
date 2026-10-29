import Photo from "./Photo";

export default function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden pb-16 pt-6 md:pb-36 md:pt-10">
      {/* Banner de citação tradicional Caduveo */}
      <div className="mx-auto max-w-7xl px-4 md:px-8 mb-8">
        <div className="border-y border-black/10 py-3.5 text-center bg-[#fafafa]">
          <p className="font-display italic text-sm md:text-base text-black/90">
            &ldquo;Um corpo sem pintura é um corpo mudo.&rdquo;
            <span className="ml-2 font-sans not-italic text-xs tracking-wider uppercase text-flame font-medium">
              — Índios Caduveos
            </span>
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="relative grid grid-cols-12 gap-3 md:gap-4">
          {/* Coluna esquerda: foto grande com trabalho real TomCash */}
          <Photo
            alt="Tatuagem artística TomCash Tattoo"
            src="/tomcash/IMG_22-CdZcJtyB.webp"
            priority
            className="col-span-7 aspect-[4/3] md:col-span-4 md:aspect-[4/3.4] shadow-md"
          />

          {/* Texto vertical */}
          <p className="col-span-1 hidden items-end justify-center md:flex">
            <span className="whitespace-nowrap text-[11px] font-medium uppercase tracking-[0.2em] [writing-mode:vertical-rl] rotate-180 text-black/70">
              Salvador Tattoo Studio · Barra
            </span>
          </p>

          {/* Centro: chamada + foto de selo autoral */}
          <div className="col-span-5 flex flex-col md:col-span-4">
            <p className="mb-3 text-right text-[11px] font-semibold uppercase tracking-[0.15em] text-flame md:mb-4 md:text-left md:text-xs">
              Arte autoral & exclusiva
            </p>
            <Photo
              alt="Projeto de Selo Autoral TomCash"
              src="/tomcash/IMGselo_5-Czqo08KH.webp"
              className="mt-auto aspect-[3/4] w-full shadow-md md:translate-y-20"
            />
          </div>

          {/* Direita: foto detalhe + botões de ação */}
          <div className="col-span-12 mt-3 flex items-end justify-between gap-4 md:col-span-3 md:mt-0 md:flex-col md:items-end">
            <Photo
              alt="Tatuagem TomCash em close"
              src="/tomcash/IMG_19-Ddz3N7IS.webp"
              className="aspect-square w-1/3 md:w-3/4 shadow-md"
            />
            <div className="flex flex-col gap-2.5 md:mt-auto md:translate-y-20 w-auto">
              <a
                href="#orcamento"
                className="bg-flame px-7 py-3 text-center text-xs font-semibold uppercase tracking-[0.15em] text-white transition-colors hover:bg-black"
              >
                Orçamento
              </a>
              <a
                href="#portfolio"
                className="border border-black px-7 py-2.5 text-center text-xs font-semibold uppercase tracking-[0.15em] text-black transition-colors hover:bg-black hover:text-white"
              >
                Ver Galeria
              </a>
            </div>
          </div>

          {/* Nome gigante estilizado sobreposto */}
          <h1 className="pointer-events-none absolute inset-x-0 top-[40%] text-center font-display text-[clamp(3.2rem,13vw,11.5rem)] font-extrabold uppercase leading-none tracking-[-0.04em] text-flame/90 select-none md:top-[44%] md:pl-[14%] md:text-left">
            TomCash
          </h1>
        </div>
      </div>
    </section>
  );
}
