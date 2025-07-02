import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ProjectList, TaskList } from "../../../components";
import { studyWeeks } from "../../../data/studyWeeks";


export function StudyWeekDetail() {
  const { weekId } = useParams<{ weekId: string }>();
  const week = studyWeeks.find((w) => w.id === weekId);

  if (!week) {
    return (
      <section className="container mx-auto p-4">
        <h2 className="text-xl font-semibold">Semana não encontrada</h2>
        <Link to="/study-schedule" className="text-primary underline">
          Voltar à agenda
        </Link>
      </section>
    );
  }

  return (
    <motion.section
      className="container mx-auto p-4"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
    >
      <Link
        to="/study-schedule"
        className="mb-4 inline-block text-primary hover:underline"
      >
        &larr; Voltar
      </Link>

      <h1 className="text-3xl font-bold mb-6">{week.title}</h1>

      <TaskList tasks={week.tasks} />

      <ProjectList projects={week.relatedProjects} />
    </motion.section>
  );
}
