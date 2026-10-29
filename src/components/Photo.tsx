import Image from "next/image";
import type { ComponentType } from "react";

type PhotoProps = {
  /** Caminho de uma foto em /public (ex.: "/fotos/hero.jpg"). Sem ele, mostra o placeholder. */
  src?: string;
  alt: string;
  /** Desenho em traço usado no placeholder. */
  art?: ComponentType<{ className?: string }>;
  /** Tom do placeholder: claro ou escuro, para variar o mosaico. */
  tone?: "dark" | "mid" | "light";
  className?: string;
  priority?: boolean;
};

const tones = {
  dark: "bg-[radial-gradient(circle_at_30%_20%,#4a4a4a_0%,#151515_70%)] text-white/70",
  mid: "bg-[radial-gradient(circle_at_70%_30%,#9a9a9a_0%,#3b3b3b_75%)] text-white/80",
  light: "bg-[radial-gradient(circle_at_40%_40%,#e9e9e9_0%,#a8a8a8_80%)] text-black/70",
};

// Foto em preto e branco. Enquanto não houver fotos reais, desenha um placeholder com granulado.
export default function Photo({ src, alt, art: Art, tone = "dark", className = "", priority }: PhotoProps) {
  return (
    <div className={`grain relative overflow-hidden ${src ? "bg-mist" : tones[tone]} ${className}`}>
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover grayscale transition-transform duration-700 hover:scale-105"
        />
      ) : (
        <>
          {Art && <Art className="absolute inset-0 m-auto h-3/4 w-3/4" />}
          <span className="sr-only">{alt}</span>
        </>
      )}
    </div>
  );
}
