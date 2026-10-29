import Photo from "./Photo";
import Section from "./Section";

export default function About() {
  return (
    <Section
      id="sobre"
      label="O Artista"
      title={["Quem é o Tatuador —", "TomCash Tattoo"]}
    >
      <div className="grid grid-cols-12 items-center gap-6 md:gap-8">
        {/* Foto 1 do Tom */}
        <div className="reveal col-span-12 md:col-span-5">
          <Photo
            alt="Tom tatuando no estúdio"
            src="/tomcash/airton1-BB91Tj_f.webp"
            className="aspect-[3/4] w-full shadow-lg"
          />
        </div>

        {/* Textos de apresentação */}
        <div className="reveal col-span-12 md:col-span-7 space-y-4 text-sm leading-relaxed text-black/85">
          <p className="font-display text-lg font-semibold text-black leading-snug">
            Sou co-proprietário do estúdio{" "}
            <span className="text-flame">Salvador Tattoo Studio</span> e atuo como tatuador
            há anos, unindo formação artística sólida e sensibilidade estética.
          </p>
          <p>
            Minha trajetória profissional sempre foi pautada pela busca de autenticidade
            e qualidade em cada trabalho. Acredito que tatuar é também escutar, entender
            histórias e transformar sentimentos em traços e cores permanentes.
          </p>
          <p>
            Na tatuagem, sou fascinado pela tradução colocada na pele da minha técnica com
            o pensamento do outro. Existe algo poderoso nessa troca: onde eu posso sintetizar
            algo pensado por alguém e traduzir isso em algo feito especialmente para ela.
          </p>
          <div className="border-l-2 border-flame pl-4 py-1 italic bg-[#f9f9f9] text-black/80">
            &ldquo;Utilizo técnicas exclusivas que desenvolvi ao longo do tempo, como sobreposições
            sutis de linhas para criar texturas delicadas, sombras rasteladas que remetem à densidade
            da tinta a óleo, e a fusão entre traço fino e pontilhismo para dar leveza a composições mais densas.&rdquo;
          </div>
          <p className="text-graphite text-xs">
            Todo o processo é feito respeitando o tempo e o conforto de cada pessoa, com pausas
            sempre que necessário. A experiência precisa ser leve e segura — tanto física quanto emocionalmente.
          </p>
        </div>
      </div>

      {/* Bloco 2 com a segunda foto e filosofia artística */}
      <div className="mt-12 grid grid-cols-12 items-center gap-6 md:gap-8 border-t border-black/10 pt-10">
        <div className="reveal col-span-12 md:col-span-7 order-2 md:order-1 space-y-4 text-sm leading-relaxed text-black/85">
          <h3 className="font-display text-base font-bold uppercase tracking-wide text-black">
            Linguagem Visual & Expressão
          </h3>
          <p>
            Trabalho com uma variedade de estilos com os quais me identifico profundamente — entre eles,{" "}
            <strong>boldline</strong>, <strong>old school</strong>, traços inspirados em{" "}
            <strong>animes</strong> e <strong>desenhos autorais</strong>.
          </p>
          <p>
            Também exploramos misturas criativas de estilos, como realismo com elementos gráficos ou traços
            minimalistas combinados com texturas orgânicas, o que permite entregar tatuagens verdadeiramente únicas.
          </p>
          <p>
            Gosto especialmente de usar cor como se estivesse pintando um quadro com tinta a óleo — com profundidade,
            textura e intenção. Essa diversidade permite que cada pessoa encontre um estilo que converse com sua
            identidade e história — sempre com acompanhamento técnico e artístico especializado.
          </p>
          <p className="font-medium text-black">
            Mais do que estética, cada tatuagem pode ser um gesto de afirmação, uma escolha que carrega memória,
            sentimento ou até mesmo um posicionamento político e social. Tatuar é transformar pensamento em imagem,
            ideia em presença viva sobre a pele.
          </p>
        </div>

        <div className="reveal col-span-12 md:col-span-5 order-1 md:order-2">
          <Photo
            alt="Tom preparando a arte da tatuagem"
            src="/tomcash/airton2-KCv7lYBx.webp"
            className="aspect-[4/3] w-full shadow-lg"
          />
        </div>
      </div>
    </Section>
  );
}
