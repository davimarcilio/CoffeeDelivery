import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import illustration from "../../../assets/Illustration.png";
import { useLocation } from "react-router-dom";
export function Success() {
  const searchParams = new URLSearchParams(useLocation().search);

  return (
    <main className="mt-28 flex flex-col gap-10">
      <div>
        <h1 className="text-yellow-dark max-sm:text-center font-Baloo font-extrabold text-3xl">
          Uhu! Pedido confirmado
        </h1>
        <p className="text-xl font-Roboto max-sm:text-center text-base-subtitle">
          Agora é só aguardar que logo o café chegará até você{" "}
        </p>
      </div>
      <div className="flex justify-between">
        <div className="flex justify-between bg-gradient-to-br from-[#dbac2c] p-1 to-[#8047f8]  border  flex-1 rounded-md rounded-tr-36 rounded-bl-36">
          <div className="flex max-sm:py-10 flex-col rounded-md bg-background w-full h-full rounded-tr-36 rounded-bl-36">
            <ul className="flex flex-col gap-8 justify-center h-full">
              <li className="pl-10 flex gap-3 items-center">
                <div className="p-2 h-min bg-purple rounded-full">
                  <MapPin className="text-background" weight="fill" size={16} />
                </div>
                <div className="flex flex-col">
                  <p className="font-Roboto text-base-text">
                    Entrega em{" "}
                    <strong className="font-bold">
                      {searchParams.get("rua")}, {searchParams.get("numero")}
                    </strong>
                  </p>
                  <p className="font-Roboto text-base-text">
                    {searchParams.get("bairro")}, {searchParams.get("cidade")},{" "}
                    {searchParams.get("estado")}
                  </p>
                </div>
              </li>
              <li className="pl-10 flex gap-3 items-center">
                <div className="p-2 h-min bg-yellow rounded-full">
                  <Timer className="text-background" weight="fill" size={16} />
                </div>
                <div className="flex flex-col font-Roboto text-base-text">
                  Previsão de entrega
                  <strong>20 min - 30 min</strong>
                </div>
              </li>
              <li className="pl-10 flex gap-3 items-center">
                <div className="p-2 h-min bg-yellow-dark rounded-full">
                  <CurrencyDollar
                    className="text-background"
                    weight="fill"
                    size={16}
                  />
                </div>
                <div className="flex flex-col font-Roboto text-base-text">
                  Pagamento na entrega
                  <strong>
                    {searchParams.get("payment-method") === "debit" &&
                      "CARTÃO DE DÉBITO"}
                    {searchParams.get("payment-method") === "credit" &&
                      "CARTÃO DE CRÉDITO"}
                    {searchParams.get("payment-method") === "money" &&
                      "DINHEIRO"}
                  </strong>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <img className="max-sm:hidden" src={illustration} alt="Moto" />
      </div>
    </main>
  );
}
