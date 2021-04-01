import Head from "next/head";
// import Image from "next/image";
import styled from "styled-components";
import PageContainer from "@components/PageContainer";
import NavBar from "@components/NavBar";
import Copyright from "@components/Copyright";
import NetlifySmallForm from "@components/NetlifySmallForm";

const TextContainer = styled.p`
  font-size: 15px;
  width: 75vw;
  text-align: center;
  font-family: "Fira Code", monospace;
  font-weight: 500;
  padding: 10px 0px 0px 0px;
  line-height: 32px;

  @media screen and (max-width: 825px) {
    & {
      padding: 20px 50px;
    }
  }

  @media screen and (max-width: 610px) {
    & {
      padding: 0px 0px;
    }
  }
`;

const ImagesContainer = styled.div`
  display: flex;
  justify-content: space-around;
  column-gap: 2vw;

  & img:nth-child(1) {
    width: 275px;
    height: 375px;
  }
  & img:nth-child(2) {
    width: 375px;
    height: 375px;
  }
  & img:nth-child(3) {
    width: 275px;
    height: 375px;
    transform: rotate(0.25deg);
  }

  & div:nth-child(3) {
  }

  @media screen and (max-width: 975px) {
    & img:nth-child(1) {
      width: 240px;
      height: 330px;
    }
    & img:nth-child(2) {
      width: 330px;
      height: 330px;
    }
    & img:nth-child(3) {
      width: 240px;
      height: 330px;
    }
  }

  @media screen and (max-width: 825px) {
    & img:nth-child(1) {
      display: block;
      order: +1;
    }
    & img:nth-child(1) {
      width: 320px;
      height: 410px;
    }
    & img:nth-child(2) {
      width: 320px;
      height: 320px;
    }
    & img:nth-child(3) {
      width: 320px;
      height: 410px;
    }

    & {
      display: flex;
      flex-direction: column;
      align-items: center;
      row-gap: 10px;
      height: 100%;
    }
  }

  @media screen and (max-width: 320px) {
    & img {
      width: 280px;
      height: 280px;
    }
  }
`;

export default function Landing() {
  return (
    <>
      <NavBar />
      <PageContainer>
        <Head></Head>
        <ImagesContainer>
          <img src="/img016_edited.jpg" priority={"true"} />
          <img src="/triangle2.jpg" priority={"true"} />
          <img src="/img017_edited2.jpg" priority={"true"} />
        </ImagesContainer>
        <TextContainer>
          Professional, creative stained glass studio since 1977 specializing in
          custom and original design, repair and historic restoration. Call{" "}
          <span style={{ fontWeight: "bold" }}>(319) 338-5595</span> or email{" "}
          <span style={{ fontWeight: "bold" }}>
            thayerglassstudio@gmail.com
          </span>{" "}
          for inquiries and appointments.
        </TextContainer>
        <NetlifySmallForm />
        <Copyright />
      </PageContainer>
    </>
  );
}
