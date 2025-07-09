import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { fadeSlideUp } from "../../../animations/motionVariants";
import { useEffect } from "react";

export function Dashboard() {

  const navigate = useNavigate();

  function handleOpenWeek() {
    navigate("/study-schedule");
  }
  function handleOpenProgress() {
    navigate("/under-construction");
  }
  useEffect(() => {
      document.title = `Dashboad - LS Advanced Study`;
    }, []);

  return (
    <motion.section variants={fadeSlideUp} className="container max-w-container mx-auto py-10">
      <h2 className="text-3xl font-semibold text-primary mb-6">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <button onClick={handleOpenProgress}  type="button" className="bg-white shadow p-6 rounded-xl flex flex-col items-start">
          <h3 className="text-xl font-semibold mb-2">Progresso</h3>
          <p className="text-gray-600">Você completou 75% do curso.</p>
        </button>
        <button onClick={handleOpenWeek} type="button" className="bg-white shadow p-6 rounded-xl flex flex-col items-start">
          <h3 className="text-xl font-semibold mb-2">Próximos passos</h3>
          <p className="text-gray-600">Estude o módulo sobre performance.</p>
        </button>
      </div>
    </motion.section>
  );
}
