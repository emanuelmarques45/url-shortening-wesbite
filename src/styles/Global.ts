import { createGlobalStyle } from "styled-components"

const sizes = {
  mobile: "375px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px"
}

const devices = {
  mobile: `(max-width: ${sizes.mobile})`,
  tablet: `(max-width: ${sizes.tablet})`,
  laptop: `(max-width: ${sizes.laptop})`,
  laptopL: `(max-width: ${sizes.laptopL})`
}

const GlobalStyle = createGlobalStyle`

    :root {
        font-size: 62.5%;

        --ff-primary: 'Poppins', sans-serif;
        --fs-300: 1.6rem;
        --fs-400: 1.8rem;
        --fs-450: 2.5rem;
        --fs-500: 3rem;
        --fs-550: 3.5rem;
        --fs-600: 4rem;
        --fs-700: 5rem;
        --fs-800: 6rem;
        --fs-900: 7rem;

        --fw-bold: 700;

        --br-round: 3rem;
        --br-smooth: calc(var(--br-round) / 3);
        --pd-button: 1rem 2.8rem;
        --pd-button-large: 1.2rem 3rem;

        --clr-cyan: hsl(180, 66%, 45%);
        --clr-light-cyan: hsl(180, 66%, 70%);
        --clr-very-light-cyan: hsl(180, 66%, 90%);
        --clr-dark-violet: hsl(257, 27%, 26%);
        --clr-red: hsl(0, 87%, 67%);
        --clr-gray: hsl(0, 0%, 75%);
        --clr-grayish-violet: hsl(257, 7%, 58%);
        --clr-very-dark-blue: hsl(255, 11%, 22%);
        --clr-very-dark-violet: hsl(260, 8%, 14%);
        --clr-white: hsl(0, 0%, 100%);

        --transition-default: all 0.3s ease;

        @media ${devices.laptop} {
            --fs-900: var(--fs-800);
        }
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        border: none;
    }

    body {
        font-family: var(--ff-primary);
        font-size: var(--fs-400);
        overflow-x: hidden;
    }

    h1 {
        font-weight: 700;
    }

    img {
        display: block;
        max-width: 100%;
    }

    button, input {
        font: inherit;
        color: inherit;
    }

    button {
        cursor: pointer;
    }
`

export { GlobalStyle, devices }
