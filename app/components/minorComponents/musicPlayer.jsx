"use client"
import { useState, useEffect } from "react";
import useSound from "use-sound";
import {BiPlay, BiPause} from 'react-icons/bi';
import { IoMdShare } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import { setNowPlaying } from "@/app/data/dataslice/nowPlayingSlice";
export const MusicPlayer = ({audio,artiste, title, text}) =>{
    const nowPlaying = useSelector((state) => state.nowPlaying.value);
    const dispatch = useDispatch();
    const [isPlaying, setIsPlaying] = useState(false);
    const [play, {pause, duration, sound}] = useSound(audio);
    const [minValue, setMinValue] = useState(0)
    const [currTime, setCurrTime] = useState({
        min: "",
        sec: ""
    });
    const [seconds, setSeconds] = useState();
    async function copyContent() {
      if (navigator.share) {
        try {
          await navigator.share({
            title: title,
            text: `Listen to this song ${title} by ${artiste} now on Super Vibes Records.com`,
            url: text
          })
          
        }catch (error){
         await navigator.clipboard.writeText(text);
          console.log('Content copied to clipboard');
          console.log("Share not supported on this browser, do it the old way");
        }
      }
    }
    useEffect(() => {
        const sec = duration / 1000;
        const min = Math.floor(sec / 60);
        const secRemain = Math.floor(sec % 60);
        const time = {
          min: min,
          sec: secRemain
        };
        const interval = setInterval(() => {
            if (sound) {
              setSeconds(sound.seek([])); // setting the seconds state with the current state
              const min = Math.floor(sound.seek([]) / 60);
              const sec = Math.floor(sound.seek([]) % 60);
              setCurrTime({
                min,
                sec,
              });
            }
          }, 1000);
          if (audio !== nowPlaying){
            pause();
            setIsPlaying(false);
          }

          return () => clearInterval(interval);
    }, [sound, audio, nowPlaying]);
    const playSound = () =>{

        if(isPlaying){
            pause();
            setIsPlaying(false);
        }else{
            play();
            setIsPlaying(true);
            dispatch(setNowPlaying(audio));
            // console.log(nowPlaying)
        }
    }
    return(
        <>
        <div className="w-fit p-0 m-0 flex flex-row items-center">
            {isPlaying ? 
            <BiPause size={"28px"} onClick={() => playSound()} cursor={"pointer"}  color="#FFAA00"></BiPause> 
            : 
            <BiPlay onClick={() => playSound()} cursor={"pointer"} size={"28px"} color="#FFAA00"></BiPlay>
            }
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
            <IoMdShare onClick={copyContent}  color="#FFAA00" cursor={"pointer"} />
        </div>
        </>
    )
}