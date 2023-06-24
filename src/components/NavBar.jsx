import Logo from "../assets/images/logo.png";
import { NavLink,} from 'react-router-dom';
export const NavBar = () =>{
    return (
        <nav className="flex flex-row items-center m-0 fixed w-full h-[5rem]  bg-white/30 backdrop-blur-sm z-50">
           <figure className="h-[100%] w-fit pl-4 mr-auto">
                <img className=" h-[100%]" width="auto" height='50%' src={Logo}></img>
           </figure>
           <section className="flex flex-row">
                <h3 className="mx-4 text-white">
                    <NavLink to={'/'} >Home</NavLink>
                </h3>
                <h3 className="mx-4 text-white">
                   <NavLink to={"/about"}>About Us</NavLink> 
                </h3>
                <h3 className="mx-4 text-white">
                    <NavLink>Artists</NavLink>
                </h3>
                <h3 className="mx-4 text-white">
                    <NavLink>Videos</NavLink>
                </h3>
                <h3 className="mx-4 text-white">
                   <NavLink>Music</NavLink> 
                </h3>
                <h3 className="mx-4 text-white">
                   <NavLink>Shop</NavLink>
                </h3>
                <h3 className="mx-4 text-white">
                    <NavLink>Tours and Tickets</NavLink>
                </h3>
                <h3 className="mx-4 show text-white opacity-100">
                    <NavLink>Contact Us</NavLink>
                </h3>
           </section>
        </nav>
    )
}