import { memo } from "react";
import { useCounter } from "../../hooks/useCounter";

export const Counter = memo(() => {
  const { count, previous, increment, decrement, reset } = useCounter();

  return (
    <section
      className="flex flex-col items-center gap-4"
      aria-labelledby="counter-heading"
    >
      <h2 id="counter-heading" className="sr-only">Contador</h2>

      <div className="text-center">
        <output
          className="text-4xl font-bold"
          aria-live="polite"
          aria-atomic="true"
        >
          {count}
        </output>
        {previous !== null && (
          <p className="text-sm text-gray-500">
            Valor anterior: {previous}
          </p>
        )}
      </div>

      <div className="flex gap-2">
        <button
          onClick={increment}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400"
        >
          +1
        </button>
        <button
          onClick={decrement}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400"
        >
          -1
        </button>
        <button
          onClick={reset}
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300"
        >
          Resetar
        </button>
      </div>
    </section>
  );
});
