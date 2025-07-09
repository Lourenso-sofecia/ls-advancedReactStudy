import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { HardHat } from "lucide-react";

const container = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] },
};

export function UnderConstruction() {
  return (
    <motion.section
      variants={container}
      className="min-h-screen flex flex-col items-center justify-center text-center px-6"
    >
      <div className="bg-blue-100 rounded-full p-4 mb-6">
        <HardHat className="text-blue-600" size={48} />
      </div>
      <h1 className="lg:text-4xl sm:text-3xl text-2xl font-bold text-blue-700 mb-4">Página em Construção</h1>
      <p className="text-lg text-muted-foreground mb-6 max-w-md">
        Estamos trabalhando para trazer novidades em breve. Obrigado pela paciência!
      </p>
      <Link
        to="/"
        className="bg-blue-600 text-white px-5 py-2 rounded-xl shadow hover:bg-blue-500 transition"
      >
        Voltar para Home
      </Link>
    </motion.section>
  );
}
