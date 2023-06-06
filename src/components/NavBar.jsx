import Logo from "../assets/images/logo.png"
export const NavBar = () =>{
    return (
        <nav className="flex flex-row items-center absolute w-[100vw] h-[5rem] px-8 bg-white/30 backdrop-blur-sm ">
           <figure className="h-[100%] w-fit pl-4 mr-auto">
                <img className="w-auto h-[100%]" width="auto" height='50%' src={Logo}></img>
           </figure>
           <section className="flex flex-row">
                <h3 className="active mx-4">
                    Home
                </h3>
                <h3 className="mx-4 text-white">
                    About Us
                </h3>
                <h3 className="mx-4 text-white">
                    Artists
                </h3>
                <h3 className="mx-4 text-white">
                    Videos
                </h3>
                <h3 className="mx-4 text-white">
                    Music
                </h3>
                <h3 className="mx-4 text-white">
                    Shop
                </h3>
                <h3 className="mx-4 text-white">
                    Tours and Tickets
                </h3>
                <h3 className="mx-4 show text-white opacity-100">
                    Contact Us
                </h3>
           </section>
        </nav>
    )
}