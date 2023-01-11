import { MapPin, ShoppingCart } from "phosphor-react";
import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/Logo.png";
import { ProductsContext } from "../context/ProductContext";
export function Header() {
  const ProductContext = useContext(ProductsContext);
  const { cart } = ProductContext;
  const [cartLenght, setCartLenght] = useState(cart.length);
  useEffect(() => {
    setCartLenght(cart.length);
  }, [cart]);
  return (
    <header className="font-Roboto flex justify-between py-8 top-0 z-50 w-full px-40 max-sm:px-4  fixed left-0 bg-background">
      <NavLink to={"/"}>
        <img src={Logo} alt="Coffé Delivery" />
      </NavLink>
      <div className="flex gap-3">
        <NavLink
          to={"/"}
          className="flex bg-purple-light gap-1 p-2 rounded-md justify-center items-center"
        >
          <MapPin className="text-purple " weight="fill" size={22} />
          <strong className="font-normal text-purple-dark text-sm">
            Criciúma, SC
          </strong>
        </NavLink>
        <NavLink
          to="/checkout"
          className="p-2 bg-yellow-light rounded-md flex justify-center items-center relative"
        >
          <span className="absolute flex justify-center items-center text-white px-1 -right-1 font-bold text-xs bg-yellow-dark rounded-full -top-1">
            {!!cartLenght ? cartLenght : ""}
          </span>
          <ShoppingCart className="text-yellow-dark" size={22} weight="fill" />
        </NavLink>
      </div>
    </header>
  );
}
