import { useCallback, useState, MouseEvent } from "react";

import { Menu, X } from 'lucide-react';

import { useAuthStore } from "../stores/authStore";
import { useNavigate } from "react-router-dom";


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
  const { user, logout } = useAuthStore();

  const navigate = useNavigate();

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

  const handleLoginRedirect = () => {
    navigate("/login");
    setIsMenuOpen(false);
  };

  const handleLoutRedirect = () => {
    logout();
    navigate("/login");
    setIsMenuOpen(false);
  };


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

          {user ? (
            <>
              <span className="ml-4 text-sm italic">Olá, {user.name}</span>
              <button
                onClick={handleLoutRedirect}
                className="ml-2 px-3 py-1 bg-white text-primary rounded hover:bg-gray-100 transition"
              >
                Sair
              </button>
            </>
          ) : (
            <button
              onClick={handleLoginRedirect}
              className="ml-2 px-4 py-1 bg-white text-primary rounded hover:bg-gray-100 transition"
            >
              Login
            </button>
          )}

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

          {user ? (
            <div className="mt-4 flex flex-col space-y-2">
              <span className="text-sm">Olá, {user.name}</span>
              <button
                onClick={handleLoutRedirect}
                className="px-3 py-2 bg-white text-primary rounded hover:bg-gray-100 transition"
              >
                Sair
              </button>
            </div>
          ) : (
            <button
              onClick={handleLoginRedirect}
              className="w-full px-3 py-2 bg-white text-primary rounded hover:bg-gray-100 transition"
            >
              Login
            </button>
          )}
        </nav>
      )}
    </header>
  );
}
