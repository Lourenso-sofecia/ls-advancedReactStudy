import { BrowserRouter } from "react-router-dom";
import { AnimatedRoutes } from "./routes/AnimatedRoutes";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { useAuthStore } from "./stores/authStore";
import { useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "./stores/jobsStore";
import { useThemeStore } from "./stores/themeStore";

export default function App() {
  const { restoreSession } = useAuthStore();
  const initTheme = useThemeStore((state) => state.initTheme);


  useEffect(() => {
    restoreSession();
    initTheme();
  }, []);
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Provider store={store}>
          <AnimatedRoutes />
        </Provider>
      </BrowserRouter>
    </ErrorBoundary>
  );
}
