import "@styles/globals.css";
import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`
html,
body {
  padding: 0;
  margin: 0;
}
a {
  text-decoration: none;
  color: black;
}

* {
  box-sizing: border-box;
}
`;

const theme = {
  // colors: {
  //   primary: "#0070f3",
  // },
};

function Application({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default Application;
