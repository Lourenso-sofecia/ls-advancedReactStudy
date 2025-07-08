import { useEffect, useMemo, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import { JobCard } from "./jobCard";
import { fetchJobs } from "../../services/jobsSlice";
import { Job } from "../../@types/job";
import { Skeleton } from "..";

export function JobList() {
  const dispatch = useAppDispatch();
  const favorites = useAppSelector((state) => state.favorites.ids);
  const { items: jobs, status } = useAppSelector((state) => state.jobs);
  const [searchTech, setSearchTech] = useState("");
  const [searchLoc, setSearchLoc] = useState("");

  useEffect(() => {
    if (status === "idle") dispatch(fetchJobs());
  }, [dispatch, status]);

  const filtered = useMemo(
    () =>
      jobs.filter((job: Job) => {
        const techMatch =
          searchTech === "" ||
          job.technologies.some((t) =>
            t.toLowerCase().includes(searchTech.toLowerCase())
          );
        const locMatch =
          searchLoc === "" ||
          job.location.toLowerCase().includes(searchLoc.toLowerCase());
        return techMatch && locMatch;
      }),
    [jobs, searchTech, searchLoc]
  );
  if (status === "loading") {
    return (
      <div className="container mx-auto p-4">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 10}).map((_, i) => (
            <Skeleton key={i} className="h-24" />
          ))}
        </div>
      </div>
    );
  }
  if (status === "failed") {
    return (
      <div className="container mx-auto p-4">
        <p className="text-red-600">
          Erro ao carregar as vagas. Tente novamente mais tarde.
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <label htmlFor="filter-tech" className="sr-only">
          Filtrar por tecnologia
        </label>
        <input
          id="filter-tech"
          type="text"
          placeholder="Filtrar por tecnologia..."
          className="border p-2 rounded w-full"
          value={searchTech}
          onChange={(e) => setSearchTech(e.target.value)}
        />
        <label htmlFor="filter-loc" className="sr-only">
          Filtrar por local
        </label>
        <input
          id="filter-loc"
          type="text"
          placeholder="Filtrar por local..."
          className="border p-2 rounded w-full"
          value={searchLoc}
          onChange={(e) => setSearchLoc(e.target.value)}
        />
      </div>

      {filtered.length === 0 && <p>Nenhuma vaga encontrada.</p>}

      {filtered.length !== 0 && favorites.length !== 0 && (
        <p className="text-green-600 my-2" role="status" aria-live="polite">
          {favorites.length} vaga(s) favoritada(s)
        </p>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((job: Job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
}
