import styled from "styled-components";

export const SidebarContainer = styled.aside`
  padding: 3rem;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  h2 {
    color: ${(props) => props.theme.colors.title};
  }
`;

export const SidebarContent = styled.div`
  width: 100%;
  padding: 2rem;
  background-color: var(--gray-100);
  border-radius: 8px 50px;
`;

export const SidebarItems = styled.div`
  margin-bottom: 1rem;
`;

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const SidebarItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: ${(props) => props.theme.colors.title};
  padding: 1rem;
  border-bottom: 2px solid var(--gray-300);
  gap: 1rem;
  img {
    width: 4rem;
    height: 4rem;
  }
`;

export const RemoveItemButton = styled.button`
  border: 0;
  background-color: var(--gray-300);
  padding: 0.25rem 0.5rem;
  gap: 1rem;
  display: flex;
  align-items: center;
  border-radius: 8px;
  color: ${(props) => props.theme.colors.title};
  transition: filter 0.1s;
  &:hover {
    filter: opacity(0.9);
  }
`;

export const ItemQuantity = styled.div`
  display: flex;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
`;

export const ItemAddInCart = styled.div`
  gap: 0.25rem;
  background-color: var(--gray-300);
  border-radius: 8px;
  display: flex;
  align-items: center;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  button {
    border: 0;
    background-color: var(--gray-300);
    color: var(--shape);
    padding: 0.25rem 0.5rem;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    color: var(--purple-dark);
    border-radius: 8px;
    &:hover {
      filter: opacity(0.9);
    }
  }
`;

export const ItemInCart = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

export const SidebarList = styled.div``;

export const SidebarValue = styled.div`
  color: ${(props) => props.theme.colors.title};
  font-size: 1.25rem;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

export const ConfirmButton = styled.button`
  background-color: var(--yellow);
  border-radius: 8px;
  border: 0;
  padding: 0.5rem;
  color: var(--shape);
  width: 100%;
`;
