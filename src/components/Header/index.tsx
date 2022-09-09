import coffeeLogo from "../../assets/logo.svg";
import { MapPin, ShoppingCart } from "phosphor-react";
import { HeaderContainer, HeaderContent } from "./styles";
import { useContext } from "react";
import { ThemeContext } from "styled-components";
import { NavLink } from "react-router-dom";

export function Header() {
  const { colors } = useContext(ThemeContext);
  return (
    <HeaderContainer>
      <HeaderContent>
        <NavLink to="/">
          <img src={coffeeLogo} alt="Coffee Delivery" />
        </NavLink>
        <nav>
          <span>
            <MapPin size={22} color={colors.primary} />
            Rio de Janeiro, RJ
          </span>
          <NavLink to="/checkout">
            <ShoppingCart size={22} color={colors.secundary} />
          </NavLink>
        </nav>
      </HeaderContent>
    </HeaderContainer>
  );
}
