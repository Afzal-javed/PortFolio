import Image from "next/image"
import BtnLink from "../BtnLink/BtnLink";

export default function ProjectCard({ thumbnail, title, desc, srcLink, liveUrl }) {
    const imageUrl = `data:image/png;base64,${thumbnail}`;
    return (
        <div className='flex flex-col p-1 items-center shadow-xl transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-200'>
            <div className=''>
                <Image src={imageUrl} alt='image' width={400} height={400} />
            </div>
            <div className='w-full min-h-60 p-2 flex flex-col items-start justify-center'>
                <h1 data-aos="fade-up" data-aos-delay="400" className='text-lg '>{title}</h1>
                <p className='w-full text-justify text-xs font-light'>{desc}</p>
                <div data-aos="fade-up" data-aos-delay="800" className='w-full p-2 flex-col lg:flex lg:flex-row xl:flex xl:flex-row items-center gap-3'>
                    <BtnLink
                        linkStyle={'w-[50%]'} href={srcLink} btnStyle={'w-full'} name={'Source Code'}
                    />
                    <BtnLink
                        linkStyle={'w-[50%]'} href={liveUrl} btnStyle={'w-full'} name={'Live URL'}
                    />
                </div>
            </div>
        </div>
    )
}