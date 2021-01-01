import Head from "next/head";
import Image from "next/image";
import NavBar from "@components/NavBar";
import Copyright from "@components/Copyright";
import styled from "styled-components";

const AboutContainer = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
`;

const AboutGrid = styled.div`
  font-family: "Fira Code", monospace;
  width: 1200px;
  height: 135vh;
  margin: 30px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(11, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  @media (max-width: 945px) {
    grid-template-rows: repeat(14, 1fr);
    height: 175vh;
    grid-row-gap: 10px;
  }

  @media (max-width: 840px) {
    display: flex;
    flex-direction: column;
    width: 90%;
    align-content: center;
  }
`;

const Img1 = styled.div`
  grid-area: 1 / 4 / 5 / 7;
  display: flex;
  justify-content: flex-end;
  @media (max-width: 945px) {
    margin-top: 30px;
    align-content: center;
    justify-content: center;
  }
  @media (max-width: 840px) {
    margin-top: 10px;
    width: 90%;
    align-self: center;
  }
`;

const Text1 = styled.div`
  grid-area: 1 / 1 / 5 / 4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;

  @media (max-width: 1040px) {
    font-size: 14px;
  }
`;

const Text2 = styled.div`
  grid-area: 8 / 1 / 9 / 7;
`;
//Three imgs are replaced with Two imgs at max-width 945px
const ThreeImgs1 = styled.div`
  grid-area: 5 / 1 / 8 / 7;
  display: flex;
  column-gap: 10px;
  justify-content: space-between;
  align-content: flex-end;

  @media (max-width: 1040px) {
    margin-top: 20px;
  }
  @media (max-width: 945px) {
    display: none;
  }
`;

const ThreeImgs2 = styled.div`
  grid-area: 9 / 1 / 12 / 7;
  display: flex;
  column-gap: 10px;
  justify-content: space-between;

  @media (max-width: 1040px) {
    margin-bottom: 20px;
  }
  @media (max-width: 945px) {
    display: none;
  }
`;

const TwoImgs1 = styled.div`
  display: none;
  @media (max-width: 945px) {
    grid-area: 5 / 1 / 8 / 7;
    display: flex;
    column-gap: 10px;
    justify-content: space-between;
  }
  @media (max-width: 700px) {
    flex-direction: column;
    width: 90%;
    row-gap: 10px;
    justify-content: center;
    align-self: center;
  }
`;

const TwoImgs2 = styled.div`
  display: none;
  @media (max-width: 945px) {
    grid-area: 9 / 1 / 12 / 7;
    display: flex;
    column-gap: 10px;
    justify-content: space-between;
  }
  @media (max-width: 700px) {
    flex-direction: column;
    width: 90%;
    row-gap: 10px;
    align-self: center;
  }
`;

const TwoImgs3 = styled.div`
  display: none;
  @media (max-width: 945px) {
    grid-area: 12 / 1 / 15 / 7;
    display: flex;
    column-gap: 10px;
    justify-content: space-between;
  }
  @media (max-width: 700px) {
    flex-direction: column;
    width: 90%;
    row-gap: 10px;
    align-self: center;
  }
`;

const SmallImage = styled(Image).attrs((props) => ({
  src: props.src,
  alt: "Stained Glass Image. Filename is" + props.src,
  width: 370,
  height: 300,
}))``;

const MedImage = styled(Image).attrs((props) => ({
  src: props.src,
  alt: "Stained Glass Image. Filename is" + props.src,
  width: 425,
  height: 350,
}))``;

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
      <AboutContainer>
        <AboutGrid>
          <Text1>
            <p>
              Amet magna et quis minim irure enim proident occaecat. Consequat
              aute quis culpa reprehenderit aliquip ad enim aliqua do Lorem. Do
              irure ullamco dolore fugiat aliqua qui magna minim. Sint commodo
              cupidatat ad nulla labore anim nulla eiusmod aute duis. Enim
              pariatur dolore Lorem aute sit in ex minim aute. Dolor magna
              adipisicing elit incididunt veniam enim occaecat.
            </p>
            <p>
              Sit exercitation duis ullamco aliqua veniam magna duis. Sunt minim
              excepteur officia laboris ullamco ex officia elit. Velit et
              proident Lorem ea occaecat elit ipsum elit. Ipsum amet id deserunt
              esse veniam nisi reprehenderit minim minim est aliquip. Do dolore
              qui exercitation ad anim cillum anim qui labore id et id quis.
            </p>
          </Text1>
          <Img1>
            <Image
              src="/mitchell-luo-XQM6QgFIezg-unsplash.jpg"
              alt="Stained Glass"
              width={550}
              height={350}
            />
          </Img1>
          <ThreeImgs1>
            <SmallImage src="/mitchell-luo-XQM6QgFIezg-unsplash.jpg" />
            <SmallImage src="/mitchell-luo-XQM6QgFIezg-unsplash.jpg" />
            <SmallImage src="/mitchell-luo-XQM6QgFIezg-unsplash.jpg" />
          </ThreeImgs1>
          {/* Displayed at max-width 945px */}
          <TwoImgs1>
            <MedImage src="/mitchell-luo-XQM6QgFIezg-unsplash.jpg" />
            <MedImage src="/mitchell-luo-XQM6QgFIezg-unsplash.jpg" />
          </TwoImgs1>
          <Text2>
            <p>
              Irure eu ex id voluptate aliquip. Commodo sit exercitation id
              nostrud officia eiusmod. Laboris sit nostrud labore in culpa in
              nulla exercitation occaecat eu voluptate. Eu ut cupidatat irure
              laborum esse exercitation culpa nostrud eu incididunt qui. Ea esse
              fugiat et tempor laboris exercitation sunt magna. Elit do
              consectetur anim do.
            </p>
          </Text2>
          <ThreeImgs2>
            <SmallImage src="/mitchell-luo-XQM6QgFIezg-unsplash.jpg" />
            <SmallImage src="/mitchell-luo-XQM6QgFIezg-unsplash.jpg" />
            <SmallImage src="/mitchell-luo-XQM6QgFIezg-unsplash.jpg" />
          </ThreeImgs2>
          {/* Displayed at max-width 945px */}
          <TwoImgs2>
            <MedImage src="/mitchell-luo-XQM6QgFIezg-unsplash.jpg" />
            <MedImage src="/mitchell-luo-XQM6QgFIezg-unsplash.jpg" />
          </TwoImgs2>
          {/* Displayed at max-width 945px */}
          <TwoImgs3>
            <MedImage src="/mitchell-luo-XQM6QgFIezg-unsplash.jpg" />
            <MedImage src="/mitchell-luo-XQM6QgFIezg-unsplash.jpg" />
          </TwoImgs3>
        </AboutGrid>
      </AboutContainer>
      <Copyright />
    </div>
  );
}
