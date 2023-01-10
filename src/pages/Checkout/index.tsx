import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Minus,
  Money,
  Plus,
  Trash,
} from "phosphor-react";

import { Card } from "./components/Card";
import { Input } from "./components/Input";
import { PaymentMethod } from "./components/PaymentMethod";
import { ProductItem } from "./components/ProductItem";

export function Checkout() {
  return (
    <form className="flex gap-8 justify-between mb-4">
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
            <Input className="w-200px" placeholder="CEP" />
            <Input placeholder="Rua" />
            <div className="flex gap-3">
              <Input className="w-200px" placeholder="Número" />
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
              <Input className="w-200px" placeholder="Bairro" />
              <Input className="flex-1 " placeholder="Cidade" />
              <Input className="w-60px" placeholder="UF" />
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

        <Card>
          <ProductItem />
          <hr />
          <ProductItem />
          <hr />
          <ul className="flex flex-col gap-3">
            <li className="text-base-text font-Roboto text-sm flex justify-between">
              Total de itens
              <strong className="text-base font-normal">R$ 29,70</strong>
            </li>
            <li className="text-base-text font-Roboto text-sm flex justify-between">
              Entrega
              <strong className="text-base font-normal">R$ 3,50</strong>
            </li>
            <li className="text-base-subtitle font-bold font-Roboto text-xl flex justify-between">
              Total
              <strong className="text-base-subtitle text-xl">R$ 33,20</strong>
            </li>
          </ul>
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
