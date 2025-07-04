import { FormEvent, useState } from "react";
import { useTodoStore } from "../../stores/todoStore";

export function TodoForm() {
  const [text, setText] = useState("");
  const { addTodo } = useTodoStore();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText("");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-6" aria-label="Formulário de nova tarefa">
      <input
        type="text"
        placeholder="Digite uma tarefa"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="flex-1 p-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
        aria-label="Nova tarefa"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
        aria-label="Adicionar tarefa"
      >
        Adicionar
      </button>
    </form>
  );
}