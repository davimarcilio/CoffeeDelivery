import { MapPin, ShoppingCart } from "phosphor-react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/Logo.png";
export function Header() {
  return (
    <header className="font-Roboto flex justify-between py-8">
      <img src={Logo} alt="Coffé Delivery" />
      <div className="flex gap-3">
        <span className="flex bg-purple-light gap-1 p-2 rounded-md justify-center items-center">
          <MapPin className="text-purple " weight="fill" size={22} />
          <strong className="font-normal text-purple-dark text-sm">
            Criciúma, SC
          </strong>
        </span>
        <NavLink
          to="/checkout"
          className="p-2 bg-yellow-light rounded-md flex justify-center items-center"
        >
          <ShoppingCart className="text-yellow-dark" size={22} weight="fill" />
        </NavLink>
      </div>
    </header>
  );
}
