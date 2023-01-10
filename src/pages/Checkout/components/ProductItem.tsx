import { Minus, Plus, Trash } from "phosphor-react";
import LogoTeste from "../../../../public/Type=Americano.png";
import { Quantity } from "../../components/Quantity";

export function ProductItem() {
  return (
    <section className="flex justify-between gap-5">
      <img className="w-16 h-16" src={LogoTeste} alt="" />
      <div className="flex flex-col gap-2 justify-center">
        <h1 className="font-Roboto text-base-subtitle">Expresso Tradicional</h1>
        <div className="flex gap-2">
          <Quantity />
          <button
            className="transition-colors px-2 gap-1 rounded-md bg-base-button text-xs flex justify-center items-center font-Roboto hover:bg-base-hover text-base-text leading-5"
            type="button"
          >
            <Trash className="text-purple" size={16} /> REMOVER
          </button>
        </div>
      </div>
      <strong className="font-Roboto text-base-text font-bold">R$ 9,90</strong>
    </section>
  );
}
