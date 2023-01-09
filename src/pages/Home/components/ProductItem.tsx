import { Minus, Plus, ShoppingCartSimple } from "phosphor-react";
import LogoTeste from "../../../../public/Type=Mochaccino.png";
import { Product } from "../../../context/ProductContext";
import "./ProductItem.css";
interface ProductProps {
  product: Product;
}

export function ProductItem({ product }: ProductProps) {
  const { name, description, price, types } = product;
  const treatedPrice = price.toString().replace(".", ",") + "0";
  return (
    <section className="flex flex-col justify-center items-center bg-base-card font-Roboto text-center rounded-md rounded-tr-36 rounded-bl-36 p-6">
      <img className="-mt-4" src={LogoTeste} alt="Expresso Tracicional" />
      <div className="flex gap-1">
        {types.map((type) => (
          <span className="bg-yellow-light text-yellow-dark rounded-full font-bold text-xxs py-1 px-2 mt-3">
            {type.type}
          </span>
        ))}
      </div>
      <h1 className="mt-4 font-Baloo font-bold text-xl text-base-subtitle">
        {name}
      </h1>
      <p className="text-base-label font-Roboto text-sm mt-2">{description}</p>
      <form className="mt-8 flex justify-between items-center w-full">
        <p className="font-Roboto text-sm text-base-text">
          R${" "}
          <strong className="font-Baloo font-extrabold text-2xl ">
            {treatedPrice}
          </strong>
        </p>
        <div className="flex gap-2 justify-center items-center">
          <div className="flex justify-center items-center relative">
            <button className="absolute left-2" type="button">
              <Plus size={14} className="text-purple" />
            </button>
            <input
              placeholder="1"
              className="text-center px-6 w-16 py-2 rounded-md bg-base-button"
              type="number"
            />
            <button className="absolute right-2" type="button">
              <Minus className="text-purple" />
            </button>
          </div>
          <button
            className="text-background bg-purple-dark p-2 rounded-md"
            type="submit"
          >
            <ShoppingCartSimple size={22} weight="fill" />
          </button>
        </div>
      </form>
    </section>
  );
}
