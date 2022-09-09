import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 6.25rem;
`;

export const HeaderContent = styled.div`
  max-width: 1440px;
  padding: 2rem 4rem;
  display: flex;
  align-items: center;
  margin: 0 auto;
  justify-content: space-between;
  img {
    height: 40px;
  }
  nav {
    display: flex;
    flex-direction: row;
    gap: 1rem;

    span {
      gap: 0.5rem;
      border-radius: 8px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0.5rem;
      background-color: var(--purple-light);
      color: ${(props) => props.theme.colors.primary};
    }
    a {
      border: 0;
      border-radius: 8px;
      padding: 0.5rem;
      background-color: var(--yellow-light);
    }
  }
`;
