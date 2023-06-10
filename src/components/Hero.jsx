// import Domi from "../assets/images/firstimage.png"

export const Hero = () =>{
    return (
      <section className="flex items-center  justify-center hero h-[42rem] ">
        <section className="ryan flex justify-center w-full h-full bg-cover bg-blend-multiply bg-gray-400 bg-no-repeat">
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
              <button className="bg-[#FFAA00] text-[#E6E6E6] w-fit mt-4 rounded-md p-2 px-4">
                See more
              </button>
            </section>
            <figcaption className="mt-32 w-full pr-32 text-right">
                <span className=" text-[#E6E6E6] text-4xl opacity-60 ">
                    Montala Jay
                </span>
            </figcaption>
          </article>
         
        </section>
      </section>
    );
}