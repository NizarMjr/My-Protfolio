import React, { useEffect } from "react";
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri';
import { useSelector } from "react-redux";

const Links = () => {
    const color = useSelector(state => state.selectedColor);
    useEffect(() => {
        document.getElementsByClassName('active')[0].style.backgroundColor = color;
    })
    const activeLink = (id) => {
        const links = document.getElementsByClassName('icons-links');
        for (let i = 0; i < links.length; i++) {
            if (links[i].classList.contains('active')) {
                links[i].classList.remove('active')
                links[i].style.backgroundColor = 'transparent';
            }
        }
        document.getElementById(id).classList.add('active');
        document.getElementById(id).style.backgroundColor = color;
    }
    const icons = [<AiOutlineHome />, <AiOutlineUser />, <BiBook />, <RiServiceLine />, <BiMessageSquareDetail />];
    const links = ["#", "#about", "#skills", "#portfolio", "#contact"]
    return (
        <nav className="max-[640px]-w-[100px] z-[1000] text-white fixed w-[fit-content] p-[1rem] flex bottom-[4rem] left-[50%] translate-x-[-50%] rounded-[2.2rem] bg-[#0000004d] backdrop-blur-[1rem]">
            {icons.map((icon, index) => {
                return (
                    <a href={`${links[index]}`} className={`icons-links ${index === 0 ? 'active' : ''}`} key={index} id={`icon${index}`} onClick={() => activeLink(`icon${index}`)}>{icons[index]}</a>)
            })}
        </nav>
    )
}
export default Links;