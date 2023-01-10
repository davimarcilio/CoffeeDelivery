interface InputProps {
  placeholder: string;
  className?: string;
  name?: string;
  id?: string;
}

export function Input({ placeholder, className, name }: InputProps) {
  return (
    <input
      name={name}
      type="text"
      className={`${className} p-3 bg-base-input rounded-sm placeholder:text-base-label border border-base-button`}
      placeholder={placeholder}
    />
  );
}
