import styled from "styled-components";

export const PaymentFormContainer = styled.select`
  border-radius: 8px;
  display: flex;
  flex-direction: row !important;
  gap: 1rem;
  border: 1px solid var(--gray-300);
  background-color: var(--gray-200);
  padding: 1rem;
  justify-content: space-between;

  height: 44px;
  border: none;
  overflow: hidden;

  &&::-moz-focus-inner {
    border: 0;
  }
  &&:focus {
    outline: none;
  }
  option {
  }
`;
