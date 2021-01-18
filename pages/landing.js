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
  width: 100%;
  height: 22vw;
  alt: "Stained Glass";

  @media screen and (max-width: 1175px) {
    height: 30vw;
  }

  @media screen and (max-width: 825px) {
    width: 450px;
    height: 350px;
  }
`;

const ImagesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 10px;
  grid-row-gap: 0px;
  width: 100%;

  & img:nth-child(1) {
    grid-area: 1 / 1 / 2 / 2;
  }
  & img:nth-child(2) {
    grid-area: 1 / 2 / 2 / 3;
  }
  & img:nth-child(3) {
    grid-area: 1 / 3 / 2 / 4;
  }

  @media screen and (max-width: 1175px) {
    grid-template-columns: repeat(2, 1fr);

    & img:nth-child(1) {
      display: none;
    }
    & img:nth-child(2) {
      grid-area: 1 / 1 / 2 / 2;
    }
    & img:nth-child(3) {
      grid-area: 1 / 2 / 2 / 3;
    }
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
        <Image src="/mitchell-luo-XQM6QgFIezg-unsplash.jpg" />
        <Image src="/marie-bellando-mitjans-qAh_tS-vdOU-unsplash.jpg" />
        <Image src="/ant-rozetsky-u93RuS6IJGk-unsplash.jpg" />
      </ImagesContainer>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, sed do eiusmod tempor incididunt ut labore et. Incididunt ut
        labore et dolore magna aliqua.
      </p>
      <NetlifySmallForm />
      <Copyright />
    </LandingPage>
  );
}
