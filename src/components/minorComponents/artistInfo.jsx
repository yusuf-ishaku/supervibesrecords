/* eslint-disable react/prop-types */
export const ArtistInfo = (props) =>{
    return(
        <div className={props.left ? "w-full flex md:flex-row flex-col items-center": "w-full flex md:flex-row-reverse flex-col items-center"}>
            <div className={props.left ? "w-full md:w-[33rem] h-[15rem] md:h-[28rem] bg-gray-400 rounded-md my-10 mr-0 md:mr-16" :  "w-full md:w-[33rem] h-[15rem] md:h-[28rem] my-10 bg-gray-400 rounded-md ml-0 md:ml-16" }>
                <img src={props.img}></img>
            </div>
            <section className="w-full md:w-1/2 text-center">
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