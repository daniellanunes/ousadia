import Image from "next/image";
import type { ComponentType } from "react";

type PhotoProps = {
  /** Caminho de uma foto em /public (ex.: "/tomcash/IMG_1.webp") */
  src?: string;
  alt: string;
  /** Desenho em traço usado no placeholder se não houver foto. */
  art?: ComponentType<{ className?: string }>;
  /** Tom do placeholder: claro ou escuro, para variar o mosaico. */
  tone?: "dark" | "mid" | "light";
  className?: string;
  priority?: boolean;
  grayscale?: boolean;
};

const tones = {
  dark: "bg-[radial-gradient(circle_at_30%_20%,#333333_0%,#151515_70%)] text-white/70",
  mid: "bg-[radial-gradient(circle_at_70%_30%,#555555_0%,#262626_75%)] text-white/80",
  light: "bg-[radial-gradient(circle_at_40%_40%,#e9e9e9_0%,#a8a8a8_80%)] text-black/70",
};

export default function Photo({
  src,
  alt,
  art: Art,
  tone = "dark",
  className = "",
  priority,
  grayscale = false,
}: PhotoProps) {
  return (
    <div className={`grain relative overflow-hidden ${src ? "bg-[#181818]" : tones[tone]} ${className}`}>
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(min-width: 768px) 50vw, 100vw"
          className={`object-cover transition-all duration-700 hover:scale-105 ${
            grayscale ? "grayscale hover:grayscale-0" : ""
          }`}
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
