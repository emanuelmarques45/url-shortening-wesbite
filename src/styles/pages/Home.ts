import styled from "styled-components"

const Container = styled.div`
  .content {
    margin-inline: auto;
    width: 85%;
  }

  section:nth-child(1) {
    margin-top: 2rem;

    .content {
      display: flex;
      padding-bottom: 15rem;

      .text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;

        h1 {
          font-size: var(--fs-900);
          line-height: 1.2;
          color: var(--clr-very-dark-violet);
          width: 125%;
        }

        p {
          line-height: 1.8;
          width: 115%;
        }

        button {
          margin-top: 2rem;
        }
      }

      img.illustration-working {
        flex-shrink: 2;
        position: relative;
        right: -15rem;
        object-fit: contain;
      }
    }
  }

  section:nth-child(2) {
    background-color: var(--clr-very-light-cyan);

    .content {
      div.advanced {
        text-align: center;

        h2 {
          color: var(--clr-very-dark-violet);
          font-size: var(--fs-550);
        }

        p {
          color: var(--clr-grayish-violet);
          max-width: 45%;
          margin-inline: auto;
          margin-top: 1rem;
        }
      }

      ul.advanced-list {
        margin-top: 5rem;
        display: flex;
        gap: 4rem;
        position: relative;

        &::before {
          content: "";
          position: absolute;
          height: 1rem;
          width: 100%;
          top: 40%;
          background-color: var(--clr-cyan);
        }

        li {
          background-color: white;
          border-radius: var(--br-smooth);
          padding: 10rem 3rem 0 3rem;
          height: 32rem;
          position: relative;
          --icon: url(./images/icon-brand-recognition.svg);

          &::before {
            content: "";
            position: absolute;
            top: -5rem;
            width: 10rem;
            aspect-ratio: 1/1;
            border-radius: 50%;
            background: var(--icon) no-repeat var(--clr-dark-violet) center;
          }

          h3 {
            color: var(--clr-very-dark-violet);
            font-size: var(--fs-450);
          }

          p {
            margin-top: 1.6rem;
            color: var(--clr-grayish-violet);
          }
        }

        li:nth-child(2) {
          margin-top: 5rem;
          --icon: url(./images/icon-detailed-records.svg);
        }

        li:nth-child(3) {
          margin-top: 10rem;
          --icon: url(./images/icon-fully-customizable.svg);
        }
      }
    }

    .boost {
      text-align: center;
      margin-top: 12rem;
      background: url(./images/bg-boost-desktop.svg) no-repeat
        var(--clr-dark-violet);
      padding: 5rem;

      h2 {
        color: var(--clr-white);
        font-size: var(--fs-550);
      }

      button {
        margin-top: 2rem;
      }
    }
  }
`

export { Container }
