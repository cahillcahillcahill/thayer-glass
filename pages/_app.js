import { createGlobalStyle, ThemeProvider } from "styled-components";
import PageContainer from "@components/PageContainer";
import NavBar from "@components/NavBar";
import Copyright from "@components/Copyright";

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
        <NavBar />
        <PageContainer>
          <Component {...pageProps} />
          <Copyright />
        </PageContainer>
      </ThemeProvider>
    </>
  );
}

export default Application;
