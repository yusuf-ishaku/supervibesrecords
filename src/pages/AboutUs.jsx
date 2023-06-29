// import { useState } from "react";
import CountUp from "react-countup";
import { Shape } from "../components/shape";
import Logo from "../assets/images/logo.png";
import HandShake from "../assets/images/handshake.png";
import Label from "../assets/images/label.png";
import Camcorder from "../assets/images/camcorder.png";
import Loud from "../assets/images/uimage.png";
import Loud2 from "../assets/images/uimage1.png";
import Loud3 from "../assets/images/uimage2.png";
import Loud4 from "../assets/images/uimage3.png";
export const AboutUs = () =>{
    // const [nums, setNums] = useState(0);
    
    return (
      <>
        <section className="w-full h-fit p-0 m-0 bg-[#0A0B14]">
            <section className="w-full flex flex-row items-center justify-between h-[25rem] px-32 body bg-[#16182c]">
                <article className="flex flex-col items-center">
                        <header>
                            <h2 className="text-white text-4xl">
                                Artists
                            </h2>
                        </header>
                        <div className="text-[#FFAA00] text-3xl">
                            <span><CountUp end={10} duration={8}></CountUp></span>
                        </div>
                </article>
                <article className="flex flex-col items-center">
                        <header>
                            <h2 className="text-white text-4xl">
                                Music Recorded
                            </h2>
                        </header>
                    <div className="text-[#FFAA00] text-3xl">
                            <span><CountUp end={36} duration={8}></CountUp></span>
                    </div>
                </article>
                <article className="flex flex-col items-center">
                        <header>
                            <h2 className="text-white text-4xl">
                                Videos Shot
                            </h2>
                        </header>
                        <div className="text-[#FFAA00] text-3xl">
                            <span><CountUp end={19} duration={8}></CountUp></span>
                        </div>
                </article>
            </section>
            <section className="w-full p-16 px-16 flex flex-row items-center justify-around">
                <div className="bg-black flex items-center justify-center h-[15rem] rounded-md w-[23rem]">
                    <img src={Logo}></img>
                </div>
                <article className="w-2/5 text-white text-xl leading-6">
                    <p>
                        Super Vibez Records is a Nigerian music corporation record
                        label founded by record producer and recording artist 
                        Montala Jay on 8 May 2012.An African leading entertainment
                        company.Super Vibez taste for delivering of utmost value,
                        has inspired the company’s expansion into innovative services
                        such as partnerships, content production, publishing and
                        marketing.
                    </p>
                </article>
            </section>
            <Shape headText={"Our Services"} car={false}>
                <div className="w-full flex flex-row px-16 items-center justify-between">
                    <div className="flex flex-col justify-center items-center border-[#FFAA0080] rounded-md border-[1px] ml-10 bg-[#6666661a] w-[20rem] h-[20rem]">
                        <figure className="mb-4">
                            <img src={Label} alt="" />
                        </figure>
                        <figcaption>
                            <h2 className="text-[#FFAA0080] text-3xl">Record Deals</h2>
                        </figcaption>
                    </div>
                    <div className="flex flex-col justify-center items-center border-[#FFAA0080] rounded-md ml-10 border-[1px] bg-[#6666661a] w-[20rem] h-[20rem]">
                        <figure className="mb-4">
                            <img src={HandShake} alt="" />
                        </figure>
                        <figcaption>
                            <h2 className="text-[#FFAA0080] text-3xl">Brand Partnerships</h2>
                        </figcaption>
                    </div>
                    <div className="flex flex-col justify-center items-center border-[#FFAA0080] rounded-md ml-10 border-[1px] bg-[#6666661a] w-[20rem] h-[20rem]">
                        <figure className="mb-4">
                            <img src={Camcorder} alt="" />
                        </figure>
                        <figcaption>
                            <h2 className="text-[#FFAA0080] text-3xl">Content Production</h2>
                        </figcaption>
                    </div>
                </div>
            </Shape>
            <Shape car={false} headText={"Meet the Team"}>
                <div className="w-full flex flex-row justify-between items-center">
                    <section className="flex flex-col items-center mx-10">
                        <figure className="block rounded-full h-fit">
                            <img src={Loud} alt="" />
                        </figure>
                        <article className="flex flex-col items-center">
                            <h1 className="text-white text-2xl">Montala Jay</h1>
                            <figcaption>
                                <h2 className="text-[#FFAA0080] text-xl">CEO</h2>
                            </figcaption>
                        </article>
                    </section>
                    <section className="flex flex-col items-center mx-10">
                        <figure className="block rounded-full h-fit">
                            <img src={Loud2} alt="" />
                        </figure>
                        <article className="flex flex-col items-center">
                            <h1 className="text-white text-2xl">Montala Jay</h1>
                            <figcaption>
                                <h2 className="text-[#FFAA0080] text-xl">CO-founder</h2>
                            </figcaption>
                        </article>
                    </section>
                    <section className="flex flex-col items-center mx-10">
                        <figure className="block rounded-full h-fit">
                            <img src={Loud3} alt="" />
                        </figure>
                        <article className="flex flex-col items-center">
                            <h1 className="text-white text-2xl">Montala Jay</h1>
                            <figcaption>
                                <h2 className="text-[#FFAA0080] text-xl">Manager</h2>
                            </figcaption>
                        </article>
                    </section>
                    <section className="flex flex-col items-center mx-10">
                        <figure className="block rounded-full h-fit">
                            <img src={Loud4} alt="" />
                        </figure>
                        <article className="flex flex-col items-center">
                            <h1 className="text-white text-2xl">Montala Jay</h1>
                            <figcaption>
                                <h2 className="text-[#FFAA0080] text-xl">OC Affairs</h2>
                            </figcaption>
                        </article>
                    </section>
                   
                </div>
            </Shape>
        </section>
      </>
    );
}