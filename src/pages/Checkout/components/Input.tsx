import { ChangeEvent, FormEvent } from "react";

interface InputProps {
  placeholder: string;
  className?: string;
  name?: string;
  id?: string;
  value?: string;
  required?: boolean;
  onChange?: (e: FormEvent<HTMLInputElement>) => void;
}

export function Input({
  placeholder,
  className,
  name,
  onChange,
  value,
  required,
}: InputProps) {
  return (
    <input
      required={required}
      defaultValue={value}
      onChange={onChange}
      name={name}
      type="text"
      className={`${className} p-3 bg-base-input rounded-sm placeholder:text-base-label border border-base-button`}
      placeholder={placeholder}
    />
  );
}
