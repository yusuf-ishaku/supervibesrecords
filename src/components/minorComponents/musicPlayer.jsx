import OneSong from "../../assets/db/song1.mp3"
import { useState, } from "react";
import useSound from "use-sound";
import {BiPlay, BiPause} from 'react-icons/bi';
import { IoMdDownload } from "react-icons/io"
export const MusicPlayer = () =>{
    const [isPlaying, setIsPlaying] = useState(false);
    const [play, {pause, duration, sound}] = useSound(OneSong);
    const [minValue, setMinValue] = useState(0)
    const [currTime, setCurrTime] = useState({
        min: "",
        sec: ""
    });
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
            {isPlaying ? <BiPause size={"28px"} cursor={"pointer"} onClick={playSound} color="#FFAA00"></BiPause> : <BiPlay onClick={playSound} cursor={"pointer"} size={"28px"} color="#FFAA00"></BiPlay>}
            <input style={{backgroundImage: `linear-gradient(#FFAA00, #FFAA00)`, backgroundSize: `${minValue}% 100%` , cursor: "pointer" }} type="range" defaultValue={0}  onChange={(e)=>{setMinValue(e.target.value)}} />
            <IoMdDownload cursor={"pointer"} size={"24px"} color="#FFAA00"></IoMdDownload>
        </div>
        </>
    )
}