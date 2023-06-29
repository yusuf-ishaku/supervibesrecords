
import { Hero } from "../components/Hero";
import { Shape } from "../components/shape";
import { ArtistPack } from "../assets/db/artist";
import { ArtistFace } from "../components/minorComponents/artistFace";
import { MusicCards } from "../components/minorComponents/musicCards";
import ReactPlayer from "react-player/youtube";
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
                <MusicCards></MusicCards>
                <MusicCards></MusicCards>
                <MusicCards></MusicCards>
            </Shape>
            <Shape car={true} headText={"Videos"}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-[auto]">
                    <div><ReactPlayer width={"34rem"} controls={true} url={"https://www.youtube.com/watch?v=1PWDxgqLmDA"}></ReactPlayer></div>
                    <div><ReactPlayer width={"34rem"} controls={true} url={"https://www.youtube.com/watch?v=1PWDxgqLmDA"}></ReactPlayer></div>
                    <div><ReactPlayer width={"34rem"} controls={true} url={"https://www.youtube.com/watch?v=1PWDxgqLmDA"}></ReactPlayer></div>
                    <div><ReactPlayer width={"34rem"} controls={true} url={"https://www.youtube.com/watch?v=1PWDxgqLmDA"}></ReactPlayer></div>
                    <div><ReactPlayer width={"34rem"} controls={true} url={"https://www.youtube.com/watch?v=1PWDxgqLmDA"}></ReactPlayer></div>
                    <div><ReactPlayer width={"34rem"} controls={true} url={"https://www.youtube.com/watch?v=1PWDxgqLmDA"}></ReactPlayer></div>
                    <div><ReactPlayer width={"34rem"} controls={true} url={"https://www.youtube.com/watch?v=1PWDxgqLmDA"}></ReactPlayer></div>
                </div>  
            </Shape>
        </section> 
    )
}