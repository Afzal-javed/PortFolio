"use client";
import Input from "@/Components/Input/Input";
import PageHeading from "@/Components/PageHeading/PageHeading";
import { FaWhatsappSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneSquare } from "react-icons/fa";
import { useState } from "react";
import emailjs from "@emailjs/browser"
import { useRef } from "react";
import { toast } from "react-toastify";



export default function Contact() {
    const formRef = useRef();
    const [data, setData] = useState({
        name: "",
        email: "",
        message: ""
    })
    const senderName = data.name;
    const senderEmail = data.email;
    const templateParams = {
        ...data,
        senderName,
        senderEmail,
        publicKey: process.env.NEXT_PUBLIC_KEY
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }
    const sendMessage = (e) => {
        e.preventDefault();
        if (!data.name || !data.email || !data.message) {
            return toast("Please fill all the required field");
        } else {
            emailjs.sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, formRef.current, templateParams)
                .then((res) => {
                    console.log("Success", res.status, res.text);
                    toast("Message Sent Successfully")
                    setData(() => {
                        return {
                            name: "",
                            email: "",
                            message: ""
                        }
                    });
                },
                    (err) => {
                        console.log("Error", err);
                        toast("Failed Error occur")
                    })
        }

    }

    const handleCall = () => {
        const phoneNumber = process.env.NEXT_PHONE_NUMBER;
        const telUrl = `tel:${phoneNumber}`;
        window.open(telUrl, '_blank');
        // window.location.href = `${process.env.NEXT_PHONE_NUMBER}`;
    };
    const handleWhatsappClick = () => {
        const whatsappNumber = process.env.NEXT_PHONE_NUMBER;
        const whatsappUrl = `https://wa.me/${whatsappNumber}`;
        window.open(whatsappUrl, '_blank');
    };



    return (
        <div id="contact" className='w-full flex flex-col items-center mt-10'>
            <PageHeading
                title={"Contact Me"}
            />
            <div className="w-full flex flex-col items-center justify-center">
                <form ref={formRef} onSubmit={sendMessage} className="w-[90%] lg:w-[60%] xl:[60%] flex flex-col items-center justify-center shadow-lg p-2 lg:p-6 xl:p-8 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-200 ">
                    <Input
                        htmlFor={"name"}
                        label={"Name"}
                        name={"name"}
                        value={data.name}
                        onChange={handleChange}
                        type={"text"}
                        placeholder={"Enter your name..."}
                    />
                    <Input
                        htmlFor={"email"}
                        label={"Email"}
                        name={"email"}
                        value={data.email}
                        onChange={handleChange}
                        type={"email"}
                        placeholder={"Enter your email..."}
                    />
                    <div data-aos="fade-left" data-aos-delay="800" className="w-full flex flex-col items-center justify-between gap-1 my-2">
                        <label htmlFor="message" className="w-full text-start text-lg ">Message</label>
                        <textarea type="text" name="message" value={data.message} onChange={handleChange} id="message" rows={3} placeholder="Message..." className="w-full p-1.5 outline-none text-lg border-b-2 border-r-2" />
                    </div>
                    <button type='submit' className={`w-[8rem] my-4 text-sm p-3 bg-black text-white cursor-pointer transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-200 `}>Send Message</button>

                </form>
                <div className="w-[60%] lg:w-[40%] xl:w-[40%] flex items-center gap-4 text-4xl justify-center mt-8">
                    <span data-aos="fade-right" data-aos-delay="200" className="cursor-pointer" onClick={handleCall}><FaPhoneSquare className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-200" /></span>
                    <span data-aos="fade-up" data-aos-delay="400" className="cursor-pointer" onClick={handleWhatsappClick}><FaWhatsappSquare className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-200" /></span>
                    <span data-aos="fade-left" data-aos-delay="600" className="cursor-pointer text-5xl" onClick={() => window.open(`mailto:${process.env.NEXT_EMAIL_ID}`)}><MdEmail className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-200" /></span>
                </div>
            </div>
        </div>
    )
}