/* eslint-disable react/prop-types */
// import { Children } from "react"
import { IoArrowForwardCircleOutline, IoArrowBackCircleOutline } from 'react-icons/io5';
export const Shape = ({children, headText, car}) =>{
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
            <div  className=" overflow-x-hidden">
                <div  className="clan flex flex-col md:flex-row items-center justify-center md:justify-between w-fit p-5 carousel">
                    {children}
                </div>
            </div>
            { car ? <div className="flex flex-row justify-between">
                <div className="flex flex-row w-16 justify-between">
                <IoArrowBackCircleOutline size={"30px"} color="gray" ></IoArrowBackCircleOutline>
                <IoArrowForwardCircleOutline   size={'30px'} color={"gray"} ></IoArrowForwardCircleOutline>
                </div>
                <button className='border-[#FFAA00] text-[#FFAA00] p-2 px-6 border-[1px] rounded-md bg-[]'>
                    See more
                </button>
            </div> : ""}
        </section>
    )
};