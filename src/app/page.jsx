"use client";
import About from "@/Components/AllPages/About";
import Contact from "@/Components/AllPages/Contact";
import Education from "@/Components/AllPages/Education";
import HomePage from "@/Components/AllPages/Home";
// import HomePage from "./home/page";
// import About from "./about/page";
// import Project from "./project/page";
// import Skill from "./skills/page";
// import Education from "./education/page";
// import Contact from "./contact/page";
import Project from "@/Components/AllPages/Project";
import Skill from "@/Components/AllPages/Skills";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease',
            once: false,
            anchorPlacement: "top-bottom"
        });
    }, [])

    return (
        <div className="w-full p-5 lg:p-10 xl:p-10 ">
            <ToastContainer />
            <HomePage />
            <About />
            <Project />
            <Skill />
            <Education />
            <Contact />
        </div>
    )
    // return (
    //     <div className="w-full p-5 lg:p-10 xl:p-10 ">
    //         <ToastContainer />
    //         <HomePage />
    //         <About />
    //         <Project />
    //         <Skill />
    //         <Education />
    //         <Contact />
    //     </div>
    // )
}