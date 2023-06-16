
import { Hero } from "../components/Hero";
import { Shape } from "../components/shape";
import { ArtistPack } from "../assets/db/artist";
import { ArtistFace } from "../components/minorComponents/artistFace";
import { MusicCards } from "../components/minorComponents/musicCards";
export const Home = ()=>{
    return(
        <section className="m-0 p-0 w-full">
            <Hero></Hero>
            <Shape headText={"Introducing our Artistes"}>
                {
                    ArtistPack.map((artist, x) =>{
                        return (
                            <>
                             <ArtistFace link={artist.link} name={artist.name}></ArtistFace>
                            </>
                        )
                    })
                }
            </Shape>
            <Shape headText={"Latest Release"}>
                <MusicCards></MusicCards>
                <MusicCards></MusicCards>
                <MusicCards></MusicCards>
            </Shape>
            <Shape headText={"Videos"}>

            </Shape>
        </section> 
    )
}