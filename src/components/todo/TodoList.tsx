import { useTodoStore } from "../../stores/todoStore";

interface Props {
  items: { id: number; text: string; completed: boolean }[];
}

export function TodoList({ items }: Props) {
  const { toggleTodo, removeTodo } = useTodoStore();

  if (items.length === 0) {
    return <p className="text-center text-gray-500">Nenhuma tarefa ainda.</p>;
  }

  return (
    <ul className="space-y-2" aria-label="Lista de tarefas">
      {items.map((todo) => (
        <li
          key={todo.id}
          className="flex items-center justify-between bg-white p-3 rounded shadow"
        >
          <label className="flex-1 cursor-pointer">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
              className="mr-2"
              aria-label={`Marcar tarefa como ${todo.completed ? "incompleta" : "completa"}`}
            />
            <span className={todo.completed ? "line-through text-gray-400" : ""}>{todo.text}</span>
          </label>
          <button
            onClick={() => removeTodo(todo.id)}
            className="ml-2 text-red-500 hover:underline"
            aria-label="Remover tarefa"
          >
            Remover
          </button>
        </li>
      ))}
    </ul>
  );
}
