import styled from "styled-components"

const Container = styled.button`
  background-color: var(--clr-cyan);
  color: var(--clr-white);
  border-radius: var(--br-round);
  padding: var(--pd-button);
  transition: var(--transition-default);

  &:hover {
    background-color: var(--clr-light-cyan);
  }
`

export { Container }
