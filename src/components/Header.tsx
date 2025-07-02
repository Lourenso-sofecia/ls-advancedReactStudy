import { useCallback, useState, MouseEvent } from "react";

import { Menu, X } from 'lucide-react';


type NavLink = {
  href: string;
  label: string;
};

const navLinks: NavLink[] = [
  { href: "#thisMean", label: "Início" },
  { href: "#thisnotMean", label: "Sobre" },
  { href: "#this", label: "Contato" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Event handler recebe MouseEvent do botão, tipo genérico para HTMLButtonElement
  const handleToggleMenu = useCallback(
    (e: MouseEvent<HTMLButtonElement>): void => {
      e.preventDefault();
      setIsMenuOpen((prev) => !prev);
    },
    []
  );

  // Fecha menu ao clicar em link
  const handleCloseLinkWhenClick = useCallback((): void => {
    setIsMenuOpen(false);
  }, []);

  return (
    <header className="bg-primary text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold">LSofecia</h1>

        <nav className="hidden md:flex space-x-6">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="hover:underline transition-colors duration-200"
              onClick={handleCloseLinkWhenClick}
            >
              {label}
            </a>
          ))}
        </nav>

        <button
          onClick={handleToggleMenu}
          className="md:hidden focus:outline-none"
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          type="button"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isMenuOpen && (
        <nav
          id="mobile-menu"
          className={`md:hidden container bg-primary px-4 pb-4 space-y-3 transition-max-height duration-300 overflow-hidden ${
            isMenuOpen ? "max-h-screen" : "max-h-0"
          }`}
          aria-hidden={!isMenuOpen}
        >
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="block hover:underline transition-colors duration-200"
              onClick={handleCloseLinkWhenClick}
            >
              {label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
