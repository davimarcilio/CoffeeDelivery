import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

export function DefaultLayout() {
  return (
    <div className="px-40 max-sm:px-4 bg-background">
      <Header />
      <Outlet />
    </div>
  );
}
