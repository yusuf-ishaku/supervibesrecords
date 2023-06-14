import { useEffect, useRef, useState } from "react";
import { IoArrowForwardCircleOutline, IoArrowBackCircleOutline } from 'react-icons/io5'

export const Caro =({children}) => {
    const carousel = useRef();
    const carouselParent = useRef();
    const [mapper, setMapper] = useState(0);
    // const [onFirstSlide, setOnFirstSlide] = useState(true);
    // const [currSlide, setCurrSlide] = useState(document.querySelector(".current_slide"))
    useEffect(() =>{
        let slides = carousel.current.children;
        slides[0].classList.add("current_slide");
        console.log("mmm");
    },);
    let forwardMove = () =>{
        let slides = Array.from(carousel.current.children);
        let value = slides.length;
        console.log("fn")
        console.log(slides);
        let currentSlide = document.querySelector(".current_slide");
        let targetSlide = currentSlide.nextElementSibling;
        let minard = slides.indexOf(currentSlide);
        setMapper(minard);
        let tinard = slides.indexOf(targetSlide);
        targetSlide.classList.add("current_slide")
        currentSlide.classList.remove("current_slide");
        carousel.current.style.transform = `translateX(-${tinard * 100}vw)`;

    }
 
    return (
        <>
            <div className="flex items-center fixed z-50  left-[45%] justify-center mt-[32rem]  flex-row">
                <IoArrowBackCircleOutline size={"34px"} color="gray" style={{marginRight: '10px'}}></IoArrowBackCircleOutline>
                <IoArrowForwardCircleOutline onClick={() => forwardMove()}  size={'34px'} color={mapper >= 2 ? "gray" : "white"} style={{marginLeft: '10px', zIndex: mapper >= 2 ? '-10px': '0'}}></IoArrowForwardCircleOutline>
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