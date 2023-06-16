import { MusicPlayer } from "./musicPlayer"


export const MusicCards = () =>{
    return(
        <>
            <div className="flex flex-row items-center mr-10 my-10 p-6 w-[27rem] h-fit border-[1px] rounded-lg border-[#FFAA0080] bg-[#6666661a]">
                <div className="w-32 object-fit rounded-lg">
                    <img className="object-fit rounded-lg" src="https://live.staticflickr.com/65535/52978370704_11a3f81fbd_m.jpg" width="199" height="166" alt="Rectangle 19"/>
                </div>
                <article className="flex flex-col justify-start ml-4">
                    <h3 className="text-2xl text-white leading-6">Dey for You</h3>
                    <h4 className="text-base font-light text-white">Montala Jay</h4>
                    <MusicPlayer></MusicPlayer>
                </article>
            </div>
        </>
    )
}