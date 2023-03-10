import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Projects = () => {
    const color = useSelector(state => state.selectedColor)
    const [works, setWorks] = useState([]);
    useEffect(() => {
        axios.get('works.json').then(res => setWorks(res.data))
    }, []);
    return (
        <main id="portfolio" className="">
            <div className="container">
                <h1 className="main-title">PROJECTS</h1>
                <h3 className="second-title">My Works</h3>
                <article className="text-center">
                    {works.map((ele, index) => {
                        return (
                            <div key={index} className={`sm:w-[calc(100%-100px)] m-[auto] box p-[.2rem] sm:flex justify-between mb-[3rem] ${index % 2 === 1 ? 'flex-row-reverse' : ''}`} >
                                <img src={ele.image} alt={ele.name} className="max-w-[300px] mr-[3rem] rounded border-[1px] p-[.3rem] cursor-pointer hover:opacity-[.8] max-[640px]:m-[auto] max-[640px]:mb-[1rem]" />
                                <div className="content basis-[400px]">
                                    <h3 className="sm:text-2xl font-bold mb-[1rem]">{ele.name}</h3>
                                    <p className="mb-[2rem]">{ele.description}</p>
                                    <a href={ele.live} target='_blank' className={`mr-[1rem] sm:text-xl rounded border-[1px] p-[.5rem] text-white bg-[${color}]`}>Live Demo</a>
                                    <a href={ele.git} target='_blank' className={`mr-[1rem] sm:text-xl rounded border-[1px] p-[.5rem] text-white bg-[${color}]`}>Github</a>
                                </div>
                            </div>
                        )
                    })}
                </article>
            </div>

        </main>
    )
}
export default Projects;