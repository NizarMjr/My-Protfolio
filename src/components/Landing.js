import React from "react";
import { useSelector } from "react-redux";

const Landing = () => {
    const color = useSelector(state => state.selectedColor)
    return (
        <div className="bg-landing relative w-[100%] h-[100vh] bg-no-repeat bg-cover before:content-[''] before:w-[100%] before:h-[100%] before:absolute before:top-[0] before:left-[0] before:bg-[rgb(0,0,0,70%)]">
            <div className="w-[100%] text-white text-center absolute z-[20] max-[640px]:top-[10%] sm:top-[20%] left-[50%] translate-x-[-50%]">
                <h2 className="max-[640px]:text-2xl max-[640px]:m-[1rem] text-[3rem] font-[500] mb-[3rem]">Welcome</h2>
                <h1 className="max-[640px]:text-2xl text-[2.5rem] font-bold mb-[1.5rem]">I'm Nizar I'm Frontend Developer</h1>
                <p className="text-2xl tracking-[.2rem]">Based in Marsa, Tunis</p>
                <a href="#contact" style={{ color: color, borderColor: color }} className="block ml-[auto] mr-[auto] w-[150px] text-xl font-[500] rounded-[1.5rem] p-[.5rem] bg-[transparent] mt-[3rem] border-2">Hire Me</a>
            </div>
        </div>
    )
}
export default Landing;