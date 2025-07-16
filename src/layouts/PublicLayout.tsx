import { Outlet } from "react-router-dom";
import { Footer, Header } from "../components";

export function PublicLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-slate-900">
      <Header />
      <main className="flex-grow container max-w-screen-lg mx-auto py-6">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
