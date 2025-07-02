import { Task } from "../data/studyWeeks";

interface Props {
  tasks: Task[];
}

export function TaskList({ tasks }: Props) {
  return (
    <table className="w-full border-collapse text-left">
      <thead>
        <tr>
          <th className="border-b border-gray-300 px-3 py-2">Dia</th>
          <th className="border-b border-gray-300 px-3 py-2">Atividade</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map(({ day, description }, i) => (
          <tr key={i} className="">
            <td className="border-b border-gray-300 px-3 py-2 font-medium">{day}</td>
            <td className="border-b border-gray-300 px-3 py-2">{description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
