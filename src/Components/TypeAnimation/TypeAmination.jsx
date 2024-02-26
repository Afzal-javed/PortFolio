"use client"
import { TypeAnimation } from 'react-type-animation';

export default function TypeWriterAnimation({ style }) {
    return (
        <TypeAnimation
            sequence={[
                // Same substring at the start will only be typed out once, initially
                'React Js Developer',
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                'MERN Stack Developer',
                1000,
                'Full Stack Developer',
                1000,
                'Software Developer',
                1000
            ]}
            wrapper="span"
            speed={50}
            className={`${style}`}
            repeat={Infinity}
        />
    );
};