import { useMemo } from "react";

export default function TabOne () {
  const heavyList = useMemo(() => {
    return Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`);
  }, []);

  return (
    <ul className="grid sm:grid-cols-2 grid-cols-1 gap-2">
      {heavyList.map((item) => (
        <li key={item} className="p-2 bg-white dark:bg-slate-700 rounded shadow">
          {item}
        </li>
      ))}
    </ul>
  );
};
