"use client"
import { useState, useEffect } from "react";
// import useSound from "use-sound";
import {BiPlay, BiPause} from 'react-icons/bi';
import { IoMdShare, IoIosStarOutline  } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import { setNowPlaying } from "@/app/data/dataslice/nowPlayingSlice";

export const MusicNowPlaying = ({audio, title, artiste, text}) =>{
    const nowPlaying = useSelector((state) => state.nowPlaying.value);
    console.log(audio)
    const dispatch = useDispatch();
    const [seconds, setSeconds] = useState();
    async function copyContent() {
       if (navigator.share) {
        try {
          await navigator.share({
            title: title,
            text: `Listen to this song ${title} by ${artiste} now on Super Vibes Records`,
            url: text
          });
          await navigator.clipboard.writeText(text);
          console.log('Content copied to clipboard');
        }catch (error){
         
          console.log("Share not supported on this browser, do it the old way");
        }
      }
      }
    const playSound = () =>{
      // console.log(isPlaying)
        if(isPlaying){
            pause();
            setIsPlaying(false);
        }else{
            play();
            setIsPlaying(true);
            dispatch(setNowPlaying(audio));
            console.log(nowPlaying)
        }
    }
    return(
        <>
         <div className="w-[70%] p-0 m-0 flex flex-row items-center justify-center mt-3" >
            <input 
            style={{backgroundImage: `linear-gradient(#FFAA00, #FFAA00)`, backgroundSize: `${seconds}% 100%` , cursor: "pointer" }} 
            type="range" 
            defaultValue={0} 
            min="0"
            default="0"
            value={seconds}
            max={duration / 1000} 
            onChange={(e) => {
                sound.seek([e.target.value]);
              }} />
           
        </div>
        <div className="flex flex-row w-[70%] justify-between items-center mt-5">
        <IoIosStarOutline  color="#FFAA00"/>
        {isPlaying ? 
            <BiPause size={"34px"} onClick={() => playSound()} cursor={"pointer"}  color="#FFAA00"></BiPause> 
            : 
            <BiPlay onClick={() => playSound()} cursor={"pointer"} size={"34px"} color="#FFAA00"></BiPlay>
        }
        <IoMdShare onClick={copyContent}  color="#FFAA00" cursor={"pointer"} />
        </div>
       
        </>
    )
}