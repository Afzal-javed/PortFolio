

export default function PageHeading({ title, headingStyle }) {
    return (
        <div data-aos="fade-up" data-aos-delay="200" className='w-full flex items-center justify-center lg:justify-start xl:justify-start mb-6'>
            <h1 className={`text-2xl font-semibold ${headingStyle}`}>{title}</h1>
        </div>
    )
}