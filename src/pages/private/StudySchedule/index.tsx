import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import { studyWeeks } from "../../../data/studyWeeks";
import { Skeleton, StudyWeekCard } from "../../../components";
import { fadeSlideIn, fadeSlideUp } from "../../../animations/motionVariants";

export function StudySchedule() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3200);
    return () => clearTimeout(timer);
  }, []);

  function handleOpenWeek(id: string) {
    navigate(`/study-schedule/${id}`);
  }

  return (
    <motion.section variants={fadeSlideUp} className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Agenda Semanal de Estudos</h1>
      {loading ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: studyWeeks?.length }).map((_, i) => (
            <Skeleton key={i} className="h-24" />
          ))}
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {studyWeeks.map((week) => (
            <StudyWeekCard key={week.id} week={week} onClick={handleOpenWeek} />
          ))}
        </div>
      )}
    </motion.section>
  );
}
