
import {
  createContext,
  useState,
  useCallback,
  ReactNode,
  useMemo,
  useEffect,
} from "react";

interface CounterContextProps {
  count: number;
  previous: number | null;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

export const CounterContext = createContext<CounterContextProps | null>(null);

export function CounterProvider({ children }: { children: ReactNode }) {
  const [count, setCount] = useState(() => {
    const saved = localStorage.getItem("counter-value");
    return saved ? parseInt(saved, 10) : 0;
  });
  const [previous, setPrevious] = useState<number | null>(null);

  // Atualiza localStorage sempre que o count mudar
  useEffect(() => {
    localStorage.setItem("counter-value", String(count));
  }, [count]);

  // Simula chamada de API fictícia ao montar
  useEffect(() => {
    const fetchFakeData = async () => {
      await new Promise((r) => setTimeout(r, 500));
      console.log("🔄 API fictícia chamada com sucesso!");
    };
    fetchFakeData();
  }, []);

  const increment = useCallback(() => {
    setPrevious(count);
    setCount((prev) => prev + 1);
  }, [count]);

  const decrement = useCallback(() => {
    setPrevious(count);
    setCount((prev) => prev - 1);
  }, [count]);

  const reset = useCallback(() => {
    setPrevious(count);
    setCount(0);
  }, [count]);

  const value = useMemo(
    () => ({ count, previous, increment, decrement, reset }),
    [count, previous, increment, decrement, reset]
  );

  return (
    <CounterContext.Provider value={value}>
      {children}
    </CounterContext.Provider>
  );
}