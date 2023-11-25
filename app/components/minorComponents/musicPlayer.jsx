"use client"
import { useState, useEffect } from "react";
import useSound from "use-sound";
import {BiPlay, BiPause} from 'react-icons/bi';
import { IoMdDownload } from "react-icons/io"
export const MusicPlayer = ({audio}) =>{
   
    const [isPlaying, setIsPlaying] = useState(false);
    const [play, {pause, duration, sound}] = useSound(audio);
    const [minValue, setMinValue] = useState(0)
    const [currTime, setCurrTime] = useState({
        min: "",
        sec: ""
    });
    const [seconds, setSeconds] = useState();
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
          return () => clearInterval(interval);
        }, [sound]);
    const playSound = () =>{
       
        if(isPlaying){
            pause();
            setIsPlaying(false);
        }else{
            play();
            setIsPlaying(true)
        }
    }
    return(
        <>
        <div className="w-fit p-0 m-0 flex flex-row items-center">
            {isPlaying ? <BiPause size={"28px"} onClick={() => playSound()} cursor={"pointer"}  color="#FFAA00"></BiPause> : <BiPlay onClick={() => playSound()} cursor={"pointer"} size={"28px"} color="#FFAA00"></BiPlay>}
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
            <IoMdDownload cursor={"pointer"} size={"24px"} color="#FFAA00"></IoMdDownload>
        </div>
        </>
    )
}