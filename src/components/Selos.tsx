import Image from "next/image";
import Section from "./Section";

const stamps = [
  { src: "/tomcash/IMGselo_1-KM-RFfPS.webp", title: "Selo Memória I" },
  { src: "/tomcash/IMGselo_2-GrF2VsKf.webp", title: "Selo Obra de Arte II" },
  { src: "/tomcash/IMGselo_3-BCRdbMKl.webp", title: "Selo III" },
  { src: "/tomcash/IMGselo_4-BoBdqVTv.webp", title: "Selo IV" },
  { src: "/tomcash/IMGselo_5-DoiVpO5e.webp", title: "Selo V" },
  { src: "/tomcash/IMGselo_5-Czqo08KH.webp", title: "Selo VI" },
];

export default function Selos() {
  return (
    <Section
      id="selos"
      label="Projeto Exclusivo"
      title={["Conheça meu projeto —", "Os Selos"]}
    >
      <div className="mb-8 max-w-3xl space-y-3 text-sm leading-relaxed text-black/80">
        <p className="font-display text-base font-semibold text-black">
          Tenho um projeto autoral que consiste em tatuar selos postais que remetem
          a memórias afetivas, lugares marcantes ou releituras de grandes obras de arte.
        </p>
        <p className="text-graphite">
          Cada selo é enquadrado com o picote clássico de selos colecionáveis, transformando
          a tatuagem em um registro atemporal e sofisticado sobre a pele. Você pode solicitar um selo personalizado com a sua memória ou escolher uma arte disponível!
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {stamps.map((item, index) => (
          <div
            key={index}
            className="reveal group flex flex-col items-center border border-black/15 bg-white p-2.5 transition-all hover:border-flame hover:shadow-md"
          >
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-black/5">
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="(min-width: 1024px) 16vw, (min-width: 640px) 33vw, 50vw"
                className="object-contain p-1 transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <p className="mt-2.5 font-display text-[11px] font-semibold uppercase tracking-wider text-black group-hover:text-flame transition-colors">
              {item.title}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-lg bg-[#faf8f5] border border-[#c99e67]/30 p-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="font-display text-sm font-bold uppercase text-black">
            Quer tatuar um selo exclusivo com a sua memória?
          </h4>
          <p className="text-xs text-graphite mt-1">
            Envie sua foto, viagem, momento especial ou obra de arte preferida para elaborarmos o seu selo postal.
          </p>
        </div>
        <a
          href="https://wa.me/5571989331091?text=Ol%C3%A1%2C%20tenho%20interesse%20no%20projeto%20dos%20Selos!"
          target="_blank"
          rel="noopener noreferrer"
          className="whitespace-nowrap bg-flame px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white hover:bg-black transition-colors"
        >
          Pedir meu Selo
        </a>
      </div>
    </Section>
  );
}

