import styled, { css, keyframes } from "styled-components";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const fadeAnimation = css`
  ${fadeIn} ease 1.2s;
`;

export const IntroductionContainer = styled.div`
  width: 100%;
  height: 100%;

  background-color: white;
`;

export const WaveOverlay = styled.div`
  position: absolute;
  z-index: 10;

  bottom: 0;
  left: 0;
  width: 100%;
  min-height: 400px;

  background-image: ${(props) => `url(${props.img})`};
  background-size: cover;
  background-position: center;

  -webkit-animation: ${({ isCurrentView }) => isCurrentView && fadeAnimation};
  -moz-animation: ${({ isCurrentView }) => isCurrentView && fadeAnimation};
  -ms-animation: ${({ isCurrentView }) => isCurrentView && fadeAnimation};
  -o-animation: ${({ isCurrentView }) => isCurrentView && fadeAnimation};
  animation: ${({ isCurrentView }) => isCurrentView && fadeAnimation};
`;
