import Photo from "./Photo";
import { Moth, Rose, Snake } from "./TattooArt";

export default function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden pb-16 pt-8 md:pb-40 md:pt-12">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="relative grid grid-cols-12 gap-3 md:gap-4">
          {/* Coluna esquerda: foto grande */}
          <Photo
            alt="Tatuador trabalhando no braço de um cliente"
            art={Rose}
            tone="dark"
            priority
            className="col-span-7 aspect-[4/3] md:col-span-4 md:aspect-[4/3.4]"
          />

          {/* Texto vertical */}
          <p className="col-span-1 hidden items-end justify-center md:flex">
            <span className="whitespace-nowrap text-[11px] font-medium uppercase tracking-[0.2em] [writing-mode:vertical-rl] rotate-180">
              Criando obras-primas
            </span>
          </p>

          {/* Centro: chamada + foto alta */}
          <div className="col-span-5 flex flex-col md:col-span-4">
            <p className="mb-3 text-right text-[11px] font-semibold uppercase tracking-[0.15em] md:mb-4 md:text-left md:text-xs">
              Sua vida em tinta
            </p>
            <Photo
              alt="Mão tatuada em close"
              art={Snake}
              tone="mid"
              className="mt-auto aspect-[3/4] w-full md:translate-y-24"
            />
          </div>

          {/* Direita: foto pequena + botão */}
          <div className="col-span-12 mt-3 flex items-end justify-between gap-4 md:col-span-3 md:mt-0 md:flex-col md:items-end">
            <Photo
              alt="Cliente mostrando tatuagem recém-feita"
              art={Moth}
              tone="light"
              className="aspect-square w-1/3 md:w-3/4"
            />
            <a
              href="#contato"
              className="bg-flame px-8 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-white transition-colors hover:bg-black md:mt-auto md:translate-y-24"
            >
              Agendar
            </a>
          </div>

          {/* Nome gigante sobreposto às fotos */}
          <h1 className="pointer-events-none absolute inset-x-0 top-[42%] text-center font-display text-[clamp(3.5rem,15vw,13rem)] font-extrabold uppercase leading-none tracking-[-0.04em] text-flame md:top-[48%] md:pl-[18%] md:text-left">
            Ousadia
          </h1>
        </div>
      </div>
    </section>
  );
}
