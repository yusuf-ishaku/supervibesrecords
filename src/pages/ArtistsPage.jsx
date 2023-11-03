import { ArtistInfo } from "../components/minorComponents/artistInfo"
import { ArtistPack } from "../assets/db/artist"
import { Footer } from "../components/Footer"
export const ArtistsPage = () =>{
    return(
        <>
         <section className= "w-full px-4 md:px-24 pt-28 md:pt-[10rem] pb-10 bg-[#0A0B14]">
            <header className="w-full text-center text-3xl pb-4 md:pb-14">
                <h1 className="text-white">Artists</h1>
            </header>
            <div >

            {ArtistPack.map((elem, x) =>{
                return(
                    <ArtistInfo key={x} left={x % 2 ===0 ? true : false } artistName={elem.name} text={elem.about}></ArtistInfo>
                )
            })};
            </div>
        </section>
        <Footer></Footer>
        </>
       
    )
}