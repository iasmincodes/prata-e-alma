const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5581999999999?text=Olá! Gostaria de saber mais sobre suas joias."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 bg-foreground text-background px-4 py-3 text-xs tracking-wide hover:opacity-80 transition-opacity duration-400"
      aria-label="Conversar no WhatsApp"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"/><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"/></svg>
      Conversar
    </a>
  );
};

export default WhatsAppButton;
