import Link from "next/link"

export const IntroHero = ({clas, artist}) =>{
    return(
        <section className={`${clas} clan flex justify-center w-[100vw] py-4 h-auto bg-cover bg-blend-multiply bg-gray-500 bg-no-repeat`}>
        <article className="flex flex-col items-center text-center mt-36 sm:mt-64  ">
          <header>
            <h2 className="text-[#E6E6E6] font-bold text-4xl sm:text-6xl mb-4 sm:mb-6">
              Super Vibes Records
            </h2>
          </header>
          <section className="w-4/5 text-center">
            <p className="text-[#E6E6E6] text-sm sm:text-lg tracking-[.08rem]">
              <span className="mx-30">
                Welcome to Super Vibes Records, 
                where music takes center stage.
              </span>
              <br></br> 
              We are more than just a record label, we're your gateway to the world of sounds and rhythms. 
              Explore, create, and experience music like never before.
            </p>
            <Link href={"/about"}>
              <button className="relative z-10 bg-[#FFAA00] text-[#E6E6E6] w-fit mt-4 rounded-md p-2 px-4">
                Learn more
              </button>
            </Link>
          </section>
          <figcaption className="mt-14 sm:mt-24 w-full sm:pr-32 text-center sm:text-right">
              <span className=" text-[#E6E6E6] text-2xl sm:text-4xl opacity-60 ">
                  {artist}
              </span>
          </figcaption>
        </article>
      </section>
    )
}