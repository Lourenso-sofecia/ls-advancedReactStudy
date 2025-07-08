import { useEffect } from "react";
import { TodoForm } from "../../../../components/todo/TodoForm";
import { TodoList } from "../../../../components/todo/TodoList";
import { useTodoStore } from "../../../../stores/todoStore";
import { motion } from "framer-motion";
import { fadeSlideUp } from "../../../../animations/motionVariants";
import { Link, useParams } from "react-router-dom";

export function TodoPage() {
  const { todos } = useTodoStore();

  const { weekId } = useParams();
  

  useEffect(() => {
    document.title = `Semana ${weekId} - To-do List`;
  }, [weekId]);

  return (
    <motion.main
      variants={fadeSlideUp}
      className="sm:container mx-auto  sm:px-4 py-8"
    >
      <Link
        to="/study-schedule/week-1-fundamentos-react"
        className="mb-4 inline-block text-primary hover:underline"
      >
        &larr; Voltar
      </Link>
      <h1 className="text-3xl font-bold text-center mb-6">To-do List</h1>
      <TodoForm />
      <TodoList items={todos} />
    </motion.main>
  );
}
