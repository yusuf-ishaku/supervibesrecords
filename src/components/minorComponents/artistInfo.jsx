/* eslint-disable react/prop-types */
export const ArtistInfo = (props) =>{
    return(
        <div className={props.left ? "w-full flex flex-row items-center": "w-full flex flex-row-reverse items-center"}>
            <div className={props.left ? "w-[33rem] h-[28rem] bg-gray-400 rounded-md my-10 mr-16" :  "w-[33rem] h-[28rem] my-10 bg-gray-400 rounded-md ml-16" }>
                <img src={props.img}></img>
            </div>
            <section className="w-1/2">
                <header>
                    <h1 className="text-white text-3xl">{props.artistName}</h1>
                    <fig>
                        
                    </fig>
                </header>
                <article>
                    <p className="text-white text-xl">
                      {props.text}  
                    </p>
                </article>
            </section>
        </div>
    )
}