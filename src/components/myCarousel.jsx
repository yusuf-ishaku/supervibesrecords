import { useRef } from "react";

export const Caro =({children}) => {
    const carousel = useRef();
    const carouselParent = useRef()
    const testPhase = () =>{
        let carouselContents = carousel.current.children
        console.log(carouselContents);
        
    }
    return (
        <>
            <button onClick={()=> testPhase()} className=" absolute bg-red-500 px-4 p-2 text-white">Test button</button>
            <div ref={carouselParent} className="w-[100vw]  overflow-hidden">
                <div ref={carousel} className="flex w-fit  overflow-x-hidden ">
                {children}
                </div>
            </div>
        </>
    );
}