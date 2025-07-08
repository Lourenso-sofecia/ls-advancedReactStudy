
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";


import { fadeSlideIn, fadeSlideUp } from "../../../../animations/motionVariants";
import { JobList } from "../../../../components/job/jobList";

export function JobsPage() {
  const { weekId } = useParams();

  useEffect(() => {
    document.title = `${weekId} - DevJobs List`;
  }, [weekId]);

  return (
    <motion.main
      variants={fadeSlideIn}
      className="sm:container mx-auto  sm:px-4 py-8"
    >
      <Link
        to="/study-schedule/week-3-gerenciamento-estado"
        className="mb-4 inline-block text-primary hover:underline"
      >
        &larr; Voltar
      </Link>
      <header className="mb-6 text-center flex flex-col gap-4">
        <h1 className="text-3xl font-bold">
           DevJobs APP com REDUX
        </h1>
        <p className="text-gray-600 text-sm">
          Projeto focado em Gerenciamento de Estado Global REDUX, performance, Persistência e Acessibilidade
        </p>
      </header>
        <JobList />
    </motion.main>
  );
}
