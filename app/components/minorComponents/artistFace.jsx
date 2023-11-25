/* eslint-disable react/prop-types */
export const ArtistFace = ({link, name}) =>{
    return (
        <>
         <div className="flex flex-col items-center w-full md:w-[15rem] h-80 mr-0 md:mr-10">
            <div className="rounded-xl object-cover w-full h-60">
                <img className="object-cover  h-full rounded-xl w-full" src={link} alt={name} />
            </div>
            <article className="mt-3">
                <h2 className="text-white text-xl">{name}</h2>
            </article>
         </div>
        </>
    )
}