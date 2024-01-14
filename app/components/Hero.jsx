"use client"
import { IntroHero } from "./IntroHero";
import { useRef } from "react";
import { Caro } from "./myCarousel";

export const Hero = () =>{
    return (
        <Caro>
          <IntroHero artist="Montala Jay" clas="ryan"></IntroHero>
          <IntroHero artist={"Drizel Pro"} clas="terry"></IntroHero>
          <IntroHero artist={'Terry G'} clas="friz"></IntroHero>
        </Caro>

    );
}