import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const AnimatedTitle = ({title, containerClass}) => {
    useGSAP(() =>{
        gsap.to(".animated-char", {
            scrollTrigger: {
                trigger: ".animated-char",
                start: "top 80%",
                toggleActions: "play none none reverse",
            },
            y:0,
            stagger: 0.05,
            delay: 2.5,
            duration: 0.5,
            ease: "power2.out",
        })
    })

    return (
        <div className="flex justify-center items-center gap-4 mask-clip-path">
            {title.split(" ").map((word, index) => (
                <div key={index}>
                    {word.split("").map((char, i) => (
                        <div key={i} className={`animated-char ${containerClass}`}>
                            {char}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default AnimatedTitle