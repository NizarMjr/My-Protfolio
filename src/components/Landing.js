import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { TypeAnimation } from 'react-type-animation';

const Landing = () => {
    const color = useSelector(state => state.selectedColor)
    const [showFirstBtn, setShowFirstBtn] = useState(false);
    const [showSecondBtn, setShowSecondBtn] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setShowFirstBtn(true);
        }, 1500)
        setTimeout(() => {
            setShowSecondBtn(true);
        }, 1700)
    }, [])
    return (
        <div className="relative bg-landing relative w-[100%] h-[100vh] bg-no-repeat bg-cover before:content-[''] before:w-[100%] before:h-[100%] before:absolute before:top-[0] before:left-[0] before:bg-[rgb(0,0,0,70%)]">
            <div className="w-full h-full relative w-[100%] text-white text-center absolute z-[20] max-[640px]:top-[10%] sm:top-[20%] left-[50%] translate-x-[-50%]">
                <TypeAnimation
                    sequence={[
                        'Welcome...',
                        1000,
                        'Im Nizar Im Frontend Developer',
                        1000,
                        'Based in Marsa, Tunis',
                        1000,
                    ]}
                    wrapper="span"
                    speed={50}
                    style={{ fontSize: '2em', display: 'inline-block' }}
                    repeat={Infinity}
                />
                {/* <h2 className="max-[640px]:text-2xl max-[640px]:m-[1rem] text-[3rem] font-[500] mb-[3rem]">Welcome</h2> */}
                {/* <h1 className="max-[640px]:text-2xl text-[2.5rem] font-bold mb-[1.5rem]">I'm Nizar I'm Frontend Developer</h1> */}
                {/* <p className="text-2xl tracking-[.2rem]">Based in Marsa, Tunis</p> */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-between w-fit mx-auto">
                    <a href="#contact" style={{ color: color, borderColor: color }} className={`block mr-8 w-[150px] text-xl font-[500] rounded-[1.5rem] p-[.5rem] bg-[transparent] mt-[3rem] border-2 transition duration-500 ${showFirstBtn ? 'opacity-100' : 'opacity-0'}`}>Hire Me</a>
                    <a href="../assets/myCV.pdf" target="_blank" download="myCV.pdf" style={{ color: color, borderColor: color }} className={`block w-[150px] text-xl font-[500] rounded-[1.5rem] p-[.5rem] bg-[transparent] mt-[3rem] border-2 transition duration-500 ${showSecondBtn ? 'opacity-100' : 'opacity-0'}`}>Download CV</a>
                </div>
            </div>
        </div>
    )
}
export default Landing;