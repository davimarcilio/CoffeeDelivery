import { MapPin, ShoppingCart } from "phosphor-react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/Logo.png";
export function Header() {
  return (
    <header className="font-Roboto flex justify-between py-8">
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
            3
          </span>
          <ShoppingCart className="text-yellow-dark" size={22} weight="fill" />
        </NavLink>
      </div>
    </header>
  );
}
