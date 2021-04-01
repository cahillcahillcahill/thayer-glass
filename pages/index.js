import Head from "next/head";
import Landing from "./landing";

export default function Home() {
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
      <Landing />
    </>
  );
}
