import { BrowserRouter } from "react-router-dom";
import { AnimatedRoutes } from "./routes/AnimatedRoutes";
import { ErrorBoundary } from "./components/ErrorBoundary";

export default function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </ErrorBoundary>
  );
}
