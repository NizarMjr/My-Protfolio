import React from "react";
import { AiFillHtml5 } from 'react-icons/ai'
import { DiCss3, DiResponsive } from 'react-icons/di'
import { SiJavascript, SiTailwindcss } from 'react-icons/si'
import { FaReact } from 'react-icons/fa'
import { FaGitAlt } from 'react-icons/fa'


const Skills = () => {
    const icons = [{ 'icon': <AiFillHtml5 />, 'name': 'HTML 5' }, { 'icon': <DiCss3 />, 'name': 'CSS' },
    { 'icon': <SiJavascript />, 'name': 'JAVASCRIPT + EC6' }, { 'icon': <FaReact />, 'name': 'REACT' },
    { 'icon': <SiTailwindcss />, 'name': 'TAILWIND' }, { 'icon': <FaGitAlt />, 'name': 'GIT' },
    { 'icon': <DiResponsive />, 'name': 'RESPONSIVE DESIGN' }]
    return (
        <main id="skills" className="main-section bg-[#eee]">
            <div className="container">
                <h1 className="main-title">SKILLS</h1>
                <h2 className={`second-title`}>My Skills</h2>
                <article className="grid grid-cols-[repeat(auto-fill,minmax(300px,_1fr))]">
                    {icons.map((ele) => {
                        return (
                            <div className="flex flex-col items-center mb-[1rem]">
                                <i className="text-[4rem] mb-[.5rem]">{ele.icon}</i>
                                <p className="font-bold">{ele.name}</p>
                            </div>
                        )

                    })}
                </article>
            </div>
        </main>
    )
}
export default Skills;