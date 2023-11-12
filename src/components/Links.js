import React, { useEffect, useState } from "react";
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi'
import { FcKey } from 'react-icons/fc'
import { RiServiceLine } from 'react-icons/ri';
import { HiLockClosed } from 'react-icons/hi'
import { useSelector } from "react-redux";

const Links = () => {
    const [showLinks, setShowLinks] = useState(false);
    const [rotate, setRotate] = useState(false);
    const [hideBtn, setHideBtn] = useState(false);
    const color = useSelector(state => state.selectedColor);

    useEffect(() => {
        if (showLinks)
            document.getElementsByClassName('active')[0].style.backgroundColor = color;
    })
    const ShowLinksWithAnimation = () => {
        setRotate(true);
        setTimeout(() => {
            setHideBtn(true);
            setShowLinks(true);
        }, 1000)
    }
    const hideLinksWithAnimation = () => {
        setShowLinks(false);
        setRotate(false)
        setTimeout(() => {
            setHideBtn(false);
        }, 1000)
    }

    const activeLink = (id) => {
        if (id !== 5) {
            const links = document.getElementsByClassName('icons-links');
            for (let i = 0; i < links.length; i++) {
                if (links[i].classList.contains('active')) {
                    links[i].classList.remove('active')
                    links[i].style.backgroundColor = 'transparent';
                }
            }
            document.getElementById(id).classList.add('active');
            document.getElementById(id).style.backgroundColor = color;
        } else
            id.preventDefault();
    }
    const icons = [<AiOutlineHome />, <AiOutlineUser />, <BiBook />, <RiServiceLine />, <BiMessageSquareDetail />, <HiLockClosed />];
    const links = ["#", "#about", "#skills", "#portfolio", "#contact"]
    return (
        <nav className={`max-[640px]-w-[100px] z-[1000] text-white fixed p-[1rem] bottom-[4rem] left-[50%] translate-x-[-50%] rounded-[2.2rem] bg-[#0000004d] backdrop-blur-[1rem]`}>
            {showLinks ?
                <div className={`transition duration-900 flex left-0 ${showLinks ? 'w-full' : 'w-0'}`}>
                    {icons.map((icon, index) => {
                        return (
                            index !== 5 ? < a href={`${links[index]}`
                            } className={`icons-links ${index === 0 ? 'active' : ''}`} key={index} id={`icon${index}`} onClick={() => activeLink(`icon${index}`)}>{icons[index]}</a> : <a className="icons-links" key={index} onClick={(() => hideLinksWithAnimation())}>{icons[index]}</a>
                        )
                    })}
                </div>
                : <FcKey className={`text-[${color}] cursor-pointer text-2xl transition duration-900 ${rotate ? 'rotate-180' : ''} ${hideBtn ? 'opacity-0' : ''}`} onClick={() => ShowLinksWithAnimation()} />}
        </nav >
    )
}
export default Links;