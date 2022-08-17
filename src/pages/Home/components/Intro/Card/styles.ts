import styled from "styled-components";

interface ICardContainerProps {
  color: string;
}

export const CardContainer = styled.div<ICardContainerProps>`
  display: flex;
  flex-direction: row;

  align-items: center;

  gap: 1rem;

  span {
    background-color: ${(props) => props.color};
    padding: 0.5rem;
    border-radius: 100%;
    display: flex;
    align-items: center;
  }
`;
