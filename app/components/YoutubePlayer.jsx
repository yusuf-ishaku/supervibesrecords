"use client"
import ReactPlayer from "react-player/youtube";
export const YoutubePlayer = (props) => {
    return   <div key={props.y} className="w-full"><ReactPlayer width={"inherit"} style={{backgroundColor: "gray"}} controls={true} url={props.x}></ReactPlayer></div>
}