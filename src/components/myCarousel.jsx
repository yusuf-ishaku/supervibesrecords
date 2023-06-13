import { useEffect, useRef } from "react";
import { IoArrowForwardCircleOutline, IoArrowBackCircleOutline } from 'react-icons/io5'

export const Caro =({children}) => {
    const carousel = useRef();
    const carouselParent = useRef();
  
   
    return (
        <>
            <div className="flex items-center fixed z-50  left-[45%] justify-center mt-[32rem]  flex-row">
                <IoArrowBackCircleOutline size={"34px"} color="white" style={{marginRight: '10px'}}></IoArrowBackCircleOutline>
                <IoArrowForwardCircleOutline size={'34px'} color="white" style={{marginLeft: '10px'}}></IoArrowForwardCircleOutline>
            </div>
            <button className="absolute z-50 bg-red-500 px-4 p-2 text-white">Test button</button>
            <div ref={carouselParent} className="w-[100vw] overflow-x-hidden">
                <div ref={carousel} className="clan flex w-fit carousel ">
                {children}
                </div>
            </div>
        </>
    );
}