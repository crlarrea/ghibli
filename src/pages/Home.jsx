import React, { useReducer, useEffect } from "react";
import { Carousel } from "../components/Carousel";
import { HeroReducer } from "../reducers/MainReducer";
import { Hero } from "../components/Hero";
import { Footer } from "../components/Footer";

export const Home = () => {
  const [currentHero, dispatch] = useReducer(HeroReducer, {});
  return (
    <>
      <Hero props={currentHero} />
      <Carousel props={{ dispatch: dispatch }} />
      <Footer/>
    </>
  );
};
