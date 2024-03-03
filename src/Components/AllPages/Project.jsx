"use client";
import PageHeading from "@/Components/PageHeading/PageHeading"
import ProjectCard from "@/Components/ProjectCard/ProjectCard";
import { addProjects } from "@/app/redux/Slices/projectSlice";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import loading from "../../../public/assets/loading.gif";

export default function Project() {
    const admin = useSelector((state) => state.user)
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchProject = async () => {
            try {
                const response = await axios.get("/api/project");
                if (response.status === 200) {
                    dispatch(addProjects(response?.data?.project))
                }
            } catch (error) {
                if (error?.response?.status === 500) {
                    toast(error?.response?.data?.msg)
                }
            }
        }
        fetchProject();
    }, [])
    const project = useSelector((state) => state.projects);
    const router = useRouter();
    return (
        <div id="project" className='w-full flex flex-col items-center mt-10'>
            <PageHeading
                title={"Projects"} />

            {
                project.length > 1 ?
                    <div className='w-full md:p-1 lg:p-2 xl:p-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-3 md:gap-3 lg:gap-5 xl:gap-7'>
                        {

                            project.map((item, index) => (
                                <div key={index} data-aos="zoom-in" data-aos-anchor-placement="top-center" data-aos-delay="200">
                                    <ProjectCard
                                        thumbnail={item.image}
                                        title={item.title}
                                        desc={item.desc}
                                        srcLink={item.srcLink}
                                        liveUrl={item.liveUrl}
                                    />
                                </div>
                            ))
                        }
                    </div>
                    :
                    <div data-aos="fade-left" data-aos-delay="200" className="w-[100%] flex items-center justify-center p-3 overflow-hidden">
                        <Image src={loading} alt="loading" width={400} height={400} className="object-cover mix-blend-color-burn" />
                    </div>
            }
            {
                admin.email === process.env.NEXT_PUBLIC_EMAIL_ID &&
                <button data-aos="zoom-in" data-aos-delay="1000" onClick={() => router.push("/addProject")} className={`w-[7rem] lg:w-[10rem] my-2 text-lg p-2 flex items-center justify-center bg-black text-white cursor-pointer transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-200`}>
                    Add Projects</button>
            }
        </div>
    )
}