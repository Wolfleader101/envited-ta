import NavBar from "components/NavBar";
import ProductCard from "components/ProductCard";
import { Button, Heading, SubText, ProductCardContainer, SocialMediaBg, MainPage, PageBreak, PageContainer } from "components/styled";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { SyntheticEvent } from "react";

const Home: NextPage = () => {
  const router = useRouter();

  const onClick = (e: SyntheticEvent) => {
    e.preventDefault();
    router.push("create");
  };
  return (
    <div>
      <Head>
        <title>Envited</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainPage>
        <NavBar />
        <PageContainer>
          <Heading>Facebook events without Facebook.</Heading>
          <PageBreak />
          <SubText>Easily host and share events with your friends across any social media.</SubText>
          <PageBreak />
          <Button cta onClick={onClick}>
            🎉 Create my next event
          </Button>
          <PageBreak />
          <SocialMediaBg>
            <ProductCardContainer>
              <ProductCard src="/card_left.png" />
              <ProductCard src="/card_middle.png" large />
              <ProductCard src="/card_right.png" />
            </ProductCardContainer>
          </SocialMediaBg>
        </PageContainer>
      </MainPage>
    </div>
  );
};

export default Home;
