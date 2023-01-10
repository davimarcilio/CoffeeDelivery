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

export function Checkout() {
  return (
    <form className="flex">
      <div className="flex flex-col gap-3">
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
            <Input className="w-52" placeholder="CEP" />
            <Input placeholder="Rua" />
            <div className="flex gap-3">
              <Input placeholder="Número" />
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
              <Input placeholder="Bairro" />
              <Input placeholder="Cidade" />
              <Input placeholder="UF " />
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

            {/* <input type="radio">CARTÃO DE CRÉDITO
            <input type="radio">CARTÃO DE DÉBITO
            <input type="radio">DINHEIRO</input> */}
          </div>
        </Card>
      </div>
      <div>
        <h1>Cafés selecionados</h1>

        <div>
          <section>Café</section>
          <hr />
          <ul>
            <li>
              Total de itens
              <strong>R$ 29,70</strong>
            </li>
            <li>
              Entrega
              <strong>R$ 3,50</strong>
            </li>
            <li>
              Total
              <strong>R$ 33,20</strong>
            </li>
          </ul>
          <button type="submit">CONFIRMAR PEDIDO</button>
        </div>
      </div>
    </form>
  );
}
