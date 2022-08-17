import styled from "styled-components";

export const ItemContainer = styled.div`
  background-color: var(--gray-100);
  padding: 2rem;
  border-radius: 0 50px;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 2rem;

  img {
    margin-top: -3rem;
  }

  h2 {
    color: ${(props) => props.theme.colors.title};
  }

  p {
    text-align: center;
    line-height: 1.6;
    height: 3em;
    overflow: hidden;
  }
`;

export const ItemCart = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
  gap: 1rem;
`;

export const ItemPrice = styled.p`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  strong {
    font-size: 1.5rem;
    color: ${(props) => props.theme.colors.title};
  }
`;

export const TagsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;

  span {
    padding: 0.5rem;
    background-color: var(--yellow-light);
    color: var(--yellow-dark);
    border-radius: 50px;
  }
`;

export const ItemAdd = styled.div`
  gap: 0.5rem;

  background-color: var(--gray-400);
  border-radius: 8px;

  display: flex;
  flex-direction: row;

  button {
    border: 0;
    background-color: var(--gray-400);
    color: var(--shape);
    padding: 0.5rem;

    align-items: center;
    color: var(--purple-dark);
    &:first-child {
      border-radius: 8px 0 0 8px;
    }
    &:last-child {
      border-radius: 0 8px 8px 0;
    }
  }

  div {
    display: flex;
    flex-direction: row;
  }
`;

export const ItemAddInCart = styled.div`
  button {
    padding: 0.5rem;
    color: var(--shape);
    border-radius: 8px;
    background-color: var(--purple-dark);
    border: 0;
  }
`;

export const QuantityContainer = styled.div`
  padding: 0.5rem;
  background-color: var(--gray-400);
  color: var(--purple);
  width: 0.5rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;
