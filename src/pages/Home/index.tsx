import { Header } from "./components/Header";
import { Products } from "./components/Products";

export function Home() {
  return (
    <main className="mt-24">
      <Header />
      <Products />
    </main>
  );
}
