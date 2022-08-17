import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --purple-dark: #4B2995;
        --purple: #8047F8;
        --purple-light: #EBE5F9;

        --yellow-dark: #C47F17;
        --yellow: #DBAC2C;
        --yellow-light: #F1E9C9;

        --shape: #FFFFFF;
        --gray-50: #FAFAFA;
        --gray-100: #F3F2F2;
        --gray-200: #EDEDED;
        --gray-300: #E6E5E5;
        --gray-400: #D7D5D5;
        --gray-500: #8D8686;
        --gray-600: #574F4D;
        --gray-800: #403937;
        --gray-900: #272221;
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }
        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }
    body {
        background: ${(props) => props.theme.colors.background};
        color: ${(props) => props.theme.colors.text};
		-webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button, p, span {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-family: 'Baloo 2', sans-serif;
        font-weight: 700;
    }

    h1 {
        color: ${(props) => props.theme.colors.title}
    }

    input, button {
        cursor: pointer;
    }

    p {
        font-size: 1rem;
        text-align: justify;
        color: ${(props) => props.theme.colors.text}
    }

    span {
        font-size: 0.875rem;
        font-weight: bold;
    }

    a {
        text-decoration: none;
    }

    h1 {
        font-size: 3rem;
    }


    @media (max-width: 768px) {
    html {
        font-size: 87,5%;
    }
  }
`;
