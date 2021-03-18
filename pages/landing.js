import Head from "next/head";
import Image from "next/image";
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

const ImagesContainer = styled.div`
  display: flex;
  justify-content: space-around;
  column-gap: 10px;

  & div img {
    @media screen and (max-width: 1300px) {
      height: 26vw;
    }

    @media screen and (max-width: 1175px) {
      height: 29vw;
    }

    @media screen and (max-width: 1060px) {
      height: 32vw;
    }

    @media screen and (max-width: 825px) {
      height: 400px;
    }
  }

  & div:nth-child(3) {
    transform: rotate(0.25deg);
  }

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
        <img src="/img016_edited2.jpg" width="40px" height="40px"></img>
        <Image
          src="/img016_edited2.jpg"
          width={275}
          height={375}
          priority={true}
        />
        <Image src="/triangle2.jpg" width={425} height={375} priority={true} />
        <Image
          src="/img017_edited4.jpg"
          width={275}
          height={375}
          priority={true}
        />
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
