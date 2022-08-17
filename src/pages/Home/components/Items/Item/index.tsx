import {
  ItemAdd,
  ItemAddInCart,
  ItemCart,
  ItemContainer,
  ItemPrice,
  QuantityContainer,
  TagsContainer,
} from "./styles";
import coffeWithMilk from "../../../../../assets/coffees/Café com Leite.png";
import coldExpresso from "../../../../../assets/coffees/Expresso Gelado.png";
import expresso from "../../../../../assets/coffees/Expresso Tradicional.png";
import americanExpresso from "../../../../../assets/coffees/Expresso Americano.png";
import creamyExpresso from "../../../../../assets/coffees/Expresso Cremoso.png";
import latte from "../../../../../assets/coffees/Latte.png";
import capuccino from "../../../../../assets/coffees/Capuccino.png";
import macchiato from "../../../../../assets/coffees/Macchiato.png";
import mocaccino from "../../../../../assets/coffees/Mocaccino.png";
import hotChocolate from "../../../../../assets/coffees/Chocolate Quente.png";
import cuban from "../../../../../assets/coffees/Cubano.png";
import havaian from "../../../../../assets/coffees/Havaiano.png";
import arabian from "../../../../../assets/coffees/Árabe.png";
import irish from "../../../../../assets/coffees/Irlandês.png";

import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { ReactNode, useState } from "react";

interface IItemProps {
  type:
    | "Chocolate Quente"
    | "Cubano"
    | "Latte"
    | "Capuccino"
    | "Irlandês"
    | "Café com Leite"
    | "Mocaccino"
    | "Árabe"
    | "Expresso Americano"
    | "Expresso Tradicional"
    | "Expresso Cremoso"
    | "Expresso Gelado"
    | "Macchiato"
    | "Havaiano";
  tags: string[];
  description: string;
  price: string;
  quantity: number;
}

export function Item({ type, tags, description, price, quantity }: IItemProps) {
  return (
    <ItemContainer>
      <img
        src={
          type === "Café com Leite"
            ? coffeWithMilk
            : type === "Expresso Gelado"
            ? coldExpresso
            : type === "Expresso Tradicional"
            ? expresso
            : type === "Expresso Americano"
            ? americanExpresso
            : type === "Expresso Cremoso"
            ? creamyExpresso
            : type === "Macchiato"
            ? macchiato
            : type === "Capuccino"
            ? capuccino
            : type === "Latte"
            ? latte
            : type === "Mocaccino"
            ? mocaccino
            : type === "Chocolate Quente"
            ? hotChocolate
            : type === "Cubano"
            ? cuban
            : type === "Havaiano"
            ? havaian
            : type === "Árabe"
            ? arabian
            : type === "Irlandês"
            ? irish
            : ""
        }
        alt={type}
      />
      <TagsContainer>
        {tags.map((tag) => (
          <span>{tag}</span>
        ))}
      </TagsContainer>
      <h2>{type}</h2>
      <p>{description}</p>
      <ItemCart>
        <ItemPrice>
          R$<strong>{price}</strong>
        </ItemPrice>
        <ItemAdd>
          <div>
            <button>
              <Minus size={16} color={"var(--purple)"} />
            </button>
            <QuantityContainer>{quantity}</QuantityContainer>
            <button>
              <Plus size={16} color={"var(--purple)"} />
            </button>
          </div>
        </ItemAdd>
        <ItemAddInCart>
          <button>
            <ShoppingCart size={16} />
          </button>
        </ItemAddInCart>
      </ItemCart>
    </ItemContainer>
  );
}
