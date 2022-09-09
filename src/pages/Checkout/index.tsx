import {
  CheckoutCards,
  CheckoutContainer,
  CheckoutDataForm,
  CheckoutForm,
  CheckoutFormDivider,
  CheckoutHeader,
  CheckoutInfo,
  CheckoutInfoContent,
  CheckoutList,
  CheckoutPaymentForm,
  CheckoutRadiobtn,
  CheckoutSidebar,
  CheckoutTitle,
  CheckoutValue,
} from "./styles";
import {
  MapPinLine,
  CurrencyDollar,
  CreditCard,
  Bank,
  Money,
} from "phosphor-react";
import { Input } from "./components/Input";

export function Checkout() {
  return (
    <CheckoutContainer>
      <CheckoutInfo>
        <h2>Complete seu pedido</h2>
        <CheckoutInfoContent>
          <CheckoutForm>
            <CheckoutHeader>
              <MapPinLine size={20} color={"var(--yellow-dark)"} />
              <CheckoutTitle>
                <span>Endereço de entrega</span>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </CheckoutTitle>
            </CheckoutHeader>
            <CheckoutDataForm>
              <CheckoutFormDivider>
                <Input placeholder="CEP" />
              </CheckoutFormDivider>
              <Input placeholder="Rua" />

              <CheckoutFormDivider>
                <Input placeholder="Número" />
                <Input placeholder="Complemento" />
              </CheckoutFormDivider>

              <CheckoutFormDivider>
                <Input placeholder="Bairro" />
                <Input placeholder="Cidade" />
              </CheckoutFormDivider>
            </CheckoutDataForm>
          </CheckoutForm>
          <CheckoutPaymentForm>
            <CheckoutHeader>
              <CurrencyDollar size={20} color={"var(--purple)"} />
              <CheckoutTitle>
                <span>Pagamento</span>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </CheckoutTitle>
            </CheckoutHeader>
            <CheckoutCards>
              <CheckoutRadiobtn>
                <input
                  type="radio"
                  id="huey"
                  name="drone"
                  value="huey"
                  checked
                />

                <label htmlFor="huey">
                  <CreditCard size={20} color="var(--purple)" /> Cartão de
                  crédito
                </label>
              </CheckoutRadiobtn>
              <CheckoutRadiobtn>
                <input type="radio" id="dewey" name="drone" value="dewey" />

                <label htmlFor="dewey">
                  <Bank size={20} color="var(--purple)" /> Cartão de débito
                </label>
              </CheckoutRadiobtn>
              <CheckoutRadiobtn>
                <input type="radio" id="cash" name="drone" value="cash" />

                <label htmlFor="cash">
                  <Money size={20} color="var(--purple)" /> Dinheiro
                </label>
              </CheckoutRadiobtn>
            </CheckoutCards>
          </CheckoutPaymentForm>
        </CheckoutInfoContent>
      </CheckoutInfo>
      <CheckoutSidebar>
        <h2>Cafés selecionados</h2>
        <CheckoutList>
          <CheckoutValue>
            <p>Total de itens</p>
            <p>R$ 00,00</p>
          </CheckoutValue>
          <CheckoutValue>
            <p>Total de itens</p>
            <p>R$ 00,00</p>
          </CheckoutValue>
          <CheckoutValue>
            <strong>Total de itens</strong>
            <strong>R$ 00,00</strong>
          </CheckoutValue>
        </CheckoutList>
      </CheckoutSidebar>
    </CheckoutContainer>
  );
}
