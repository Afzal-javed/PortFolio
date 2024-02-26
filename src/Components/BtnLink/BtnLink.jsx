import Link from "next/link"

export default function BtnLink({ href, linkStyle, btnStyle, name }) {
    return (
        <Link href={href} target='_blank' className={`${linkStyle}`}>
            <button className={` my-2 text-sm p-2 bg-black text-white cursor-pointer transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-200 ${btnStyle}`}>{name}</button>
        </Link>
    )
}