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
    // console.log(duration);
    // const [minValue, setMinValue] = useState(0);
    const [fullTime, setFullTime] = useState({
      min: "",
      sec: "",
    })
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
            text: `Listen to this song ${title} by ${artiste} now on Super Vibes Records`,
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
        // console.log(sec);
        const min = Math.floor(sec / 60);
        const secRemain = Math.floor(sec % 60);
        // console.log(min, secRemain);
        setFullTime({
          min,
          sec: secRemain,
        })
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
                sec: sec - 1,
              });
            }
          }, 1000);
          if (audio !== nowPlaying){
            pause();
            setIsPlaying(false);
          }
          // console.log(secRemain)
          if ((audio === nowPlaying) && secRemain === currTime.sec) {
            console.log(secRemain)
            console.log("gree")
            setIsPlaying(false)
          }
          return () => clearInterval(interval);
    }, [sound, audio, nowPlaying, isPlaying]);
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
          {
            duration !== 0 || !duration ?
             isPlaying ?
              <BiPause size={"28px"} onClick={() => playSound()} cursor={"pointer"}  color="#FFAA00"></BiPause> 
              : 
              <BiPlay onClick={() => playSound()} cursor={"pointer"} size={"28px"} color="#FFAA00"></BiPlay>
            :
            <span className="loader">
            </span>
          }
           {/* <div className="flex flex-col items-start mt-6 w-fit justify-center"> */}
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
           {/* <span className="mt-2 text-xs font-mono text-[#f80]">{fullTime.min - currTime.min} : {currTime.sec}</span> */}
           {/* </div> */}
           
            <IoMdShare onClick={copyContent}  color="#FFAA00" cursor={"pointer"} />
           
        </div>
        </>
    )
}