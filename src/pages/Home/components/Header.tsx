import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import Cafe from "../../../assets/Cafe.png";
import { ListItem } from "./ListItem";
import Background from "../../../assets/Background.png";
export function Header() {
  return (
    <section className="flex justify-between items-center gap-14 h-[544px]">
      <img
        className="absolute left-0 w-full max-h-544pxbackground h-full"
        src={Background}
        alt=""
      />
      <div className="flex flex-col gap-16 z-20">
        <div className="flex flex-col gap-4 ">
          <h1 className="font-Baloo font-extrabold text-5xl max-w-xl">
            Encontre o café perfeito para qualquer hora do dia
          </h1>
          <p className="text-xl">
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </div>
        <div className="flex gap-10">
          <ul className="flex flex-col gap-5">
            <ListItem bgColor="bg-yellow-dark" title="Compra simples e segura">
              <ShoppingCart
                size={16}
                className="text-background"
                weight="fill"
              />
            </ListItem>
            <ListItem bgColor="bg-yellow" title="Entrega rápida e rastreada">
              <Timer size={16} className="text-background" weight="fill" />
            </ListItem>
          </ul>
          <ul className="flex flex-col gap-5">
            <ListItem
              bgColor="bg-base-text"
              title="Embalagem mantém o café intacto"
            >
              <Package size={16} className="text-background" weight="fill" />
            </ListItem>
            <ListItem
              bgColor="bg-purple"
              title="O café chega fresquinho até você"
            >
              <Coffee size={16} className="text-background" weight="fill" />
            </ListItem>
          </ul>
        </div>
      </div>
      <img src={Cafe} alt="Café" />
    </section>
  );
}
