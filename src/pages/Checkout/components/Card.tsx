import { ReactNode } from "react";

interface CardProps {
  children: ReactNode | ReactNode[];
  borderRadius?: string;
}

export function Card({ children, borderRadius }: CardProps) {
  return (
    <div
      className={`flex flex-col bg-base-card rounded-md p-10 gap-8  ${borderRadius} `}
    >
      {children}
    </div>
  );
}
