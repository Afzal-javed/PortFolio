import PageHeading from "@/Components/PageHeading/PageHeading";
import { skillList } from "@/data/skill";

export default function Skill() {

    return (
        <div id="skills" className='w-full flex flex-col items-center mt-10'>
            <PageHeading
                title={"My Skills"} />
            <div className='w-full flex-col items-center justify-center lg:flex lg:flex-row xl:flex xl:flex-row lg:flex-wrap  xl:flex-wrap lg:items-start xl:items-start lg:justify-start xl:justify-start p-2  lg:gap-3'>
                {
                    skillList.map((item, index) => (
                        <div data-aos="zoom-in" data-aos-anchor-placement="top-center" data-aos-delay="200" key={index} className='w-full mb-2 lg:mb-0 xl:mb-0 lg:w-[10rem] xl:w-[10rem] text-xl bg-black text-white cursor-pointer transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-200 p-2 flex items-center justify-center gap-3'>
                            {item.icon}
                            <span className='text-lg'>{item.skill}</span>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}