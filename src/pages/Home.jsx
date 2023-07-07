
import { Hero } from "../components/Hero";
import { Shape } from "../components/shape";
import { ArtistPack } from "../assets/db/artist";
import { ArtistFace } from "../components/minorComponents/artistFace";
import { MusicCards } from "../components/minorComponents/musicCards";
import ReactPlayer from "react-player/youtube";
import { YouTubeVideos } from "../assets/db/ytvids";
export const Home = ()=>{
    return(
        <section className="m-0 p-0 w-full">
            <Hero></Hero>
            <Shape headText={"Introducing our Artistes"} car={true}>
                  
                {
                    ArtistPack.map((artist) =>{
                        return (
                            <>
                             <ArtistFace link={artist.link} name={artist.name}></ArtistFace>
                            </>
                        )
                    })
                }
    
                
            </Shape>
            <Shape car={true} headText={"Latest Release"}>
                <div className="flex md:flex-row flex-col">
                    <MusicCards></MusicCards>
                    <MusicCards></MusicCards>
                    <MusicCards></MusicCards>
                </div>
            </Shape>
            <Shape car={false} headText={"Videos"}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-[auto]">
                   {
                    YouTubeVideos.map((x,y) =>{
                        return(
                            <div key={y} className="md:w-[34rem] w-full"><ReactPlayer width={"inherit"} controls={true} url={x}></ReactPlayer></div>
                        )
                    })
                   }
                </div>  
            </Shape>
        </section> 
    )
}