import { motion } from "framer-motion";
import { fadeSlideUp } from "../../../animations/motionVariants";
import { useEffect } from "react";
import { cards } from "../../../data/cardsTailwind";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function CardTailwindPage() {
  useEffect(() => {
    document.title = `Card - LS Advanced Study`;
  }, []);

  return (
    <main className="sm:container mx-auto sm:p-4 ">
      <Link
        to="/study-schedule/week-5-tailwind-css"
        className="mb-4 inline-block text-primary hover:underline"
      >
        &larr; Voltar
      </Link>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            className={`rounded-2xl shadow-xl p-6 text-white ${card.color} flex flex-col justify-between`}
          >
            <div className="text-5xl mb-4">{card.icon}</div>
            <h2 className="text-xl font-semibold mb-1">{card.title}</h2>
            <p className="text-sm text-white/90 mb-4">{card.desc}</p>
            <button
              aria-label="Acessar"
              className="flex items-center gap-1 text-white/80 hover:text-white transition"
            >
                <Link to={card.link} className="flex items-center justify-center gap-1">
                    Acessar &rarr;
                </Link>
            </button>
          </motion.div>
        ))}
      </section>
    </main>
  );
}
