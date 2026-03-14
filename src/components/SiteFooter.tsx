const SiteFooter = () => {
  return (
    <footer className="px-6 md:px-12 lg:px-20 py-10 border-t border-border">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-display text-lg tracking-tight">Joalheiro</span>
        <span className="text-xs text-muted-foreground tracking-wide">
          © {new Date().getFullYear()} — Joalheria artesanal em prata. Recife, PE.
        </span>
      </div>
    </footer>
  );
};

export default SiteFooter;
