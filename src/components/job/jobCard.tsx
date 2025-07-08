
import { toggleFavorite } from "../../services/favoritesSlice";
import { Job } from "../../@types/job";
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import { StarIcon } from "lucide-react";

interface Props {
  job: Job;
}

export function JobCard({ job }: Props) {
  const dispatch = useAppDispatch();
  const favorites = useAppSelector((state) => state.favorites.ids);
  const isFavorite = favorites.includes(job.id);

  return (
    <div className="border dark:border-gray-700 p-4 rounded-md shadow-md bg-white dark:bg-gray-900">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-semibold">{job.title}</h2>
        <button
          onClick={() => dispatch(toggleFavorite(job.id))}
          aria-pressed={isFavorite}
          aria-label={isFavorite ? "Remover dos favoritos" : "Adicionar aos favoritos"}
          className="text-yellow-500"
        >
          <StarIcon className={isFavorite ? "text-yellow-500  w-4" : "text-gray-400 w-4"} />
        </button>
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-300">{job.company}</p>
      <p className="text-sm">📍 {job.location}</p>
      <div className="flex gap-2 mt-2 flex-wrap">
        {job.technologies.map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded dark:bg-blue-800 dark:text-white"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
