import Head from "next/head";
import styled from "styled-components";

const AboutContainer = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  margin-top: 200px;
  font-family: "Fira Code", monospace;
`;

export default function About() {
  return (
    <>
      <Head>
        <title>Thayer Glass Studio</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500&family=Poppins:ital,wght@0,200;0,300;0,400;0,500;1,200&display=swap"
          rel="stylesheet"
        />
      </Head>
      <AboutContainer>Coming soon</AboutContainer>
    </>
  );
}
