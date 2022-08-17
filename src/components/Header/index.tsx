import coffeeLogo from "../../assets/logo.svg";
import { MapPin, ShoppingCart } from "phosphor-react";
import { HeaderContainer, HeaderContent } from "./styles";
import { useContext } from "react";
import { ThemeContext } from "styled-components";

export function Header() {
  const { colors } = useContext(ThemeContext);
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={coffeeLogo} alt="Coffee Delivery" />
        <nav>
          <span>
            <MapPin size={22} color={colors.primary} />
            Rio de Janeiro, RJ
          </span>
          <button>
            <ShoppingCart size={22} color={colors.secundary} />
          </button>
        </nav>
      </HeaderContent>
    </HeaderContainer>
  );
}
