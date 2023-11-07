import Logo from  "../assets/images/logo.png";
import {FaFacebookF, FaYoutube} from "react-icons/fa";
import { RiInstagramFill} from "react-icons/ri";
import Image from "next/image";

export const Footer = () =>{
    return(
        <footer className="h-[200px] bg-[#0A0B14] flex flex-col items-center justify-center pt-12 py-12">
            <Image src={Logo} alt="Logo Super vibes records" ></Image>
            <div className="flex flex-row justify-evenly">
                <FaFacebookF
                className="text-[#FFAA00] mx-6"
                size={30}
                ></FaFacebookF>
                <FaYoutube
                 className="text-[#FFAA00] mx-6"
                 size={30}
                ></FaYoutube>
                <RiInstagramFill
                 className="text-[#FFAA00] mx-6"
                 size={30}
                ></RiInstagramFill>
            </div>
        </footer>
    )
}