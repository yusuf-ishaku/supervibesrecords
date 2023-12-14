"use client"
import { MusicPlayer } from "./musicPlayer"

export const MusicCards = ({img, title, artiste, sound, id}) =>{
    return(
        <>
            <div className="flex flex-row items-center mr-10 my-2 md:my-10 p-6 w-full md:w-[27rem] h-[8rem] sm:h-[10rem] border-[1px] rounded-lg border-[#FFAA0080] bg-[#6666661a]">
                <div className="w-1/4 md:w-32 object-fit rounded-lg">
                    <img className="object-fit rounded-lg" src={img ? img : "https://live.staticflickr.com/65535/52978370704_11a3f81fbd_m.jpg"} width="199" height="166" alt="Rectangle 19"/>
                </div>
                <article className="flex flex-col justify-start ml-4">
                    <h3 className="text-lg sm:text-2xl text-white leading-6">{title}</h3>
                    <h4 className="text-sm font-light text-white">{artiste}</h4>
                    <MusicPlayer artiste = {artiste} title={artiste} audio={sound} text={`https://supervibesrecords.com/discography/audio/${id}`}></MusicPlayer>
                </article>
            </div>
        </>
    )
}