import React from "react";
import { IntroductionContainer, WaveOverlay } from "./styled";

const waveImages = ["wave1.svg", "wave2.svg", "wave3.svg"];

const Introduction = ({ isCurrentView }) => {
  return (
    <IntroductionContainer>
      {waveImages.map((img, index) => (
        <WaveOverlay
          isCurrentView={isCurrentView}
          img={`./images/${img}`}
          key={index}
        />
      ))}
    </IntroductionContainer>
  );
};

export default Introduction;
