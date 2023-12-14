// import Image from 'next/image'
"use client"
import { Hero } from "./components/Hero";
import { Shape } from "./components/shape";
import { ArtistPack } from "./assets/db/artist";
import { ArtistFace } from "./components/minorComponents/artistFace";
import { useGetAudiosQuery } from "./data/api/audioSlice";
import { MusicCards } from "./components/minorComponents/musicCards";
// import ReactPlayer from "react-player/youtube";
// import { YouTubeVideos } from "./assets/db/ytvids";
import { Footer } from "./components/Footer";
export default function Home() {
  const { data } = useGetAudiosQuery();
  console.log( data );
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
                <MusicCards></MusicCards>
                <MusicCards></MusicCards>
                <MusicCards></MusicCards>
                </>
              
              )
            }
              
          </div>
      </Shape>
      {/* <Shape car={false} headText={"Videos"} linkDir={'/music'}>
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 p-0 w-full">
            {
              YouTubeVideos.map((x,y) =>{
                  return(
                      <div key={y} className="w-full"><ReactPlayer width={"inherit"} style={{backgroundColor: "gray"}} controls={true} url={x}></ReactPlayer></div>
                  )
              })
            }
          </div>  
      </Shape> */}
      <Footer></Footer>
    </>
  )
}
