import { BrowserRouter } from "react-router-dom";
import { AnimatedRoutes } from "./routes/AnimatedRoutes";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { useAuthStore } from "./stores/authStore";
import { useEffect } from "react";

export default function App() {
  const { restoreSession } = useAuthStore();

  useEffect(() => {
    restoreSession();
  }, []);
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </ErrorBoundary>
  );
}
