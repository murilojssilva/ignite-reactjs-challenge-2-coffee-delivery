import { ReactNode } from "react";
import { CardContainer } from "./styles";

interface ICardProps {
  icon: ReactNode;
  text: string;
  color: string;
}

export function Card({ icon, text, color }: ICardProps) {
  return (
    <CardContainer color={color}>
      <span>{icon}</span>
      <p>{text}</p>
    </CardContainer>
  );
}
