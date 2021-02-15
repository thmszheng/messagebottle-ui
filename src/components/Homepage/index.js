import React, { useState, useEffect, useRef } from "react";
import {
  HomePageContainer,
  ViewContainer,
  PaginationContainer,
  PageViewDot,
} from "./styled";
import PageViews from "./PageViews";

const MAX_PAGE_VIEW_INDEX = PageViews.length - 1;

const Homepage = () => {
  const [cursor, setCursor] = useState("initial");
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [currentViewIndex, setCurrentViewIndex] = useState(0);
  const [prevViewIndex, setPrevViewIndex] = useState(null);
  const [transitionDirection, setTransitionDirection] = useState("down");
  const isMouseUp = useRef(true);
  const pauseViewChange = useRef(false);

  const handleScroll = ({ deltaY }) => {
    if (pauseViewChange.current) {
      return;
    }

    if (deltaY > 0 && currentViewIndex !== MAX_PAGE_VIEW_INDEX) {
      setTransitionDirection("down");
      setPrevViewIndex(currentViewIndex);
      setCurrentViewIndex(currentViewIndex + 1);
      pauseViewChange.current = true;
    }

    if (deltaY < 0 && currentViewIndex !== 0) {
      setTransitionDirection("up");
      setPrevViewIndex(currentViewIndex);
      setCurrentViewIndex(currentViewIndex - 1);
      pauseViewChange.current = true;
    }
  };

  const handlePageViewClick = index => {
    if (pauseViewChange.current || index === currentViewIndex) {
      return;
    }

    setPrevViewIndex(currentViewIndex);

    if (currentViewIndex < index) {
      setTransitionDirection("down");
      setCurrentViewIndex(index);
      pauseViewChange.current = true;
    } else {
      setTransitionDirection("up");
      setCurrentViewIndex(index);
      pauseViewChange.current = true;
    }
  };

  const handleMouseDown = () => {
    setIsMouseDown(true);
    isMouseUp.current = false;
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
    isMouseUp.current = true;
    setCursor("initial");
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isMouseDown && !isMouseUp.current) {
        setCursor("grab");
      }
    }, 250);

    return () => {
      clearTimeout(timer);
    };
  }, [isMouseDown]);

  useEffect(() => {
    const timer = setTimeout(() => {
      pauseViewChange.current = false;
    }, 700);

    return () => {
      clearTimeout(timer);
    };
  }, [currentViewIndex]);

  useEffect(() => {
    window.addEventListener("wheel", handleScroll);
    window.addEventListener("touchmove", handleScroll);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("touchmove", handleScroll);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  });

  return (
    <HomePageContainer cursor={cursor}>
      <PaginationContainer>
        {PageViews.map((viewComponent, index) => (
          <PageViewDot key={index} isCurrentView={index === currentViewIndex} onClick={() => handlePageViewClick(index)}/>
        ))}
      </PaginationContainer>
      {PageViews.map((viewComponent, index) => {
        const isCurrentView = index === currentViewIndex;
        const isPrevView = index === prevViewIndex;
        const startTransition = isCurrentView && prevViewIndex != null;

        return (
          <ViewContainer
            key={index}
            isCurrentView={isCurrentView}
            isPrevView={isPrevView}
            transitionDirection={transitionDirection}
            startTransition={startTransition}
          >
            {viewComponent({ isCurrentView })}
          </ViewContainer>
        );
      })}
    </HomePageContainer>
  );
};

export default Homepage;
