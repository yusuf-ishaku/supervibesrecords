"use client";
import { useState, useEffect, useRef } from "react";
import { BiPlay, BiPause } from "react-icons/bi";
import { IoMdShare } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import { setNowPlaying } from "@/app/data/dataslice/nowPlayingSlice";
import { copyContent } from "@/app/assets/utils/copyContent";
export const MusicPlayer = ({ audio, artiste, title, text }) => {
  const nowPlaying = useSelector((state) => state.nowPlaying.value);
  const dispatch = useDispatch();
  const audioRef = useRef(null);
  const [duration, setDuration] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [seconds, setSeconds] = useState(0);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current?.pause();
      setIsPlaying(false);
    } else {
      audioRef.current?.play();
      dispatch(setNowPlaying(audio));
      setIsPlaying(true);
    }
  };
  return (
    <>
      <div className="w-fit p-0 m-0 flex flex-row items-center">
        <button></button>
        {!isReady && audio ? (
          <span className="loader"></span>
        ) : isPlaying ? (
          <BiPause
            size={"28px"}
            onClick={() => togglePlayPause()}
            cursor={"pointer"}
            color="#FFAA00"
          ></BiPause>
        ) : (
          <BiPlay
            onClick={() => togglePlayPause()}
            cursor={"pointer"}
            size={"28px"}
            color="#FFAA00"
          ></BiPlay>
        )}
        {audio && (
          <audio
            ref={audioRef}
            preload="metadata"
            onDurationChange={(e) => {
              console.log(e);
              setDuration(e.currentTarget.duration);
            }}
            onEnded={()=> {
              setIsPlaying(false);
            }}
            onCanPlay={(e) => {
              setIsReady(true);
            }}
            onPlaying={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          >
            <source type="audio/mpeg" src={audio} />
          </audio>
        )}
        <input 
            style={{backgroundImage: `linear-gradient(#FFAA00, #FFAA00)`, backgroundSize: `${duration}% 100%` , cursor: "pointer" }} 
            type="range" 
            defaultValue={0} 
            min="0"
            default="0"
            value={duration}
            max={duration / 1000} 
            onChange={(e) => {
                audioRef.current?.seek([e.target.value]);
              }} />
        <IoMdShare
          onClick={() => copyContent(title, artiste, text)}
          color="#FFAA00"
          cursor={"pointer"}
        />
      </div>
    </>
  );
};
