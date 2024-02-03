"use client"
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
import { Footer } from "../components/Footer";
import Image from "next/image";
export default function Page(){
    return (
        <>
        <section className="w-full h-fit p-0 m-0 bg-[#0A0B14]">
        <section className="w-full flex flex-col md:flex-row pt-28 md:pt-0 pb-20 md:pb-0 items-center justify-between h-fit md:h-[25rem] px-4 md:px-32 body bg-[#16182c]">
            <article className="flex flex-col items-center my-10 md:my-0">
                    <header>
                        <h2 className="text-white text-4xl">
                            Artists
                        </h2>
                    </header>
                    <div className="text-[#FFAA00] text-3xl">
                        <span><CountUp end={2} duration={8}></CountUp></span>
                    </div>
            </article>
            <article className="flex flex-col items-center my-10 md:my-0">
                    <header>
                        <h2 className="text-white text-4xl">
                            Music Recorded
                        </h2>
                    </header>
                <div className="text-[#FFAA00] text-3xl">
                        <span><CountUp end={75} duration={8}></CountUp></span>
                </div>
            </article>
            <article className="flex flex-col items-center">
                    <header>
                        <h2 className="text-white text-4xl">
                            Videos Shot
                        </h2>
                    </header>
                    <div className="text-[#FFAA00] text-3xl">
                        <span><CountUp end={17} duration={8}></CountUp></span>
                    </div>
            </article>
        </section>
        <section className="w-full md:p-16 p-4 md:px-16 flex flex-col md:flex-row  items-center justify-around">
            <div className="bg-black flex items-center justify-center h-[15rem] rounded-md w-full md:w-[23rem]">
                <Image src={Logo}></Image>
            </div>
            <article className="w-full md:w-2/5 text-white text-xl pt-4 md:pt-0 text-center md:text-left leading-7 md:leading-6">
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
            <div className="w-full flex flex-col md:flex-row px-4 md:px-16 items-center justify-between">
                <div className="flex flex-col justify-center items-center border-[#FFAA0080] rounded-md border-[1px] ml-0 md:ml-10 p-6 md:p-0 mb-4 md:mb-0 bg-[#6666661a] w-full h-auto md:w-[20rem] md:h-[20rem]">
                    <figure className="mb-4">
                        <Image src={Label} alt=""></Image>
                    </figure>
                    <figcaption>
                        <h2 className="text-[#FFAA0080] text-2xl md:text-3xl">Record Deals</h2>
                    </figcaption>
                </div>
                <div className="flex flex-col justify-center items-center border-[#FFAA0080] rounded-md border-[1px] ml-0 md:ml-10 p-6 md:p-0 mb-4 md:mb-0 bg-[#6666661a] w-full h-auto md:w-[20rem] md:h-[20rem]">
                    <figure className="mb-4">
                        <Image src={HandShake} alt="" ></Image>
                    </figure>
                    <figcaption>
                        <h2 className="text-[#FFAA0080] text-2xl md:text-3xl">Brand Partnerships</h2>
                    </figcaption>
                </div>
                <div className="flex flex-col justify-center items-center border-[#FFAA0080] rounded-md border-[1px] ml-0 md:ml-10 p-6 md:p-0 mb-4 md:mb-0 bg-[#6666661a] w-full h-auto md:w-[20rem] md:h-[20rem]">
                    <figure className="mb-4">
                        <Image src={Camcorder} alt=""></Image>
                    </figure>
                    <figcaption>
                        <h2 className="text-[#FFAA0080] text-2xl md:text-3xl">Content Production</h2>
                    </figcaption>
                </div>
            </div>
        </Shape>
        <Shape car={false} headText={"Meet the Team"}>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6 md:flex md:flex-row md:justify-between md:items-center ">
                <section className="flex flex-col items-center mx-10">
                    <figure className="block rounded-full h-fit">
                        <img src={"https://live.staticflickr.com/65535/53356101245_bdb7d97592_b.jpg"} alt="Montala Jay"></img>
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
                        <img  src={"https://live.staticflickr.com/65535/53356101255_83b06e4cc5_b.jpg"} alt="Drizel Pro"></img>
                    </figure>
                    <article className="flex flex-col items-center">
                        <h1 className="text-white text-2xl">Drizel Pro</h1>
                        <figcaption>
                            <h2 className="text-[#FFAA0080] text-xl">Artist</h2>
                        </figcaption>
                    </article>
                </section>
               
            </div>
        </Shape>
    </section>
    <Footer></Footer>
    </>
    )
}
