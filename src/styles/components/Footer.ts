import styled from "styled-components"

const Container = styled.footer`
  background-color: var(--clr-very-dark-violet);

  .content {
    width: 85%;
    margin-inline: auto;
    color: var(--clr-white);
    display: flex;
    justify-content: space-between;
    align-items: top;
    padding: 8rem 0;

    img.logo {
      filter: brightness(100);
    }

    .menu {
      display: flex;
      gap: 10rem;

      & > li > span {
        display: block;
        font-weight: var(--fw-bold);
        margin-bottom: 2rem;
      }

      .submenu {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        li {
          color: var(--clr-grayish-violet);
        }
      }
    }

    .social {
      display: flex;
      gap: 3rem;
    }
  }
`

export { Container }
