import React from "react";
import { useSelector } from "react-redux";

const About = () => {
    const color = useSelector(state => state.selectedColor);
    return (
        <main id="about" className="main-section container">
            <h1 className="main-title">ABOUT ME</h1>
            <h2 className={`second-title before:bg-[${color}]`}>Know Me More</h2>
            <article className="md:flex justify-between">
                <div className="sm:mr-[2rem] max-[640px]:text-center max-[640px]:mb-[3rem]">
                    <h2 className="text-3xl font-bold mb-[1rem]">I'm <span className="font-bold" style={{ color: color }}>Nizar Mejri</span>, a Frontend Developer</h2>
                    <p className="text-lg">Hello World! I'm Nizar Mejri, a Front-End Web Developer based out of Tunis. I love combining the worlds of logic and creative design to make eye-catching, accessible, and user-friendly websites and applications.</p>
                    <p className="text-lg mt-[1rem]">Technology leads, society follows. The move towards increasing inclusivity and diversity in the industry through representation is of importance to me.</p>
                </div>
            </article>
        </main>
    )
}
export default About;