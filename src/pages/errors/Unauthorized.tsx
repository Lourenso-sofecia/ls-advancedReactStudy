
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { AlertTriangle } from "lucide-react";

const container = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] },
};

export function Unauthorized() {
  return (
    <motion.section
      variants={container}
      className="min-h-screen flex flex-col items-center justify-center text-center px-6"
    >
      <div className="bg-secondary rounded-full p-4 mb-6">
        <AlertTriangle className="text-primary" size={48} />
      </div>
      <h1 className="lg:text-5xl sm:text-3xl text-2xl font-bold text-primary mb-4">403 - Acesso Negado</h1>
      <p className="text-lg text-muted-foreground mb-6">
        Você não tem permissão para acessar esta página.
      </p>
      <Link
        to="/"
        className="bg-primary text-white px-5 py-2 rounded-xl shadow hover:bg-primary/90 transition"
      >
        Ir para a Home
      </Link>
    </motion.section>
  );
}
