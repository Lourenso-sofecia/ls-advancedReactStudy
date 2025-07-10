import { Outlet } from "react-router-dom";
import { Footer, Header } from "../components";

export function PrivateLayout() {
  return (
    <>
      <Header />
      <main className="container max-w-screen-lg mx-auto  py-6 dark:bg-slate-900 bg-white">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
