import styled from "styled-components";

export const CheckoutContainer = styled.main`
  display: grid;
  grid-template-columns: 640px 1fr;
  margin: 0 auto;
  @media (max-width: 1096px) {
    display: flex;
    flex-direction: column;
  }
`;

export const CheckoutInfo = styled.div`
  color: ${(props) => props.theme.colors.title};
  padding: 3rem;
`;

export const CheckoutTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  span {
    color: ${(props) => props.theme.colors.text};
    font-size: 1rem;
  }

  p {
    font-size: 0.875rem;
  }
`;

export const CheckoutCards = styled.div`
  display: flex;
  flex-direction: row !important;

  gap: 1rem;
`;

export const CheckoutRadiobtn = styled.div`
  position: relative;
  display: block;
  text-align: center;

  label {
    display: block;
    margin: 0 auto;
    background: var(--gray-300);
    border: 1px solid var(--gray-300);
    color: ${(props) => props.theme.colors.title};
    border-radius: 8px;
    padding: 0.75rem 1rem;

    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  input[type="radio"] {
    display: none;
    position: absolute;
    appearance: none;

    &:checked + label {
      background-color: var(--purple-light);
      border-color: var(--purple);
    }
  }
`;

export const CheckoutHeader = styled.header`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 1rem;
`;

export const CheckoutDataForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-radius: 8px;
`;

export const CheckoutInfoContent = styled.div``;

export const CheckoutForm = styled.div`
  margin-bottom: 1rem;
  padding: 1rem;
  gap: 1rem;
  border-radius: 8px;
  background-color: var(--gray-100);
  display: flex;
  flex-direction: column;
`;

export const CheckoutFormDivider = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;

export const CheckoutPaymentForm = styled.div`
  background-color: var(--gray-100);
  padding: 1rem;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  div {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    span {
      color: ${(props) => props.theme.colors.text};
      font-size: 1rem;
    }

    p {
      font-size: 0.875rem;
    }
  }
`;
