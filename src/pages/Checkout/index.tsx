import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "phosphor-react";

import { Card } from "./components/Card";
import { Input } from "./components/Input";
import { PaymentMethod } from "./components/PaymentMethod";
import { ProductItem } from "./components/ProductItem";
import cep from "cep-promise";
import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../../context/ProductContext";
import { NavLink } from "react-router-dom";

export function Checkout() {
  const [CEP, setCEP] = useState("");
  const CartProducts = useContext(ProductsContext);
  const { cart, address, setAddressContext } = CartProducts;
  const [complement, setComplement] = useState(address.complement || "");
  const [number, setNumber] = useState(address.number || "");

  useEffect(() => {
    if (complement !== "" || number !== "") {
      setAddressContext({
        ...address,
        complement,
        number,
      });
    }
  }, [complement, number]);

  useEffect(() => {
    async function getAddress(cepStr: string) {
      const response = await cep(cepStr);
      setAddressContext({
        ...response,
        complement,
        number,
      });
    }
    if (!!CEP) {
      const interval = setInterval(() => {
        return getAddress(CEP.replace("-", ""));
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [CEP]);

  const [quantity, setQuantity] = useState(1);
  const [treatedTotalItemsPriceOnCart, setTreatedTotalItemsPriceOnCart] =
    useState("");

  const [
    treatedTotalItemsPriceOnCartWithDestination,
    setTreatedTotalItemsPriceOnCartWithDestination,
  ] = useState("");

  function onChangeQuantity(quantity: number) {
    setQuantity(quantity);
  }

  useEffect(() => {
    if (cart.length > 0) {
      const allCartPrices = cart.map(
        (product) => product.price * product.quantity
      );
      const totalPriceOnCart = allCartPrices.reduce(
        (product, currentValue) => product + currentValue
      );
      const treatedTotalPriceOnCart = totalPriceOnCart
        .toFixed(2)
        .replace(".", ",");
      const treatedTotalPriceOnCartWithDestination = totalPriceOnCart + 4.0;
      setTreatedTotalItemsPriceOnCart(treatedTotalPriceOnCart);
      setTreatedTotalItemsPriceOnCartWithDestination(
        treatedTotalPriceOnCartWithDestination.toFixed(2).replace(".", ",")
      );
    }
  }, [cart]);

  return (
    <form className="flex gap-8 justify-between mb-4 mt-24">
      <div className="flex flex-col gap-3 flex-1">
        <h1 className="font-bold font-Baloo text-lg">Complete seu pedido</h1>
        <Card>
          <div className="flex gap-2">
            <MapPinLine className="text-yellow-dark" size={22} />
            <div>
              <h1 className="font-Roboto text-base-subtitle">
                Endereço de Entrega
              </h1>
              <p className="text-sm font-Roboto text-base-text">
                Informe o endereço onde deseja receber seu pedido
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <Input
              required
              onChange={(e) => setCEP(e.currentTarget.value)}
              value={address.cep}
              className="w-200px"
              placeholder="CEP"
            />
            <Input placeholder="Rua" value={address.street} />
            <div className="flex gap-3">
              <Input
                required
                onChange={(e) => setNumber(e.currentTarget.value)}
                value={address.number}
                className="w-200px"
                placeholder="Número"
              />
              <div className="flex justify-center items-center flex-1 w-full relative">
                <label
                  className="absolute right-3 text-base-label text-xs italic font-Roboto "
                  htmlFor="complemento"
                >
                  Opcional
                </label>
                <Input
                  onChange={(e) => setComplement(e.currentTarget.value)}
                  value={address.complement}
                  name="complemento"
                  id="complemento"
                  placeholder="Complemento"
                  className="flex-1"
                />
              </div>
            </div>
            <div className="flex gap-3">
              <Input
                required
                value={address.neighborhood}
                className="w-200px"
                placeholder="Bairro"
              />
              <Input
                required
                value={address.city}
                className="flex-1 "
                placeholder="Cidade"
              />
              <Input
                required
                value={address.state}
                className="w-60px"
                placeholder="UF"
              />
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex gap-2">
            <CurrencyDollar className="text-purple" size={22} />
            <div className="flex flex-col">
              <h1 className="font-Roboto text-base-subtitle">Pagamento</h1>
              <p className="text-sm font-Roboto text-base-text">
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center gap-3">
            <PaymentMethod
              icon={<CreditCard className="text-purple" size={16} />}
              labelText="CARTÃO DE CRÉDITO"
              type="credit"
            />

            <PaymentMethod
              icon={<Bank className="text-purple" size={16} />}
              labelText="CARTÃO DE DÉBITO"
              type="debit"
            />

            <PaymentMethod
              icon={<Money className="text-purple" size={16} />}
              labelText="DINHEIRO"
              type="money"
            />
          </div>
        </Card>
      </div>
      <div className="flex flex-col gap-3">
        <h1 className="font-bold font-Baloo text-lg">Cafés selecionados</h1>

        <Card borderRadius="rounded-tr-36 rounded-bl-36">
          {cart.map((product) => {
            return (
              <ProductItem
                key={product.id}
                product={product}
                onChangeQuantity={onChangeQuantity}
              />
            );
          })}
          {cart.length > 0 ? (
            <ul className="flex flex-col gap-3">
              <li className="text-base-text font-Roboto text-sm flex justify-between">
                Total de itens
                <strong className="text-base font-normal">
                  R$ {treatedTotalItemsPriceOnCart}
                </strong>
              </li>
              <li className="text-base-text font-Roboto text-sm flex justify-between">
                Entrega
                <strong className="text-base font-normal">R$ 4,00</strong>
              </li>
              <li className="text-base-subtitle font-bold font-Roboto text-xl flex justify-between">
                Total
                <strong className="text-base-subtitle text-xl">
                  R$ {treatedTotalItemsPriceOnCartWithDestination}
                </strong>
              </li>
            </ul>
          ) : (
            <h1 className="font-Roboto text-xl font-bold text-base-subtitle">
              Seu carrinho está vazio
            </h1>
          )}
          {cart.length > 0 ? (
            <button
              className="transition-colors bg-yellow hover:bg-yellow-dark  py-3 rounded-md text-white font-bold text-sm"
              type="submit"
            >
              CONFIRMAR PEDIDO
            </button>
          ) : (
            <NavLink
              to={"/"}
              className="transition-colors bg-yellow hover:bg-yellow-dark flex justify-center items-center py-3 rounded-md text-white font-bold text-sm"
              type="submit"
            >
              ADICIONAR PRODUTOS
            </NavLink>
          )}
        </Card>
      </div>
    </form>
  );
}
