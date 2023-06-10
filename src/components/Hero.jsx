// import Domi from "../assets/images/firstimage.png"

import { IntroHero } from "./IntroHero";

export const Hero = () =>{
    return (
      <section className="flex items-center  justify-center hero h-[42rem] ">
        <IntroHero artist = "Montala Jay" cl="ryan flex justify-center w-full h-full bg-cover bg-blend-multiply bg-gray-500 bg-no-repeat"></IntroHero>
      </section>
    );
}