import Head from "next/head";
//The next image component isn't working right now
// import Image from "next/image";
import styled from "styled-components";
import Copyright from "@components/Copyright";
import NetlifySmallForm from "@components/NetlifySmallForm";

const LandingPage = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3vw 100px;
  align-items: center;

  & p {
    font-size: 15px;
    width: 75vw;
    text-align: center;
    font-family: "Fira Code", monospace;
    font-weight: 500;
    padding: 10px 0px 0px 0px;
    line-height: 32px;
  }

  @media screen and (max-width: 825px) {
    & {
      padding: 20px 50px;
    }
  }
`;

const Image = styled.img`
  width: auto;
  height: 23vw;
  alt: "Stained Glass";

  @media screen and (max-width: 1300px) {
    height: 26vw;
  }

  @media screen and (max-width: 1175px) {
    height: 30vw;
  }

  @media screen and (max-width: 825px) {
    /* width: 450px; */
    height: 400px;
  }
`;

const ImagesContainer = styled.div`
  display: flex;
  justify-content: space-around;
  column-gap: 10px;
  width: 75%;

  @media screen and (max-width: 1175px) {
  }

  @media screen and (max-width: 825px) {
    & img:nth-child(1) {
      display: block;
      order: +1;
    }

    & {
      display: flex;
      flex-direction: column;
      align-items: center;
      row-gap: 10px;
      height: 100%;
    }
  }
`;

export default function Landing() {
  return (
    <LandingPage>
      <Head></Head>
      <ImagesContainer>
        <Image src="/img016_edited.jpg" />
        <Image src="/triangle.jpg" />
        <Image src="/img017_edited2.jpg" />
      </ImagesContainer>
      <p>
        Professional, creative stained glass studio since 1977 specializing in
        custom and original design, repair and historic restoration. Call{" "}
        <span style={{ fontWeight: "bold" }}>(319) 338-5595</span> or email{" "}
        <span style={{ fontWeight: "bold" }}>thayerglassstudio@gmail.com</span>{" "}
        for inquiries and appointments.
      </p>
      <NetlifySmallForm />
      <Copyright />
    </LandingPage>
  );
}
