import { MusicNowPlaying } from "./components/MusicNow";
export default async function Page({params}) {
  let audio = await fetch(`https://super-vibes-records.onrender.com/api/v1/audio/${params.audio}`).then((res) => res.json());
  return (
    <section className="md:h-fit h-[100vh] bg-[#0A0B14] flex flex-col items-center "> 
      <div className="bg-gray-600 w-80 h-72 rounded-md mt-28 md:mt-32">
             <img className="rounded-md" src={audio?.data.imageUrl}>
            </img>
        </div>
        <header className="mt-12 flex flex-col items-center">
        <h2 className="text-[#fa0] text-2xl">
            { isLoading ? "Song Title" : audio?.data.title}
        </h2>
        <h3 className="text-white text-sm">
            { isLoading ?  "Singer" : audio?.data.artiste }
        </h3>
        </header>
    {audio?.data && <MusicNowPlaying artiste={audio?.data.artiste} title={audio?.data.title} audio = {isLoading ? null : audio?.data.audioUrl} text={`https://supervibesrecords.com/discography/audio/${params.audio}`}></MusicNowPlaying>} 
    </section>
  )
}