import Head from "next/head";
import NavBar from "@components/NavBar";
import Copyright from "@components/Copyright";
import NetlifyForm from "@components/NetlifyForm";
import styled from "styled-components";

const mainFont = '"Fira Code", monospace;';

const ContactContainer = styled.div`
  font-family: ${mainFont};
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(6, 1fr);

  @media (max-width: 1227px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  @media (max-width: 875px) {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
  }
`;

const FormContainer = styled.div`
  grid-area: 1 / 1 / 7 / 2;
  margin: 0rem 4rem 5rem 4rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1227px) {
    justify-content: start;
    margin: 0;
    width: 60%;
  }

  @media (max-width: 875px) {
    margin: 1rem 0;
    width: 35rem;
    height: 30rem;
  }
`;

const MapContainer = styled.div`
  grid-area: 3 / 2 / 6 / 3;
  background-color: #b9fdbb;
  margin: 0rem 4rem 0rem 0rem;
  text-align: center;

  @media (max-width: 1227px) {
    width: 60%;
    height: 25rem;
    margin-left: 20%;
  }
  @media (max-width: 875px) {
    margin: 2rem 1rem;
    width: 80vw;
    height: 20rem;
  }
`;

const PhoneAndEmail = styled.div`
  grid-area: 1 / 2 / 2 / 3;
  font-size: 14pt;
  font-weight: 400;
  align-self: flex-end;
  span {
    font-weight: 500;
  }

  @media (max-width: 1227px) {
    align-self: flex-start;
    margin-top: 70px;
  }
  @media (max-width: 875px) {
    align-self: center;
    margin: 30px 0;
    order: -1;
  }
`;
const Address = styled.div`
  grid-area: 2 / 2 / 3 / 4;
  font-size: 14pt;
  font-weight: 400;
  span {
    font-weight: 500;
  }
  @media (max-width: 1227px) {
    width: 100%;
    margin: 30px 0;
    text-align: center;
  }
  @media (max-width: 875px) {
    margin-top: 50px;
  }
`;

export default function Contact() {
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
      <ContactContainer>
        <FormContainer>
          <NetlifyForm />
        </FormContainer>
        <PhoneAndEmail>
          <div>
            <span>Phone:</span> 555-555-5555
          </div>
          <div>
            <span>Email:</span> jonthayer@gmail.com
          </div>
          <br />
        </PhoneAndEmail>
        <Address>
          <span>555 Glass Ln Suite 405</span>
          <br />
          <span>Iowa City, IA 54555</span>
        </Address>
        <MapContainer>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          GOOGLE MAPS
        </MapContainer>
      </ContactContainer>
      <Copyright />
    </div>
  );
}