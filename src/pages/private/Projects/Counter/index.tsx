
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";

import { CounterProvider } from "../../../../context/CounterContext";
import { fadeSlideUp } from "../../../../animations/motionVariants";
import { Counter } from "../../../../components/counter/Counter";

export function CounterPage() {
  const { weekId } = useParams();

  useEffect(() => {
    document.title = `${weekId} - Contador com Context`;
  }, [weekId]);

  return (
    <motion.main
      variants={fadeSlideUp}
      className="container mx-auto max-w-2xl px-4 py-8"
    >
      <Link
        to="/study-schedule/week-2-hooks-avancados"
        className="mb-4 inline-block text-primary hover:underline"
      >
        &larr; Voltar
      </Link>
      <header className="mb-6 text-center flex flex-col gap-4">
        <h1 className="text-3xl font-bold">
           Contador com Context API
        </h1>
        <p className="text-gray-600 text-sm">
          Projeto focado em Hooks, Context, Persistência e Acessibilidade
        </p>
      </header>

      <CounterProvider>
        <Counter />
      </CounterProvider>
    </motion.main>
  );
}
