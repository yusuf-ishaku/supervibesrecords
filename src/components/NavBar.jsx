import Logo from "../assets/images/logo.png";
import { Link } from 'react-router-dom';
export const NavBar = () =>{
    return (
        <nav className="flex flex-row items-center m-0 fixed w-full h-[5rem]  bg-white/30 backdrop-blur-sm z-50">
           <figure className="h-[100%] w-fit pl-4 mr-auto">
                <img className=" h-[100%]" width="auto" height='50%' src={Logo}></img>
           </figure>
           <section className="flex flex-row">
                <h3 className="active mx-4">
                    <Link>Home</Link>
                </h3>
                <h3 className="mx-4 text-white">
                   <Link>About Us</Link> 
                </h3>
                <h3 className="mx-4 text-white">
                    <Link>Artists</Link>
                </h3>
                <h3 className="mx-4 text-white">
                    <Link>Videos</Link>
                </h3>
                <h3 className="mx-4 text-white">
                   <Link>Music</Link> 
                </h3>
                <h3 className="mx-4 text-white">
                   <Link>Shop</Link>
                </h3>
                <h3 className="mx-4 text-white">
                    <Link>Tours and Tickets</Link>
                </h3>
                <h3 className="mx-4 show text-white opacity-100">
                    <Link>Contact Us</Link>
                </h3>
           </section>
        </nav>
    )
}