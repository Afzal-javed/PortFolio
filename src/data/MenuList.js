import { IoHome } from "react-icons/io5";
import { FcAbout } from "react-icons/fc";
import { AiFillProject } from "react-icons/ai";
import { MdCastForEducation } from "react-icons/md";
import { MdContactEmergency } from "react-icons/md";
import { PiHandbagFill } from "react-icons/pi";

export const menuList = [
    { icon: <IoHome />, link: "/", menu: "Home" },
    { icon: <FcAbout />, link: "/#about", menu: "About" },
    { icon: <AiFillProject />, link: "/#project", menu: "Projects" },
    { icon: <PiHandbagFill />, link: "/#skills", menu: "Skills" },
    { icon: <MdCastForEducation />, link: "/#education", menu: "Education" },
    { icon: <MdContactEmergency />, link: "/#contact", menu: "Contact Me" }]