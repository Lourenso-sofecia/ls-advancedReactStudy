import { memo } from "react";
import { StudyWeek } from "../data/studyWeeks";
import { motion } from "framer-motion";
import { fadeSlideUp, zoomIn } from "../animations/motionVariants";

interface Props {
  week: StudyWeek;
  onClick: (id: string) => void;
}

export const StudyWeekCard = memo(({ week, onClick }: Props) => {
  return (
    <motion.article
      layout
      variants={fadeSlideUp}
      className="bg-white dark:bg-gray-800 shadow-md rounded-md p-4 cursor-pointer hover:shadow-xl transition-shadow"
      onClick={() => onClick(week.id)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter") onClick(week.id);
      }}
      aria-label={`Abrir detalhes da ${week.title}`}
    >
      <h2 className="text-lg font-semibold mb-2">{week.title}</h2>
      <p className="text-sm text-gray-600 dark:text-gray-300">
        {week.tasks.length} tarefas planejadas
      </p>
    </motion.article>
  );
});
