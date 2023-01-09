import { useContext } from "react";
import { ProductsContext } from "../../../context/ProductContext";
import { ProductItem } from "./ProductItem";

export function Products() {
  const { products } = useContext(ProductsContext);
  return (
    <div className="flex flex-col gap-14 my-8">
      <h1 className="font-extrabold text-3xl font-Baloo ">Nossos Cafés</h1>
      <div className="grid grid-cols-4 gap-10">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
