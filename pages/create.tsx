import DateSelector from "components/DateSelector";
import FileInput from "components/FileInput";
import ImageCanvas from "components/ImageCanvas";
import NavBar from "components/NavBar";
import { Heading, MainPage, PageBreak, RowContainer, Container, Button } from "components/styled";
import TextInput from "components/TextInput";
import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { SyntheticEvent, useState, useEffect } from "react";
import styled from "styled-components";

const Create: NextPage = () => {
  const [eventName, setEventName] = useState("");
  const [hostName, setHostName] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState<File | undefined>();
  const [imageUrl, setImageUrl] = useState("");
  const [imageWidth, setImageWidth] = useState(0);
  const [imageHeight, setImageHeight] = useState(0);
  const [imageStyleWidth, setImageStyleWidth] = useState(0);
  const [imageStyleHeight, setImageStyleHeight] = useState(0);

  const CreatePageContainer = styled(Container)`
    margin-top: 3rem;
  `;

  const calculateImage = (imgUrl: string, getDim = false, setStyle = false) => {
    const img = new Image();

    const MAX_WIDTH = 384;
    const MAX_HEIGHT = 384;

    img.onload = () => {
      if (getDim) {
        setImageWidth(img.width);
        setImageHeight(img.height);
      }

      if (setStyle || img.width >= MAX_WIDTH || img.height >= MAX_HEIGHT) {
        const imageRatio = Math.min(MAX_WIDTH / img.width, MAX_HEIGHT / img.height);

        const newWidth = img.width * imageRatio;
        const newHeight = img.height * imageRatio;

        setImageStyleWidth(newWidth);
        setImageStyleHeight(newHeight);
      } else {
        setImageStyleWidth(img.width);
        setImageStyleHeight(img.height);
      }
    };

    img.src = imgUrl;
  };

  useEffect(() => {
    if (image) {
      let imgUrl = URL.createObjectURL(image);
      calculateImage(imgUrl, true, false);

      setImageUrl(imgUrl);
    }
  }, [image, imageHeight, imageWidth]);

  return (
    <div>
      <Head>
        <title>Envited</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainPage>
        <NavBar />
        <CreatePageContainer>
          <Heading>Create your Event</Heading>
          <PageBreak />
          <RowContainer>
            <TextInput name="eventName" placeholder="Georgia's B'day" value={eventName} setValue={setEventName} label="Event Name" />
            <PageBreak />
            <TextInput name="hostName" placeholder="Georgia" value={hostName} setValue={setHostName} label="Host's Name" />
          </RowContainer>
          <PageBreak />
          <RowContainer>
            <DateSelector name="StartTime" value={startTime} setValue={setStartTime} label="Start Time" />
            <DateSelector name="EndTime" value={endTime} setValue={setEndTime} label="End Time" />
          </RowContainer>
          <PageBreak />
          <TextInput name="Location" placeholder="My house!" value={location} setValue={setLocation} label="Location" />
          <PageBreak />
          <FileInput setFile={setImage} />
          {imageUrl != "" ? <ImageCanvas imageUrl={imageUrl} styleWidth={imageStyleWidth} styleHeight={imageStyleHeight} /> : null}
          {eventName != "" && hostName != "" && startTime != "" && endTime != "" && location != "" && imageUrl != "" ? (
            <Button cta>Next!</Button>
          ) : null}
        </CreatePageContainer>
      </MainPage>
    </div>
  );
};

export default Create;
