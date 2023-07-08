import Logo from "../assets/images/logo.png";
import { NavLink } from 'react-router-dom';
import { useContext } from "react";
import { DisplayHamContext } from "../App";
export const Nav2 = (props) =>{
    const {display } = useContext(DisplayHamContext);
    return(
        <section className={ display ? "flex-col flex sm:hidden pt-20 top-0 sticky  bg-[#0A0B14] w-full" : "hidden"}>
        <h3 className="mx-4 my-1 text-white">
            <NavLink to={'/'} >Home</NavLink>
        </h3>
        <h3 className="mx-4 my-1 text-white">
           <NavLink to={"/about"}>About Us</NavLink> 
        </h3>
        <h3 className="mx-4 my-1 text-white">
            <NavLink to={"/artists"}>Artists</NavLink>
        </h3>
        <h3 className="mx-4 my-1 text-white">
            <NavLink to={"/music"}>Music</NavLink>
        </h3>
        <h3 className="mx-4 my-1 text-white">
            <NavLink to={"/ticketsandtours"}>Tours and Tickets</NavLink>
        </h3>
        <h3 className="mx-4 my-1 show text-white opacity-100">
            <NavLink to={"/contact"}>Contact Us</NavLink>
        </h3>
   </section>
    )
}