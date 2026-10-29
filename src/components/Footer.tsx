export default function Footer() {
  return (
    <footer className="border-t border-black/10">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <p className="text-right font-display text-[clamp(2.5rem,9vw,7rem)] font-extrabold uppercase leading-none tracking-[-0.03em] text-flame">
          Sua vida em tinta
        </p>
        <div className="mt-12 grid gap-6 text-xs uppercase tracking-[0.1em] text-graphite sm:grid-cols-2 md:grid-cols-4">
          <p>
            Ousadia Tattoo Studio
            <br />
            Rua Augusta, 1500 — São Paulo
          </p>
          <p>
            <a href="https://instagram.com/" className="hover:text-flame">Instagram</a>
            <br />
            <a href="https://wa.me/5511999999999" className="hover:text-flame">WhatsApp</a>
          </p>
          <p>Ter a sáb · 11h às 20h</p>
          <p className="md:text-right">© 2026 Ousadia</p>
        </div>
      </div>
    </footer>
  );
}
