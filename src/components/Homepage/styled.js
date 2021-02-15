import styled, { css, keyframes } from "styled-components";

const slideInByDirection = (direction) => keyframes`
  0% {
    transform: ${direction === "up" ? "translateY(100%)" : "translateY(-100%)"};
  }
  100% {
    transform: translateY(0);
  }
`;

const calculateTranslateAnimation = ({
  isCurrentView,
  startTransition,
  transitionDirection,
}) =>
  isCurrentView && startTransition
    ? css`
        ${slideInByDirection(transitionDirection)} ease 0.7s forwards;
      `
    : "none";

export const HomePageContainer = styled.section`
  position: relative;
  width: 100%;
  height: calc(100vh - 80px);
  overflow: hidden;

  cursor: ${({ cursor }) => cursor};
`;

export const ViewContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  inset: 0;
  z-index: -1;

  ${({ isPrevView }) =>
    isPrevView &&
    `
    z-index: 98;
  `};

  ${({ isCurrentView }) =>
    isCurrentView &&
    `  
    position: relative;
    z-index: 99;
  `};

  -webkit-animation: ${calculateTranslateAnimation};
  -moz-animation: ${calculateTranslateAnimation};
  -ms-animation: ${calculateTranslateAnimation};
  -o-animation: ${calculateTranslateAnimation};
  animation: ${calculateTranslateAnimation};
`;

export const PaginationContainer = styled.div`
  position: absolute;
  z-index: 100;
  top: 35%;
  left: 50px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const PageViewDot = styled.div`
  width: 17px;
  height: 17px;
  margin: 4px 0 4px 0;
  cursor: pointer;

  background-color: transparent;
  border-radius: 50%;
  border: 4px solid grey;

  opacity: ${({ isCurrentView }) => (isCurrentView ? "60%" : "25%")};

  &:hover {
    opacity: 60%;
  }
`;
