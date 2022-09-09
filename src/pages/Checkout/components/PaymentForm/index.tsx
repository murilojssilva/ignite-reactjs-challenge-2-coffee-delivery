import { SelectHTMLAttributes } from "react";
import { PaymentFormContainer } from "./styles";

interface PaymentFormProps extends SelectHTMLAttributes<HTMLSelectElement> {}

export function PaymentForm({ ...rest }: PaymentFormProps) {
  return (
    <PaymentFormContainer {...rest}>
      <option value="Cartão de crédito">Cartão de crédito</option>
      <option value="Cartão de débito">Cartão de débito</option>
      <option value="Dinheiro">Dinheiro</option>
    </PaymentFormContainer>
  );
}
