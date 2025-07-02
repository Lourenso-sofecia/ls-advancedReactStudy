import { Project } from "../data/studyWeeks";

interface Props {
  projects?: Project[];
}

export function ProjectList({ projects }: Props) {
  if (!projects || projects.length === 0) return null;

  return (
    <section className="mt-8">
      <h3 className="text-xl font-semibold mb-4">Projetos Relacionados</h3>
      <ul className="space-y-3 list-disc list-inside">
        {projects.map(({ id, title, description, link }) => (
          <li key={id}>
            <strong>{title}</strong> — {description}{" "}
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline hover:text-secondary"
              >
                Ver Projeto
              </a>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
