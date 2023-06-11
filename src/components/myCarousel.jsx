import { useRef } from "react";
import { IoArrowForwardCircleOutline, IoArrowBackCircleOutline } from 'react-icons/io5'

export const Caro =({children}) => {
    const carousel = useRef();
    const carouselParent = useRef()
    const testPhase = () =>{
        let carouselContents = carousel.current.children
        console.log(carouselContents);
        carouselContents[0].classList.add("translate-x-[0vw]");
        carouselContents[1].classList.add("translate-x-[-100vw]");
    }   
    
    return (
        <>
            <div className="flex items-center fixed  left-[45%] justify-center  flex-row">
                <IoArrowBackCircleOutline size={"34px"} color="white" style={{marginRight: '10px'}}></IoArrowBackCircleOutline>
                <IoArrowForwardCircleOutline size={'34px'} color="white" style={{marginLeft: '10px'}}></IoArrowForwardCircleOutline>
               
            </div>
            <button onClick={()=> testPhase()} className="absolute z-50 bg-red-500 px-4 p-2 text-white">Test button</button>
            <div ref={carouselParent} className="w-[100vw]  overflow-hidden">
                <div ref={carousel} className="flex w-fit  overflow-x-hidden ">
                {children}
                </div>
            </div>
        </>
    );
}