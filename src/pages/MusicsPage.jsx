import { useState } from "react";
import ReactPlayer from "react-player/youtube";
import { MusicCards } from "../components/minorComponents/musicCards";
import { YouTubeVideos } from "../assets/db/ytvids";
import { Footer } from "../components/Footer";
export const MusicsPage = () =>{
    const [setter, setSetter] = useState(true)
    return(
        <>
           <section className="w-full px-4 md:px-24 pt-28 md:pt-[10rem] pb-10 bg-[#0A0B14]">
             <header className="w-full text-center text-3xl pb-14">
                <h1 className="text-white">Music</h1>
            </header>
            <div className="w-full flex flex-row justify-around">
                <span onClick={() => setSetter(!setter)} className={setter ? "border-[#FFAA00] cursor-pointer active:bg-[#b6b5b33d] text-[#FFAA00] w-1/2 text-center pb-3 text-2xl border-b-[3px]": "cursor-pointer text-2xl text-white w-1/2 active:bg-[#b6b5b33d] text-center"}>
                    Videos
                </span>
                <span  onClick={() => setSetter(!setter)} className={setter ? "text-2xl active:bg-[#b6b5b33d]  cursor-pointer w-1/2 text-white text-center": "cursor-pointer border-[#FFAA00] text-[#FFAA00] w-1/2 active:bg-[#b6b5b33d] text-center pb-3 text-2xl border-b-[3px]"}>
                    Audio
                </span>
            </div>
            <section className="w-full py-10 grid grid-cols-1 md:grid-cols-2 gap-6 p-[auto]">
                {
                    setter ? ( 
                        <>
                            {YouTubeVideos.map((x,y) =>{
                                return(
                                    <div key={y} className="md:w-[34rem] w-full"><ReactPlayer style={{backgroundColor: "gray"}} width={"inherit"} controls={true} url={x}></ReactPlayer></div>
                                )
                            })}
                        </>
                        )
                    : 
                    (
                    <>
                        <MusicCards></MusicCards>
                        <MusicCards></MusicCards>
                        <MusicCards></MusicCards>
                        <MusicCards></MusicCards>
                    </>  
                    ) 
                }
            </section>
        </section>
        <Footer></Footer>
        </>
    )
}