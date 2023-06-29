/* eslint-disable react/no-unescaped-entities */
import Cuate from "../assets/images/cuate.png"
// import { Shape } from "../components/shape"
import {IoLocationSharp, } from 'react-icons/io5';
import { IoMdMail } from "react-icons/io"
// import { BiSolidPhone } from "react-icons/bi"
import { FaPhoneAlt} from 'react-icons/fa'
export const Contact = () =>{
    return (
        <section className= "w-full px-24 pt-[10rem] pb-10 bg-[#0A0B14]">
            <header className="w-full text-center text-3xl">
                <h1 className="text-white">Contact Us</h1>
            </header>
            <section className="flex flex-row items-center justify-around">
                <div className="flex flex-row justify-center items-center w-3/6">
                    <img className="w-[20rem]" src={Cuate}></img>
                </div>
                <form className="w-3/6 flex flex-col justify-center items-center">
                    <header className="text-center mb-6">
                        <h1 className="text-white text-xl">
                            Let's Grow your Music
                        </h1>
                    </header>
                    <input className="rounded-xl focus:outline-none text-white bg-[#4D4D4D] w-full p-2 px-4 mb-3 placeholder:text-[#666]" placeholder="Name"></input>
                    <input className="rounded-xl focus:outline-none text-white bg-[#4D4D4D] w-full p-2 px-4 mb-3 placeholder:text-[#666]" placeholder="Email"></input>
                    <textarea rows={4} className="rounded-2xl focus:outline-none text-white bg-[#4D4D4D] w-full p-2 px-4 mb-3 placeholder:text-[#666]" placeholder="Why would you love to join our brand?"></textarea>
                    <button className="bg-[#FFAA00] w-fit text-white p-2 px-5 rounded-lg" type="submit">Submit</button>
                </form>
            </section>
            <section>
                <div className="flex flex-col items-center mt-10 mb-10">
                    <header>
                        <h2 className='text-white text-3xl mb-1 '>OR</h2>
                    </header>
                    <div className="flex flex-row items-center">
                        <div className="p-0 m-0 w-16 h-0 mr-1 border-[#FFAA00] border-t-[1px]"></div>
                        <div className="bg-[#FFAA00] h-[0.28rem] w-[0.28rem] rounded-full border-0"></div>
                        <div className="p-0 m-0 w-16 h-0 ml-1 border-[#FFAA00] border-t-[1px]"></div>
                    </div>
                </div>
                <div className="w-full flex flex-row justify-between">
                    <div className="w-1/2 text-center">
                        <h2 className="text-2xl text-white">Visit our office</h2>
                        <span className="text-white flex flex-row">
                            <IoLocationSharp color="#FFAA00" style={{marginRight: "10px"}}></IoLocationSharp>
                            No. 15 Carlston Drive, Uyo
                        </span>
                    </div>
                    <div className="w-1/2 text-center">
                        <h2 className="text-2xl text-white">Contact us Via</h2>
                        <span className="text-white flex flex-row">
                            <FaPhoneAlt color="#FFAA00" style={{marginRight: "10px"}}></FaPhoneAlt>
                            090590393820, 0909684930202
                        </span>
                        <span className="text-white flex flex-row">
                            <IoMdMail color="#FFAA00" style={{marginRight: "10px"}}></IoMdMail>
                            supervibezrecords@gmail.com
                        </span>
                    </div>
                </div>
            </section>
                
        </section>
    )
}