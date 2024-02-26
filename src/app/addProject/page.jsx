"use client";
import Input from "@/Components/Input/Input";
import PageHeading from "@/Components/PageHeading/PageHeading";
import axios from "axios";
import { useRef } from "react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

// const { default: Input } = require("@/Components/Input/Input")
// const { default: PageHeading } = require("@/Components/PageHeading/PageHeading")
// const { ToastContainer } = require("react-toastify")
// const { default: DB } = require("../utils/DB")
// const fs = require('fs').promises;
// const { Projects } = require("../utils/model/projectSchema")


export default function AddProject() {
    const formRef = useRef();
    const [file, setFile] = useState(null);
    const [base64String, setBase64String] = useState('');
    const [data, setData] = useState({
        title: "",
        desc: "",
        srcLink: "",
        liveUrl: ""
    })
    const handleFile = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile && selectedFile instanceof Blob) {
            setFile(selectedFile);
            const reader = new FileReader();
            reader.onloadend = () => {
                setBase64String(reader.result.split(',')[1]);
            }
            reader.readAsDataURL(selectedFile);
        }

    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }
    const addProject = async (e) => {
        e.preventDefault();
        if (!data.title || !data.desc || !data.srcLink || !data.liveUrl || !file) {
            toast("Please all required field");
        }
        try {
            const projectData = {
                title: data.title,
                desc: data.desc,
                image: base64String,
                srcLink: data.srcLink,
                liveUrl: data.liveUrl
            }
            const res = await axios.post('/api/project', projectData)
            if (res?.status === 200) {
                toast(res?.data?.msg);
                setData(() => {
                    return {
                        title: "",
                        desc: "",
                        srcLink: "",
                        liveUrl: ""
                    }
                })
                setFile(null);
            }

        } catch (error) {
            if (error?.res?.status === 400) {
                toast(error?.res?.data?.msg);
            }
            if (error?.res?.status === 500) {
                toast(error?.res?.data?.msg);
            }
        }
    }
    return (
        <>
            <div className='w-full  flex-col lg:flex xl:flex items-center my-4 justify-center gap-5 p-5'>
                <PageHeading
                    title={"Add Projects"}
                />
                <ToastContainer />
                <div className="w-full flex flex-col items-center justify-center">
                    <form ref={formRef} onSubmit={addProject} className="w-[90%] lg:w-[60%] xl:[60%] flex flex-col items-center justify-center shadow-lg p-2 lg:p-6 xl:p-8 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-200 ">
                        <Input
                            htmlFor={"title"}
                            label={"Title"}
                            name={"title"}
                            value={data.title}
                            onChange={handleChange}
                            type={"text"}
                            placeholder={"Enter Title..."}
                        />
                        <Input
                            htmlFor={"file"}
                            label={"Image"}
                            name={"file"}
                            // value={file}
                            onChange={handleFile}
                            accept={'image/*'}
                            type={"file"}
                        // placeholder={"Enter Title..."}
                        />
                        <Input
                            htmlFor={"desc"}
                            label={"Description"}
                            name={"desc"}
                            value={data.desc}
                            onChange={handleChange}
                            type={"text"}
                            placeholder={"Enter Description..."}
                        />
                        <Input
                            htmlFor={"srcLink"}
                            label={"Source Link"}
                            name={"srcLink"}
                            value={data.srcLink}
                            onChange={handleChange}
                            type={"text"}
                            placeholder={"Enter Source Link..."}
                        />
                        <Input
                            htmlFor={"liveUrl"}
                            label={"Live URL"}
                            name={"liveUrl"}
                            value={data.liveUrl}
                            onChange={handleChange}
                            type={"text"}
                            placeholder={"Enter Live URL..."}
                        />

                        <button type='submit' className={`w-[8rem] my-4 text-sm p-3 bg-black text-white cursor-pointer transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-200 `}>Add Project</button>
                    </form>
                </div>
            </div>
        </>
    )
}
// const addProject = async (formData) => {
//     'use server'
//     await DB();
//     // const fileBuffer = await fs.readFile(formData.get('file').path);
//     const file = formData.get('file');

//     // Read the content of the file as an ArrayBuffer
//     const fileBuffer = await new Promise((resolve, reject) => {
//         const reader = new FileReader();
//         reader.onload = () => resolve(Buffer.from(reader.result));
//         reader.onerror = reject;
//         reader.readAsArrayBuffer(file);
//     });
//     console.log(fileBuffer);
//     // const result = await Projects.create({
//     //     title: formData.get('title'),
//     //     desc: formData.get('desc'),
//     //     image: fileBuffer,
//     //     srcLink: formData.get('srcLink'),
//     //     liveUrl: formData.get('liveUrl')
//     // })
//     // console.log(result);
// }

// const AddProject = () => {
//     return (
//         <>
//             <div className='w-full  flex-col lg:flex xl:flex items-center my-4 justify-center gap-5 p-5'>
//                 <PageHeading
//                     title={"Add Projects"}
//                 />
//                 <ToastContainer />
//                 <div className="w-full flex flex-col items-center justify-center">
//                     <form action={addProject} className="w-[90%] lg:w-[60%] xl:[60%] flex flex-col items-center justify-center shadow-lg p-2 lg:p-6 xl:p-8 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-200 ">
//                         <Input
//                             htmlFor={"title"}
//                             label={"Title"}
//                             name={"title"}
//                             type={"text"}
//                             placeholder={"Enter Title..."}
//                         />
//                         <Input
//                             htmlFor={"file"}
//                             label={"Image"}
//                             name={"file"}
//                             // value={file}
//                             accept={'image/*'}
//                             type={"file"}
//                         // placeholder={"Enter Title..."}
//                         />
//                         <Input
//                             htmlFor={"desc"}
//                             label={"Description"}
//                             name={"desc"}
//                             type={"text"}
//                             placeholder={"Enter Description..."}
//                         />
//                         <Input
//                             htmlFor={"srcLink"}
//                             label={"Source Link"}
//                             name={"srcLink"}
//                             type={"text"}
//                             placeholder={"Enter Source Link..."}
//                         />
//                         <Input
//                             htmlFor={"liveUrl"}
//                             label={"Live URL"}
//                             name={"liveUrl"}
//                             type={"text"}
//                             placeholder={"Enter Live URL..."}
//                         />

//                         <button type='submit' className={`w-[8rem] my-4 text-sm p-3 bg-black text-white cursor-pointer transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-200 `}>Add Project</button>
//                     </form>
//                 </div>
//             </div>
//         </>
//     )
// }
// export default AddProject;