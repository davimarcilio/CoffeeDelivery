import { Header } from "./components/Header";
import { Products } from "./components/Products";

export function Home() {
  return (
    <main className="mt-24 max-sm:w-full max-sm:flex max-sm:justify-center max-sm:items-center max-sm:flex-col">
      <Header />
      <Products />
    </main>
  );
}
