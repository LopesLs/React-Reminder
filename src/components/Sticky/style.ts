import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;

  .reminderTitle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 2rem 0rem;

    > h1 {
      color: var(--font-white);
    }
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 1.5rem;
  grid-column-gap: 2.5rem;
  width: 90%;
  margin-bottom: 5rem;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 15rem;
    gap: 1rem;
    padding: 1rem;
    background-color: var(--dark);
    opacity: 0.9;
    border-radius: 0.4rem;

    > h2 {
      color: var(--font-white);
    }
    
    > p {
      color: var(--font-white);
      width: 90%;
      overflow: auto;
      text-align: center;
      word-break: break-all;
      
      scrollbar-width: none;
      ::-webkit-scrollbar {
        display: none;
      }
    };
  }
`;
