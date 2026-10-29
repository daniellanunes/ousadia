import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-[#121212] text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 border-b border-white/10 pb-12">
          <div className="flex items-center gap-3">
            <div className="relative h-12 w-12 overflow-hidden rounded-full border border-white/20 bg-black">
              <Image
                src="/tomcash/logo1-DkOgUzll.webp"
                alt="TomCash Logo"
                fill
                className="object-contain p-1"
              />
            </div>
            <div>
              <p className="font-display text-2xl font-bold uppercase tracking-tight text-white">
                TomCash<span className="text-flame"> Tattoo</span>
              </p>
              <p className="text-xs text-white/60 tracking-wider uppercase">
                Salvador Tattoo Studio · Barra Center
              </p>
            </div>
          </div>

          <p className="font-display text-[clamp(1.8rem,5vw,3.5rem)] font-extrabold uppercase leading-none tracking-[-0.03em] text-flame md:text-right">
            Sua arte na pele
          </p>
        </div>

        <div className="mt-10 grid gap-8 text-xs uppercase tracking-[0.1em] text-white/70 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <h5 className="font-bold text-white mb-2">Localização</h5>
            <p className="leading-relaxed">
              Centro Comercial Barra Center
              <br />
              Av. Oceânica, 551 — Sala 106
              <br />
              Barra, Salvador - BA
            </p>
          </div>

          <div>
            <h5 className="font-bold text-white mb-2">Redes Oficiais</h5>
            <p className="space-y-1">
              <a
                href="https://www.instagram.com/tomcashtattoo/"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-flame transition-colors"
              >
                Instagram: @tomcashtattoo
              </a>
              <a
                href="https://www.tiktok.com/@tomcashtattoo?_t=ZM-8unKGzLw2Lv&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-flame transition-colors"
              >
                TikTok: @tomcashtattoo
              </a>
            </p>
          </div>

          <div>
            <h5 className="font-bold text-white mb-2">Atendimento</h5>
            <p className="leading-relaxed">
              Seg a Sex: 8h às 23h30
              <br />
              Sáb e Dom: 8h às 22h
              <br />
              <a
                href="https://wa.me/5571989331091"
                target="_blank"
                rel="noopener noreferrer"
                className="text-flame hover:underline font-semibold"
              >
                WhatsApp: (71) 98933-1091
              </a>
            </p>
          </div>

          <div className="md:text-right">
            <h5 className="font-bold text-white mb-2">TomCash Studio</h5>
            <p className="leading-relaxed">
              Copyright © 2025 TomCash Tattoo
              <br />
              <span className="text-white/40 normal-case">
                Todos os direitos reservados.
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
