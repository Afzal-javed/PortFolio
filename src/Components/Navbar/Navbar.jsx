import logo from "../../../public/assets/logo.png";
import Image from "next/image";
import MenuBar from "./MenuBar";
import { headerData } from "@/data/MenuList";


export default function Navbar() {


    return (
        <div className="w-full h-[4rem] sticky top-0 z-10 flex items-center justify-between bg-slate-500">
            <div className="max-w-lg flex items-center justify-center gap-4 ml-10">
                <Image src={logo} alt="Logo" width={55} height={55} />
                PortFolio
            </div>
            <div className="w-full">
                <MenuBar
                    headerData={headerData}

                />
            </div>
            {/* <div className="w-[60%] flex flex-col items-center min-h-[102rem] bg-red-300">
                <h1 className="text-black">hello</h1>
            </div> */}

        </div>
    )
}