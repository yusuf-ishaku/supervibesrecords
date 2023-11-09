/* eslint-disable react/prop-types */
// import { Children } from "react"
"use client"
import { IoArrowForwardCircleOutline, IoArrowBackCircleOutline } from 'react-icons/io5';
import  Link  from 'next/link';
export const Shape = ({children, headText, car, linkDir}) =>{
    return(
        <section className="w-full h-fit bg-[#0A0B14] py-8 px-2 md:px-16">
            <div className="flex flex-col items-center mt-10 mb-10">
                <header>
                    <h2 className='text-white text-2xl md:text-3xl mb-1 '>{headText}</h2>
                </header>
                <div className="flex flex-row items-center">
                    <div className="p-0 m-0 w-16 h-0 mr-1 border-[#FFAA00] border-t-[1px]"></div>
                    <div className="bg-[#FFAA00] h-[0.28rem] w-[0.28rem] rounded-full border-0"></div>
                    <div className="p-0 m-0 w-16 h-0 ml-1 border-[#FFAA00] border-t-[1px]"></div>
                </div>
            </div>
            <div  className="flex flex-col items-center md:block overflow-x-hidden">
                {car ? <div  className="clan flex flex-col md:flex-row items-center justify-center md:justify-between w-fit p-2 md:p-5 carousel">
                    {children}
                </div>
                :
                <>
                {children}
                </>
                
                }
            </div>
            { car ? <div className="flex flex-row justify-between mt-4">
                <div className="flex flex-row w-16 justify-between">
                <IoArrowBackCircleOutline size={"30px"} color="gray" ></IoArrowBackCircleOutline>
                <IoArrowForwardCircleOutline   size={'30px'} color={"gray"} ></IoArrowForwardCircleOutline>
                </div>
                <Link href={linkDir}>
                    <button className='border-[#FFAA00] text-[#FFAA00] text-sm h-fit py-1 sm:py-2 px-3 sm:px-6 border-[1px] rounded-md'>
                        See more
                    </button>
                </Link>
                
            </div> : ""}
        </section>
    )
};