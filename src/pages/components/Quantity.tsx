import { Minus, Plus } from "phosphor-react";
import { ChangeEvent, useEffect, useState } from "react";

interface QuantityProps {
  onChangeQuantity: (value: number) => void;
}

export function Quantity({ onChangeQuantity }: QuantityProps) {
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    onChangeQuantity(quantity);
  }, [quantity]);

  function handleIncrementQuantity() {
    if (quantity !== 99) {
      setQuantity((state) => state + 1);
    }
  }
  function handleDecrementQuantity() {
    if (quantity !== 1) {
      setQuantity((state) => state - 1);
    }
  }

  return (
    <div className="flex justify-center items-center relative">
      <button
        onClick={handleIncrementQuantity}
        className="absolute left-1 group"
        type="button"
      >
        <Plus
          size={14}
          className="transition-colors text-purple group-hover:text-purple-dark"
        />
      </button>
      <input
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setQuantity(Number(e.target.value))
        }
        placeholder="1"
        value={quantity}
        className="text-center px-6 w-16 py-2 rounded-md bg-base-button"
        type="number"
      />
      <button
        onClick={handleDecrementQuantity}
        className="absolute right-1 group"
        type="button"
      >
        <Minus className="transition-colors text-purple group-hover:text-purple-dark" />
      </button>
    </div>
  );
}
