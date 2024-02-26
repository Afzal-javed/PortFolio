"use client";
import Link from "next/link"
import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import SideNavBar from "../SideBar/SideNavBar";


export default function MenuBar({ headerData, divStyle }) {
    const [isActive, setIsActive] = useState(false);
    return (
        <div className={`${divStyle} flex items-center justify-end mr-10`}>
            <ul className="text-lg hidden sm:hidden md:hidden lg:flex xl:flex items-center gap-7">
                {
                    headerData.map((data, index) => (
                        <Link href={data.link} key={index}>
                            {data.menu}
                        </Link>
                    ))
                }
            </ul>
            <span className="relative text-4xl font-semibold cursor-pointer lg:hidden xl:hidden"><CiMenuBurger onClick={() => setIsActive(prev => !prev)} /></span>
            <SideNavBar
                isActive={isActive}
                setIsActive={setIsActive}
            />
        </div>
    )
}