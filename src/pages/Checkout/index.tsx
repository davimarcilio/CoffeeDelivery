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

export interface AddressProps {
  cep: string;
  state: string;
  city: string;
  street: string;
  neighborhood: string;
}

export function Checkout() {
  const [CEP, setCEP] = useState("");
  // const [validAddress, setValidAddress] = useState(true);
  // const [errorBar, setErrorBar] = useState("");

  const [address, setAddress] = useState<AddressProps>({
    cep: "",
    state: "",
    city: "",
    street: "",
    neighborhood: "",
  });
  // useEffect(() => {
  //   if (address.city !== "Criciúma" && address.city !== "") {
  //     return setValidAddress(true);
  //   }
  //   const timeout = setTimeout(() => {
  //     setValidAddress(false);
  //   }, 3000);
  //   return () => {
  //     clearTimeout(timeout);
  //   };
  // }, [address]);
  useEffect(() => {
    async function getAddress(cepStr: string) {
      const response = await cep(cepStr);
      setAddress(response);
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
  const CartProducts = useContext(ProductsContext);
  const { cart } = CartProducts;

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
      {/* {validAddress && (
        <div className="absolute bg-red-400 px-10 py-4 right-10 top-24 z-50 flex flex-col">
          <h1>Só são aceitos pedidos em criciúma!</h1>
          <span
            className={`bg-green-300 transition-all w-full duration-1000 h-1 absolute left-0 bottom-0`}
          >
            {" "}
          </span>
        </div>
      )} */}
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
              value={CEP}
              className="w-200px"
              placeholder="CEP"
            />
            <Input placeholder="Rua" value={address.street} />
            <div className="flex gap-3">
              <Input required className="w-200px" placeholder="Número" />
              <div className="flex justify-center items-center flex-1 w-full relative">
                <label
                  className="absolute right-3 text-base-label text-xs italic font-Roboto "
                  htmlFor="complemento"
                >
                  Opcional
                </label>
                <Input
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
          <hr />
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
            <h1>Seu carrinho está vazio</h1>
          )}
          <button
            className="transition-colors bg-yellow hover:bg-yellow-dark  py-3 rounded-md text-white font-bold text-sm"
            type="submit"
          >
            CONFIRMAR PEDIDO
          </button>
        </Card>
      </div>
    </form>
  );
}
