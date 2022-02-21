import NavBar from "components/NavBar";
import ProductCard from "components/ProductCard";
import { Button, Heading, SubText, ProductCardContainer, SocialMediaBg, MainPage, PageBreak, PageContainer } from "components/styled";
import TextInput from "components/TextInput";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { SyntheticEvent, useState } from "react";

const Create: NextPage = () => {
  const [eventName, setEventName] = useState("");
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
          <Heading>Create your Event</Heading>
          <PageBreak />
          <TextInput name="eventName" placeholder="Georgia's B'day" value={eventName} setValue={setEventName} label="Event Name" />
        </PageContainer>
      </MainPage>
    </div>
  );
};

export default Create;
