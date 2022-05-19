import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  
  :root {
    --veryDarkBlue: hsl(235, 21%, 11%);
    --veryDarkDesaturatedBlue: hsl(235, 24%, 19%);
    --lightGrayishBlue: hsl(234, 39%, 85%);
    --lightGrayishBlueHover: hsl(236, 33%, 92%);
    --darkGrayishBlue: hsl(234, 11%, 52%);
    --veryDarkGrayishBlueHover: hsl(233, 14%, 35%);
    --veryDarkGrayishBlue: hsl(237, 14%, 26%);
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
    background: var(--veryDarkBlue);
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }

  body, input, textarea, button {
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3 , h4 , h5 , h6 , strong {
    font-weight: 700;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
