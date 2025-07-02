import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Bug } from "lucide-react";
import { fadeSlideUp } from "../../animations/motionVariants";

const container = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.95 },
  transition: { duration: 0.4 },
};

export function InternalError() {
  return (
    <motion.section
      variants={fadeSlideUp}
      className="min-h-screen flex flex-col items-center justify-center text-center px-6"
    >
      <div className="bg-secondary rounded-full p-4 mb-6">
        <Bug className="text-primary" size={48} />
      </div>
      <h1 className="text-5xl font-bold text-destructive mb-4">500</h1>
      <p className="text-lg text-muted-foreground mb-6">
        Ocorreu um erro interno. Tente novamente mais tarde ou entre em contato com o suporte.
      </p>
      <Link
        to="/"
        className="bg-primary text-white px-5 py-2 rounded-xl shadow hover:bg-primary/90 transition"
      >
        Voltar para a Home
      </Link>
    </motion.section>
  );
}
