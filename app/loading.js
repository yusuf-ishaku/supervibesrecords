import Image from "next/image";
import Logo from "./assets/images/logo.png"
export default function Loading(){
    return (
        <>
          <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center  bg-[#0A0B14]">
            <Image src={Logo} alt={"Logo"}></Image>
          </div>
        </>
    )
}