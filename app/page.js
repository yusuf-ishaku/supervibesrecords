// "use client"
import { Hero } from "./components/Hero";
import { Shape } from "./components/shape";
import { ArtistPack } from "./assets/db/artist";
import { YouTubeVideos } from "./assets/db/ytvids";
import { ArtistFace } from "./components/minorComponents/artistFace";
import { MusicCards } from "./components/minorComponents/musicCards";
import { Footer } from "./components/Footer";
import { MusicCardSkeleton } from "./components/minorComponents/musicCardSkeleton";
import { YoutubePlayer } from "./components/YoutubePlayer";
export default async function Home() {
  let data = await fetch("https://super-vibes-records.onrender.com/api/v1/audio");
  data = await data.json();
  // console.log( data );
  return (
    <>
      <Hero></Hero>
      <Shape headText={"Introducing our Artistes"} car={true} linkDir={"/artists"}>
          <div className="grid grid-cols-2 gap-2 md:flex md:flex-row items-center justify-center md:justify-between w-full">
          {
              ArtistPack.map((artist, y) =>{
                  return (
                      <>
                      <ArtistFace key={y} link={artist.link} name={artist.name}></ArtistFace>
                      </>
                  )
              })
          }
          </div>   
      </Shape>
      <Shape car={true} headText={"Latest Release"} linkDir={'/discography'}>
          <div className="flex md:flex-row flex-col">

            {
              data?.code === 200 ?
              data?.data.map(({imageUrl, artiste, title, audioUrl, _id},y)=>{
                return (
                  <MusicCards key={y} sound={audioUrl} img={imageUrl} artiste={artiste} id={_id} title={title}></MusicCards>
                )
              })
              :
              (
                <>
                <MusicCardSkeleton></MusicCardSkeleton>
                <MusicCardSkeleton></MusicCardSkeleton>  
                <MusicCardSkeleton></MusicCardSkeleton>
                </>
              
              )
            }
              
          </div>
      </Shape>
      <Shape car={false} headText={"Videos"} linkDir={'/music'}>
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 p-0 w-full">
            {
              YouTubeVideos.map((x,y) =>{
                  return(
                    <YoutubePlayer x={x} y={y}></YoutubePlayer>
                  )
              })
            }
          </div>  
      </Shape>
      <Footer></Footer>
    </>
  )
}
