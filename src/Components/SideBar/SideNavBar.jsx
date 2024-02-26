"use client";
import Image from "next/image";
import { useState } from "react";
import logo from "../../../public/assets/logo.png";
import Link from "next/link";
import { menuList } from "@/data/MenuList.js";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function SideNavBar() {
    const [isActive, setIsActive] = useState(true);

    return (

        <div className={`sticky  z-50 bg-white left-0 top-0 ${isActive ? 'w-[25%] lg:w-[7%] xl:w-[7%]' : 'w-[50%] lg:w-[28%] xl:w-[28%]'} transition-all ease-in-out  duration-1000 h-screen shadow-xl flex flex-col items-center`}>
            <div className={`w-full my-4 p-1.5 flex items-start gap-4 ${isActive ? '' : 'border-b border-black'} `}>
                <Link href="/authUser">
                    <Image src={logo} className={`${isActive ? 'mx-auto' : 'ml-4'}`} width={60} height={60} alt="logo" />
                </Link>
                <span className={`${isActive ? 'hidden' : ' ml-1 my-auto text-xl lg:text-2xl xl:text-2xl font-semibold'} `}>Afzal Javed</span>
            </div>
            {
                isActive ?
                    <span className={`absolute ${isActive ? 'top-[4.5rem]' : 'top-[4rem]'} -right-5 rounded-full bg-white shadow-md  p-1 border  cursor-pointer`} onClick={() => setIsActive(prev => !prev)}><IoIosArrowForward className=" inline-block text-4xl font-semibold p-1 rounded-full" /></span>
                    :
                    <span className={`absolute ${isActive ? 'top-[4.5rem]' : 'top-[4rem]'} -right-5 rounded-full bg-white shadow-md  p-1 border  cursor-pointer`} onClick={() => setIsActive(prev => !prev)}><IoIosArrowBack className=" inline-block text-4xl font-semibold p-1 rounded-full" /></span>

            }
            <div className="w-full p-1 flex flex-col items-center ">
                <div className="w-[90%] p-1 mb-3 flex flex-col items-center gap-3 ">
                    {
                        menuList.map((item, index) => (
                            <Link className="w-full flex items-center text-lg my-1 cursor-pointer p-1.5 shadow-md bg-slate-100 gap-6" href={item.link} key={index}>
                                <span className={`inline-block text-3xl ${isActive ? 'm-auto' : 'ml-3'}`}>{item.icon}</span>
                                <span className={` ${isActive ? 'hidden' : 'p-1'}`}> {item.menu} </span>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>

    );
}
