"use client"

import { MusicNowPlaying } from "./components/MusicNow";
import { useGetAudioQuery } from "@/app/data/api/audioSlice";
import Image from "next/image";
export async function generateMetadata({ params, searchParams }, parent) {
  // read route params
  const id = params.audio
 
  // fetch data
  const audio = await fetch(`https://super-vibes-records.onrender.com/api/v1/audio/${id}`).then((res) => res.json())
 
  // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || []
 
  return {
    title: audio.data.title,
    openGraph: {
      images: audio.data.imageUrl,
    },
  }
}
export default function Page({params}) {
    console.log(params);
    let {data: audio, isFetching, isLoading} = useGetAudioQuery(params.audio);
    console.log(audio)
  return (
    <section className="w-[100vw] h-[100vh] bg-[#0A0B14] flex flex-col items-center ">
        <div className="bg-gray-600 w-[80%] h-fit rounded-md mt-28">
             <img className="rounded-md" src={audio?.data.imageUrl}>
            </img>
        </div>
        <header className="mt-4 flex flex-col items-center">
        <h2 className="text-[#fa0] text-2xl">
            { isLoading ? "Song Title" : audio?.data.title}
        </h2>
        <h3 className="text-white text-sm">
            { isLoading ?  "Singer" : audio?.data.artiste }
        </h3>
        </header>
       <MusicNowPlaying audio={audio?.data}  text={`https://supervibesrecords.com/discography/audio/${params.audio}`}></MusicNowPlaying>
    </section>
  )
}