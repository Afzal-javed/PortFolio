import PageHeading from "@/Components/PageHeading/PageHeading";
import Image from "next/image";
import aktu from "../../../public/assets/aktu.webp";

export default function Education() {
    return (
        <div id="education" className='w-full flex flex-col items-center mt-10'>
            <PageHeading title={"Education"} />
            <div className='w-full flex-col p-2 lg:p-4 xl:p-4 gap-3 lg:gap-4 xl:gap-4 items-center justify-center lg:flex lg:flex-row xl:flex xl:flex-row lg:items-start xl:items-start'>
                <div data-aos="fade-right" data-aos-delay="400" className='w-full lg:w-[50%] xl:w-[50%] shadow-lg transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-500'>
                    <Image src={aktu} alt='image' className='p-2' />
                </div>
                <div data-aos="fade-left" data-aos-delay="600" className='w-full lg:w-[50%] xl:w-[50%] flex flex-col items-start justify-center shadow-lg transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-500'>
                    <h1 className='text-2xl font-semibold p-2'>Dr.A.P.J Abdul Kalam Technical University</h1>
                    <p className='text-xl p-1 ml-3'>Lucknow,U.P</p>
                    <p className='text-xl font-semibold p-1 ml-3'>Bachelor Of Technology</p>
                    <p className='w-full text-lg flex flex-wrap ml-3 items-center p-1'>Computer Science and Engineering <span className='text-lg'>2019-2023</span> </p>
                    <p className='text-sm text-justify mx-3 p-0.5 mb-3 '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum quo nulla quod deleniti nostrum impedit rem sed rerum expedita praesentium aliquam tempore voluptate saepe ad, nihil maxime recusandae repellendus ipsa!</p>
                </div>
            </div>
        </div>
    )
}