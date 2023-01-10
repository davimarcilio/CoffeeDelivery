import { CurrencyDollar, MapPinLine } from "phosphor-react";

export function Checkout() {
  return (
    <form className="flex">
      <div>
        <h1>Complete seu pedido </h1>
        <div className="flex flex-col">
          <div className="flex">
            <MapPinLine size={22} />
            <div>
              <h1>Endereço de Entrega</h1>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </div>
          <input className="w-52" type="text" placeholder="CEP" />
          <input type="text" placeholder="Rua" />
          <div className="flex">
            <input type="text" placeholder="Número" />
            <input
              name="complemento"
              id="complemento"
              type="text"
              placeholder="Complemento"
            />
            <label htmlFor="complemento">Opcional</label>
          </div>
          <div>
            <input type="text" placeholder="Bairro" />
            <input type="text" placeholder="Cidade" />
            <input type="text" placeholder="UF " />
          </div>
        </div>

        <div>
          <div className="flex">
            <CurrencyDollar size={22} />
            <div className="flex flex-col">
              <h1>Pagamento</h1>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </div>
        </div>
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
