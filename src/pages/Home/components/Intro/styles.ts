import styled from "styled-components";
import introBackground from "../../../../assets/background.png";

export const IntroContainer = styled.section`
  background: ${(props) => `url(${introBackground}) no-repeat center`};
  background-size: cover;
  width: 100%;
  max-width: 1440px;
  padding: 5rem;
  display: grid;
  grid-template-columns: 60% 40%;
  gap: 1rem;
  margin: 0 auto;

  @media (max-width: 960px) {
    display: flex;
    flex-direction: column-reverse;
  }

  img {
    width: 100%;
    height: 100%;
  }
`;

export const IntroContent = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: space-between;
  @media (max-width: 1200px) {
    gap: 1rem;
  }
`;

export const IntroHeader = styled.header`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: flex-start;
`;

export const IntroCards = styled.footer`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
