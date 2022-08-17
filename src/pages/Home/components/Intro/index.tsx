import {
  IntroCards,
  IntroContainer,
  IntroContent,
  IntroHeader,
} from "./styles";
import introCoffee from "../../../../assets/intro-coffee.svg";
import { ArchiveBox, Clock, Coffee, ShoppingCart } from "phosphor-react";
import { Card } from "./Card";

export function Intro() {
  return (
    <IntroContainer>
      <IntroContent>
        <IntroHeader>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </IntroHeader>

        <IntroCards>
          <Card
            color={"var(--yellow-dark)"}
            text={"Compra simples e segura"}
            icon={<ShoppingCart color={"var(--shape)"} />}
          />
          <Card
            color={"var(--gray-800)"}
            text={"Embalagem mantém o café intacto"}
            icon={<ArchiveBox color={"var(--shape)"} />}
          />
          <Card
            color={"var(--yellow)"}
            text={"Entrega rápida e rastreada"}
            icon={<Clock color={"var(--shape)"} />}
          />
          <Card
            color={"var(--purple)"}
            text={"O café chega fresquinho até você"}
            icon={<Coffee color={"var(--shape)"} />}
          />
        </IntroCards>
      </IntroContent>
      <img src={introCoffee} alt="Copo de café com grãos de café" />
    </IntroContainer>
  );
}
