
export default function Input({ accept, htmlFor, name, value, onChange, label, type, placeholder }) {
    return (
        <div data-aos="fade-right" data-aos-delay="400" className="w-full flex flex-col items-center justify-between gap-1 my-2">
            <label htmlFor={htmlFor} className="w-full text-start text-lg ">{label}</label>
            <input id={htmlFor} accept={accept} name={name} value={value} onChange={onChange} type={type} placeholder={placeholder} className="w-full p-1.5 outline-none text-lg border-b-2" />
        </div>
    )
}