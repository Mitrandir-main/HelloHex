import React from "react";
import "./Info.css";
import {
  ImgWrap,
  InfoWrapper,
  InfoContainer,
  InfoRow,
  TopLine,
  Heading,
  Subtitle,
  Img,
  Column1,
  Column2,
  TextWrapper,
} from "./InfoElements";

const InfoSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headline,
  darkText,
  discription,
  img,
  alt,
}) => {
  return (
    <InfoContainer lightBg={lightBg} id={id}>
      <InfoWrapper>
        <InfoRow imgStart={imgStart}>
          <Column1>
            <TextWrapper>
              <TopLine>{topLine}</TopLine>
              <div className="font">
                <Heading lightText={lightText}>{headline}</Heading>
              </div>
              <Subtitle darkText={darkText}> {discription}</Subtitle>
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrap>
              <Img src={img} alt={alt} />
            </ImgWrap>
          </Column2>
        </InfoRow>
      </InfoWrapper>
    </InfoContainer>
  );
};

export default InfoSection;
