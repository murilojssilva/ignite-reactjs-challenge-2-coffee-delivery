import { Item } from "./Item";
import { ItemsContainer, ItemsContent } from "./styles";

export function Items() {
  return (
    <ItemsContainer>
      <h1>Nossos cafés</h1>
      <ItemsContent>
        <Item
          type="Expresso Tradicional"
          tags={["TRADICIONAL"]}
          quantity={0}
          price="9,90"
          description="O tradicional café feito com água quente e grãos moídos"
        />

        <Item
          type="Expresso Americano"
          tags={["TRADICIONAL"]}
          quantity={0}
          price="9,90"
          description="Expresso diluído, menos intenso que o tradicional"
        />

        <Item
          type="Expresso Cremoso"
          tags={["TRADICIONAL"]}
          quantity={0}
          price="9,90"
          description="Café expresso tradicional com espuma cremosa"
        />

        <Item
          type="Expresso Gelado"
          tags={["TRADICIONAL", "GELADO"]}
          quantity={0}
          price="9,90"
          description="Bebida preparada com café expresso e cubos de gelo"
        />

        <Item
          type="Café com Leite"
          tags={["TRADICIONAL", "COM LEITE"]}
          quantity={0}
          price="9,90"
          description="Meio a meio de expresso tradicional com leite vaporizado"
        />

        <Item
          type="Latte"
          tags={["TRADICIONAL", "COM LEITE"]}
          quantity={0}
          price="9,90"
          description="Uma dose de café expresso com o dobro de leite e espuma cremosa"
        />

        <Item
          type="Capuccino"
          tags={["TRADICIONAL", "COM LEITE"]}
          quantity={0}
          price="9,90"
          description="Bebida com canela feita de doses iguais de café, leite e espuma"
        />

        <Item
          type="Macchiato"
          tags={["TRADICIONAL", "COM LEITE"]}
          quantity={0}
          price="9,90"
          description="Café expresso misturado com um pouco de leite quente e espuma"
        />

        <Item
          type="Mocaccino"
          tags={["TRADICIONAL", "COM LEITE"]}
          quantity={0}
          price="9,90"
          description="Café expresso com calda de chocolate, pouco leite e espuma"
        />

        <Item
          type="Chocolate Quente"
          tags={["ESPECIAL", "COM LEITE"]}
          quantity={0}
          price="9,90"
          description="Bebida feita com chocolate dissolvido no leite quente e café"
        />

        <Item
          type="Cubano"
          tags={["ESPECIAL", "ALCOÓLICO", "GELADO"]}
          quantity={0}
          price="9,90"
          description="Drink gelado de café expresso com rum, creme de leite e hortelã"
        />

        <Item
          type="Havaiano"
          tags={["ESPECIAL"]}
          quantity={0}
          price="9,90"
          description="Bebida adocicada preparada com café e leite de coco"
        />

        <Item
          type="Árabe"
          tags={["ESPECIAL"]}
          quantity={0}
          price="9,90"
          description="Bebida preparada com grãos de café árabe e especiarias"
        />

        <Item
          type="Irlandês"
          tags={["ESPECIAL", "ALCOÓLICO"]}
          quantity={0}
          price="9,90"
          description="Bebida à base de café, uísque irlandês, açúcar e chantilly"
        />
      </ItemsContent>
    </ItemsContainer>
  );
}
