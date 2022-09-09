import styled from "styled-components";

export const ItemsContainer = styled.section`
  max-width: 1440px;
  padding: 5rem;
  margin: 0 auto;
`;

export const ItemsContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  gap: 1rem;
  padding: 3rem 0;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: 1020px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
