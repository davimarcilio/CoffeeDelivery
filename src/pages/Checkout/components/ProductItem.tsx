import { Trash } from "phosphor-react";
import { useContext } from "react";
import { Cart, ProductsContext } from "../../../context/ProductContext";
import { Quantity } from "../../components/Quantity";

interface ProductItemProps {
  product: Cart;
  onChangeQuantity: (value: number) => void;
}

export function ProductItem({ onChangeQuantity, product }: ProductItemProps) {
  const ProductContext = useContext(ProductsContext);
  const { removeFromCart } = ProductContext;

  function handleRemoveFromCart(product: Cart) {
    removeFromCart(product);
  }

  return (
    <section className="flex justify-between gap-5 max-sm:flex-col max-sm:items-center">
      <img
        className="w-16 h-16  min mt-4"
        src={`/CoffeeDelivery${product.image}`}
        alt={product.name}
      />
      <div className="flex flex-col my-4 max-sm:items-center gap-2 justify-center">
        <h1 className="font-Roboto max-sm:text-base text-base-subtitle">
          {product.name}
        </h1>
        <div className="flex gap-2">
          <Quantity
            product={product}
            value={product.quantity}
            onChangeQuantity={onChangeQuantity}
          />
          <button
            onClick={() => handleRemoveFromCart(product)}
            className="transition-colors px-2 gap-1 rounded-md bg-base-button text-xs flex justify-center items-center font-Roboto hover:bg-base-hover text-base-text leading-5"
            type="button"
          >
            <Trash className="text-purple" size={16} /> REMOVER
          </button>
        </div>
      </div>
      <strong className="font-Roboto text-base text-base-text font-bold my-4">
        R$ {product.price.toFixed(2)}
      </strong>
    </section>
  );
}
