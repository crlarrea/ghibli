import React, { useReducer, useEffect } from "react";
import { Carousel } from "../components/Carousel";
import { HeroReducer } from "../reducers/MainReducer";
import { Hero } from "../components/Hero";

export const Home = () => {
  const [currentHero, dispatch] = useReducer(HeroReducer, {});
  useEffect(() => {
    console.log(currentHero);
  }, [currentHero]);
  return (
    <>
      <Hero props={currentHero} />
      <Carousel props={{ dispatch: dispatch }} />
    </>
  );
};
