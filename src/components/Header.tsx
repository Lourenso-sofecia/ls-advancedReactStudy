
export function Header() {
  return (
    <header className="bg-primary text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold">LSofecia</h1>
        <nav className="space-x-4 hidden md:block">
          <a href="#thisMean" className="hover:underline">Início</a>
          <a href="#thisnotMean" className="hover:underline">Sobre</a>
          <a href="#this" className="hover:underline">Contato</a>
        </nav>
      </div>
    </header>
  );
}

