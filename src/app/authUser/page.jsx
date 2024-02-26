"use client"
import Input from "@/Components/Input/Input";
import PageHeading from "@/Components/PageHeading/PageHeading";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function AuthUser() {
    const formRef = useRef();
    const router = useRouter();
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    })
    const handleChange = (e) => {
        const { name, value } = e.target
        setUser((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }
    const registerUser = async (e) => {
        e.preventDefault();
        if (!user.firstName || !user.lastName || !user.email || !user.password) {
            return toast("please fill the all required field")
        }
        try {
            const response = await axios.post('/api/auth', user)
            if (response?.status === 200) {
                toast(response?.data?.msg)
                router.push("/authLoginUser")
                setUser(() => {
                    return {
                        firstName: "",
                        lastName: "",
                        email: "",
                        password: ""
                    }
                })
            }
        } catch (error) {
            console.log(error?.response?.status);
            if (error?.response?.status === 400) {
                toast(error?.response?.data?.msg)
            }
            if (error?.response?.status === 500) {
                toast(error?.response?.data?.msg)
            }
        }
    }

    return (
        <>
            <ToastContainer />
            <div className='w-full  flex-col lg:flex xl:flex items-center my-4 justify-center gap-5 p-5'>
                <PageHeading
                    title={"Sign Up"}
                />
                <div className="w-full flex flex-col items-center justify-center">
                    <form ref={formRef} onSubmit={registerUser} className="w-[90%] lg:w-[60%] xl:[60%] flex flex-col items-center justify-center shadow-lg p-2 lg:p-6 xl:p-8 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-200 ">
                        <Input
                            htmlFor={"firstName"}
                            label={"FirstName"}
                            name={"firstName"}
                            value={user.firstName}
                            onChange={handleChange}
                            type={"text"}
                            placeholder={"Enter first Name..."}
                        />
                        <Input
                            htmlFor={"lastName"}
                            label={"Last Name"}
                            name={"lastName"}
                            value={user.lastName}
                            onChange={handleChange}
                            type={"text"}
                            placeholder={"Enter Last Name..."}
                        />
                        <Input
                            htmlFor={"email"}
                            label={"Email"}
                            name={"email"}
                            value={user.email}
                            onChange={handleChange}
                            type={"email"}
                            placeholder={"Enter Email..."}
                        />
                        <Input
                            htmlFor={"password"}
                            label={"Password"}
                            name={"password"}
                            value={user.password}
                            onChange={handleChange}
                            type={"password"}
                            placeholder={"Enter Password..."}
                        />
                        <button type='submit' className={`w-[8rem] my-4 text-sm p-3 bg-black text-white cursor-pointer transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-200 `}>Register</button>
                        <p>Already have an acount ?<Link href={"/authLoginUser"}>Login</Link></p>
                    </form>
                </div>
            </div>
        </>
    )
}

// import Input from "@/Components/Input/Input";
// import PageHeading from "@/Components/PageHeading/PageHeading";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import DB from "../utils/DB";
// import { User } from "../utils/model/userSchema";


// const registerUser=async(formData)=>{
//     "use server";
//     await DB();
//     const email = formData.get('email')
//     if (!formData.get('firstName') || !formData.get('lastName') || !formData.get('email') || !formData.get('password')){
//         returnconsole.log("please fill all the required field");
//     }else{
//         const isAlreadyExist=await User.findOne({email})
//         if(isAlreadyExist){
//             return console.log("Email already exist")
//         }else{
//             const result = await User.create({
//                     firstName: formData.get('firstName'),
//                     lastName: formData.get('lastName'),
//                     email: formData.get('email'),
//                     password: formData.get('password'),
//                 })
//                 console.log(result);
//         }
//     }
// }

// export default function AuthUser() {
//     return (
//         <>
//             <div className='w-full  flex-col lg:flex xl:flex items-center my-4 justify-center gap-5 p-5'>
//                 <PageHeading
//                     title={"Sign Up"}
//                 />
//                 <ToastContainer />
//                 <div className="w-full flex flex-col items-center justify-center">
//                     <form action={registerUser} className="w-[90%] lg:w-[60%] xl:[60%] flex flex-col items-center justify-center shadow-lg p-2 lg:p-6 xl:p-8 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-200 ">
//                         <Input
//                             htmlFor={"firstName"}
//                             label={"FirstName"}
//                             name={"firstName"}
//                             type={"text"}
//                             placeholder={"Enter first Name..."}
//                         />
//                         <Input
//                             htmlFor={"lastName"}
//                             label={"Last Name"}
//                             name={"lastName"}
//                             type={"text"}
//                             placeholder={"Enter Last Name..."}
//                         />
//                         <Input
//                             htmlFor={"email"}
//                             label={"Email"}
//                             name={"email"}
//                             type={"email"}
//                             placeholder={"Enter Email..."}
//                         />
//                         <Input
//                             htmlFor={"password"}
//                             label={"Password"}
//                             name={"password"}
//                             type={"password"}
//                             placeholder={"Enter Password..."}
//                         />
//                         <button type='submit' className={`w-[8rem] my-4 text-sm p-3 bg-black text-white cursor-pointer transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-200 `}>Register</button>
//                     </form>
//                 </div>
//             </div>
//         </>
//     )
// }