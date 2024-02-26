"use client"
import Input from "@/Components/Input/Input";
import PageHeading from "@/Components/PageHeading/PageHeading";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { loginUser } from "../redux/Slices/userSlice";
import 'react-toastify/dist/ReactToastify.css';

export default function LoginUser() {
    const router = useRouter();
    const formRef = useRef();
    const dispatch = useDispatch();
    const [user, setUser] = useState({
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
    const loginUsers = async (e) => {
        e.preventDefault();
        if (!user.email || !user.password) {
            return toast("please fill the all required field")
        }
        try {
            const response = await axios.post('/api/loginUser', user)
            if (response?.status === 200) {
                toast("User Login successfully")
                console.log(response?.data?.user);
                dispatch(loginUser(response?.data?.user))
                router.push("/");
                setUser(() => {
                    return {
                        email: "",
                        password: ""
                    }
                })
            }
        } catch (error) {
            console.log(error?.response?.status);
            if (error?.response?.status === 404) {
                toast(error?.response?.data?.msg)
            }
            if (error?.response?.status === 401) {
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
                    title={"Login"}
                />
                <div className="w-full flex flex-col items-center justify-center">
                    <form ref={formRef} onSubmit={loginUsers} className="w-[90%] lg:w-[60%] xl:[60%] flex flex-col items-center justify-center shadow-lg p-2 lg:p-6 xl:p-8 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-200 ">
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
                        <button type='submit' className={`w-[8rem] my-4 text-sm p-3 bg-black text-white cursor-pointer transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-200 `}>Login</button>
                        <p>Do not have an acount ?<Link href={"/authUser"}>Register</Link></p>
                    </form>
                </div>
            </div>
        </>
    )
}