import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  padding: 0.8rem;
  background-color: var(--darkButton);
  color: var(--font-white);
  border-radius: 0.2rem;
  border: none;
  :hover {
    cursor: pointer;
    opacity: 0.8;
  }
  transition: 0.2s ease-in-out;
`;
