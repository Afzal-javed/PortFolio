import Link from "next/link";

export default function Button({ href, name, icon, onClick }) {
    return (
        <Link data-aos="zoom-in" data-aos-delay="400" href={href} className=" p-1 flex items-center justify-center ">
            <button onClick={onClick} className={`w-[7rem] lg:w-[10rem] my-2 text-lg p-2 flex items-center justify-center bg-black text-white cursor-pointer transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-200`}>
                <span className='inline-block text-2xl mr-2'>{icon}</span> {name}</button>
        </Link>
    )
}