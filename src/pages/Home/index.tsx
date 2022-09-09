import { Intro } from "./components/Intro";
import { Header } from "../../components/Header";
import { HomeContainer } from "./styles";
import { Items } from "./components/Items";

interface IHomeProps {
  quantity: number;
}

export function Home() {
  return (
    <HomeContainer>
      <Intro />
      <Items />
    </HomeContainer>
  );
}
