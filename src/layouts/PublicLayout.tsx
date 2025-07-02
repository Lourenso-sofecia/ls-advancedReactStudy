import { Outlet } from "react-router-dom";
import { Footer, Header } from "../components";

export function PublicLayout() {
  return (
    <>
      <Header />
      <main className="container max-w-screen-lg mx-auto px-4 py-6">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
