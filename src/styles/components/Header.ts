import styled from "styled-components"
import { devices } from "../Global"

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 85%;
  margin-inline: auto;
  padding: 3rem 0;
  gap: 3rem;

  .menu {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 85%;
    color: var(--clr-grayish-violet);

    ul {
      display: flex;
      gap: 2rem;

      li {
        cursor: pointer;
      }
    }
  }

  @media (${devices.tablet}) {
    width: 90%;
  }
`

const ButtonContainer = styled.div`
  .login {
    background-color: transparent;
    padding: var(--pd-button);
  }
`
export { Header, ButtonContainer }
