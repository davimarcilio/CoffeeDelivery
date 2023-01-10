import { ReactNode } from "react";

interface PaymentMethodProps {
  type: "credit" | "debit" | "money";
  labelText: string;
  icon: ReactNode;
}

export function PaymentMethod({ type, labelText, icon }: PaymentMethodProps) {
  return (
    <div className="flex-1">
      <input
        className="peer hidden"
        type="radio"
        name="payment-method"
        id={`payment-method-${type}`}
      />
      <label
        className={`peer-checked:bg-purple-light flex gap-3 items-center peer-checked:border-purple bg-base-button p-3 border rounded-md text-base-text text-xs font-Roboto leading-5`}
        htmlFor={`payment-method-${type}`}
      >
        {icon} {labelText}
      </label>
    </div>
  );
}
