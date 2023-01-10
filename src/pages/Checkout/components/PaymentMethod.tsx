import { ReactNode } from "react";

interface PaymentMethodProps {
  type: "credit" | "debit" | "money";
  labelText: string;
  icon: ReactNode;
}

export function PaymentMethod({ type, labelText, icon }: PaymentMethodProps) {
  return (
    <div className="flex-1 cursor-pointer">
      <input
        required
        value={type}
        className="peer hidden"
        type="radio"
        name="payment-method"
        id={`payment-method-${type}`}
      />
      <label
        className={`transition-colors cursor-pointer peer-checked:bg-purple-light hover:bg-base-hover  flex gap-3 items-center peer-checked:border-purple bg-base-button p-3 border rounded-md text-base-text text-xs font-Roboto`}
        htmlFor={`payment-method-${type}`}
      >
        {icon} {labelText}
      </label>
    </div>
  );
}
