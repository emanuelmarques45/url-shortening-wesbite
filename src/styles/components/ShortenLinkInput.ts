import styled from "styled-components"

const Container = styled.div`
  position: relative;
  top: -7.5rem;
  grid-area: input-box;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  div.input-box {
    display: flex;
    gap: 2rem;
    border-radius: var(--br-smooth);
    padding: 5rem;
    background: url(./images/bg-shorten-desktop.svg) no-repeat
      var(--clr-dark-violet);

    input {
      flex-grow: 1;
      border-radius: var(--br-smooth);
      padding: 0 3rem;
    }

    button {
      background-color: var(--clr-cyan);
      color: var(--clr-white);
      border-radius: var(--br-smooth);
      padding: var(--pd-button-large);
      transition: var(--transition-default);

      &:hover {
        background-color: var(--clr-light-cyan);
      }
    }
  }

  ul.links {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    li {
      padding: 2rem;
      background-color: var(--clr-white);
      border-radius: var(--br-smooth);
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
`

export { Container }
