import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

export function Card({ children }: CardProps) {
  return (
    <div className="flex flex-col bg-base-card rounded-md p-10 gap-8">
      {children}
    </div>
  );
}
