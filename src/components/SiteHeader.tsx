import { useState } from "react";

const SiteHeader = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-none">
      <div className="flex items-center justify-between px-6 md:px-12 lg:px-20 py-5">
        <a href="#" className="font-display text-xl tracking-tight">
          Joalheiro
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            ["Coleções", "#colecoes"],
            ["Sobre", "#sobre"],
            ["Atelier", "#atelier"],
            ["Contato", "#contato"],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <div className="space-y-1.5">
            <span className={`block w-5 h-px bg-foreground transition-transform duration-300 ${open ? "rotate-45 translate-y-[3.5px]" : ""}`} />
            <span className={`block w-5 h-px bg-foreground transition-transform duration-300 ${open ? "-rotate-45 -translate-y-[3.5px]" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="md:hidden px-6 pb-6 space-y-4 bg-background">
          {[
            ["Coleções", "#colecoes"],
            ["Sobre", "#sobre"],
            ["Atelier", "#atelier"],
            ["Contato", "#contato"],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              onClick={() => setOpen(false)}
              className="block text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default SiteHeader;
