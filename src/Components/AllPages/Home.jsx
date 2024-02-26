"use client"
import Image from "next/image";
import myPic from "../../../public/assets/myPic.png";
import TypeWriterAnimation from "@/Components/TypeAnimation/TypeAmination";
import { AiFillContacts } from "react-icons/ai";
import { IoCloudDownload } from "react-icons/io5";
import Link from "next/link";

export default function HomePage() {
    return (
        <div className="w-full h-screen flex items-center justify-center ">
            <div data-aos="fade-right" data-aos-delay="400" className={`w-[90%] flex flex-col items-start justify-center text-justify lg:text-justify xl:text-justify bg-cover bg-center`}>
                <span className="text-xl lg:text-2xl xl:text-2xl font-semibold">Hello, I am </span>
                <span className="text-3xl lg:text-5xl xl:text-5xl font-bold">AFZAL <span className="text-red-800">JAVED</span> </span>
                <TypeWriterAnimation
                    style={'text-2xl lg:text-4xl xl:text-4xl font-bold inline-block'} />
                <p >I am MERN Stack developer,and I have build many projects during learning MERN stack like chatting application, e-commerce food application and pdf sharing application.I have done training in Java during in my collage period and currently I am looking for the job.</p>
                <div data-aos="zoom-in" data-aos-delay="600" className='w-full  flex items-center gap-2 lg:gap-5'>
                    <Link data-aos="zoom-in" data-aos-delay="400" href="/#contact" className=" p-1 flex items-center justify-center ">
                        <button className={`w-[7rem] lg:w-[10rem] my-2 text-lg p-2 flex items-center justify-center bg-black text-white cursor-pointer transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-200`}>
                            <span className='inline-block text-2xl mr-2'><AiFillContacts /></span> Hire Me</button>
                    </Link>
                    <a className=" p-1 flex items-center justify-center "
                        href="/assets/Afzal_Resume.pdf"
                        download="Afzal_Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className={`w-[7rem] lg:w-[10rem] my-2 text-lg p-2 flex items-center justify-center bg-black text-white cursor-pointer transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-200`}>
                            <span className='inline-block text-2xl mr-2'><IoCloudDownload /></span> Resume</button>
                    </a>
                </div>
            </div>
            <div data-aos="fade-left" data-aos-delay="800" className="hidden  md:flex lg:flex xl:flex relative">
                <Image src={myPic} alt="mypic" width={400} height={600} className='object-cover object-top self-end' />
                <div className='absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-zinc-50 to-transparent'></div>
            </div>
        </div>
    )
}