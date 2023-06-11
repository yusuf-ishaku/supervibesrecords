export const IntroHero = ({clas, artist}) =>{
    return(
        <section className={`${clas} clan flex justify-center w-[100vw] py-4 h-full bg-cover bg-blend-multiply bg-gray-500 bg-no-repeat`}>
        <article className="flex flex-col items-center text-center  mt-64  ">
          <header>
            <h2 className="text-[#E6E6E6] font-bold text-6xl mb-6">
              Super Vibes Records
            </h2>
          </header>
          <section className="w-4/5 text-center">
            <p className="text-[#E6E6E6] text-lg tracking-[.08rem]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
              dignissim mauris, vestibulum consectetur mi. Phasellus elementum
              dui nec ex sodales, quis semper
            </p>
            <button onClick={() => console.log("red")} className="relative z-10 bg-[#FFAA00] text-[#E6E6E6] w-fit mt-4 rounded-md p-2 px-4">
              See more
            </button>
          </section>
          <figcaption className="mt-24 w-full pr-32 text-right">
              <span className=" text-[#E6E6E6] text-4xl opacity-60 ">
                  {artist}
              </span>
          </figcaption>
        </article>
      </section>
    )
}