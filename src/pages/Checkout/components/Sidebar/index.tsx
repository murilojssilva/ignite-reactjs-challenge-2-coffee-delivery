import { Trash } from "phosphor-react";
import expressTradiciotal from "../../../../assets/coffees/Expresso Tradicional.png";
import {
  ConfirmButton,
  ItemAddInCart,
  ItemInCart,
  ItemInfo,
  ItemQuantity,
  RemoveItemButton,
  SidebarContainer,
  SidebarContent,
  SidebarItem,
  SidebarItems,
  SidebarList,
  SidebarValue,
} from "./styles";

export function Sidebar() {
  return (
    <SidebarContainer>
      <h2>Cafés selecionados</h2>
      <SidebarContent>
        <SidebarItems>
          <SidebarItem>
            <img src={expressTradiciotal} alt="Expresso Tradicional" />
            <ItemInfo>
              <p>Expresso Tradicional</p>
              <ItemInCart>
                <ItemAddInCart>
                  <button>-</button>
                  <ItemQuantity>1</ItemQuantity>
                  <button>+</button>
                </ItemAddInCart>
                <RemoveItemButton>
                  <Trash color="var(--purple)" size={15} /> Remover
                </RemoveItemButton>
              </ItemInCart>
            </ItemInfo>
            <strong>9,90</strong>
          </SidebarItem>
          <SidebarItem>
            <img src={expressTradiciotal} alt="Expresso Tradicional" />
            <ItemInfo>
              <p>Expresso Tradicional</p>
              <ItemInCart>
                <ItemAddInCart>
                  <button>-</button>
                  <ItemQuantity>1</ItemQuantity>
                  <button>+</button>
                </ItemAddInCart>
                <RemoveItemButton>
                  <Trash color="var(--purple)" size={15} /> Remover
                </RemoveItemButton>
              </ItemInCart>
            </ItemInfo>
            <strong>9,90</strong>
          </SidebarItem>
          <SidebarItem>
            <img src={expressTradiciotal} alt="Expresso Tradicional" />
            <ItemInfo>
              <p>Expresso Tradicional</p>
              <ItemInCart>
                <ItemAddInCart>
                  <button>-</button>
                  <ItemQuantity>1</ItemQuantity>
                  <button>+</button>
                </ItemAddInCart>
                <RemoveItemButton>
                  <Trash color="var(--purple)" size={15} /> Remover
                </RemoveItemButton>
              </ItemInCart>
            </ItemInfo>
            <strong>9,90</strong>
          </SidebarItem>
        </SidebarItems>
        <SidebarList>
          <SidebarValue>
            <p>Total de ítens</p>
            <p>R$ 00,00</p>
          </SidebarValue>
          <SidebarValue>
            <p>Entrega</p>
            <p>R$ 00,00</p>
          </SidebarValue>
          <SidebarValue>
            <strong>Total</strong>
            <strong>R$ 00,00</strong>
          </SidebarValue>
        </SidebarList>
        <ConfirmButton>CONFIRMAR PEDIDO</ConfirmButton>
      </SidebarContent>
    </SidebarContainer>
  );
}
