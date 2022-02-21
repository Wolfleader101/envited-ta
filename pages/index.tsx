import NavBar from "components/NavBar";
import { MainPage, MainPageContainer } from "components/PageOne/styles";
import { Heading, SubText } from "components/styled";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Envited</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainPage>
        <NavBar />
        <MainPageContainer>
          <Heading>Facebook events without Facebook.</Heading>
          <SubText>Easily host and share events with your friends across any social media.</SubText>
        </MainPageContainer>
      </MainPage>
    </div>
  );
};

export default Home;
