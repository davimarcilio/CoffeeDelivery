import { ReactNode } from "react";

export interface ListIconProps {
  children: ReactNode;
  bgColor: string;
}

export function ListIcon({ children, bgColor }: ListIconProps) {
  return (
    <span className={`${bgColor} p-2 rounded-full inline-block`}>
      {children}
    </span>
  );
}
