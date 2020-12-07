import Head from "next/head";
import NavBar from "@components/NavBar";
import Copyright from "@components/Copyright";
import styled from "styled-components";

const Container = styled.div``;

const TextArea = styled.div`
  width: 50vw;
`;
const BigImg = styled.div`
  width: 50vw;
`;

export default function About() {
  return (
    <div className="container">
      <Head>
        <title>Thayer Glass Studio</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500&family=Poppins:ital,wght@0,200;0,300;0,400;0,500;1,200&display=swap"
          rel="stylesheet"
        />
      </Head>
      <NavBar />
      <p>ABOUT</p>
      <Copyright />
    </div>
  );
}
