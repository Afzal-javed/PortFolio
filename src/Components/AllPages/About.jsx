import Image from "next/image";
import aboutPic from "../../../public/assets/aboutPic.png";
import PageHeading from "@/Components/PageHeading/PageHeading";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

export default function About() {
    return (
        <div id="about" className='w-full  flex-col lg:flex xl:flex items-center justify-center gap-5'>
            <PageHeading
                title={"About Me"}
            />
            <div className='w-full flex-col lg:flex lg:gap-6 xl:gap-8 lg:flex-row xl:flex xl:flex-row items-center justify-center'>
                <div data-aos="fade-up" data-aos-delay="400" className='w-[50%] m-auto lg:w-[40%] lg:h-[30%] xl:w-[40%] xl:h-[30%]  rounded-full lg:rounded-none overflow-hidden bg-red-300'>
                    <Image src={aboutPic} alt="image" width={400} height={400} className='object-cover' />
                </div>
                <div data-aos="fade-up" data-aos-delay="800" className='w-full flex flex-col items-center justify-center text-lg mt-5'>
                    <h1 className='w-full text-2xl font-semibold lg:text-start xl:text-start lg:mb-4'>Hello Afzal </h1>
                    <p className='w-full text-justify'>I'm embarking on an exciting programming journey. I'll start by mastering Java, equipping myself with the skills to tackle complex problems through data structures and algorithms. This foundation will empower me to think logically and craft efficient solutions.
                        Next, I'll dive into the immersive realm of the MERN stack. With tools like React and Node.js at my disposal, I'll construct modern web applications that captivate users with dynamic interfaces and seamless functionality. It's a thrilling challenge, but one that I'm excited to undertake.</p>
                    <div className="w-full flex items-center gap-4 text-4xl justify-center mt-8">
                        <span data-aos="fade-right" data-aos-delay="200" className="cursor-pointer" onClick={() => window.open('https://www.linkedin.com/in/afzal-javed/')}><FaLinkedin className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-200" /></span>
                        <span data-aos="fade-up" data-aos-delay="400" className="cursor-pointer" onClick={() => window.open('https://github.com/Afzal-javed')}><FaGithub className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-200" /></span>
                        <span data-aos="fade-up" data-aos-delay="600" className="cursor-pointer" onClick={() => window.open('https://www.facebook.com/afzal.javed.313?mibextid=ZbWKwL')}><FaFacebookSquare className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-200" /></span>
                        <span data-aos="fade-left" data-aos-delay="800" className="cursor-pointer" onClick={() => window.open('https://www.instagram.com/shaikh_afzal_javed?igsh=bzRubWJicWhrM3By')}><FaInstagramSquare className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-200" /></span>
                    </div>
                </div>
            </div>
        </div>
    )
}