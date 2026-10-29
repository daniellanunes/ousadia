import Photo from "./Photo";
import Section from "./Section";
import { Eye, Skull } from "./TattooArt";

export default function About() {
  return (
    <Section
      id="sobre"
      label="Sobre"
      title={["Nosso objetivo é mudar", "a forma como você vê a tatuagem"]}
    >
      <div className="grid grid-cols-12 items-end gap-3 md:gap-4">
        <Photo alt="Tatuadora desenhando um esboço" art={Eye} tone="dark" className="reveal col-span-5 aspect-[3/4] md:col-span-3" />
        <div className="col-span-7 md:col-span-5">
          <Photo alt="Interior do estúdio" art={Skull} tone="mid" className="reveal aspect-[4/3] w-full" />
        </div>
        <p className="reveal col-span-12 text-sm leading-relaxed md:col-span-4">
          <span className="font-semibold text-flame">“Ousadia”</span> é um estúdio de
          tatuagem autoral no coração de São Paulo. Reunimos tatuadores com
          estilos diferentes — do fine line ao blackwork — com uma coisa em
          comum: tratar cada projeto como peça única. Aqui ninguém escolhe
          desenho de catálogo; a gente cria junto com você.
        </p>
      </div>
    </Section>
  );
}
