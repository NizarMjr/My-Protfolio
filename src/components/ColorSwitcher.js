import React from "react";
import { AiFillSetting } from 'react-icons/ai'
import { useDispatch, useSelector } from "react-redux";
import { change_color } from "../redux/Actions";
import DarkLight from "./DarkLight";

const ColorSwitcher = () => {
    const darkMode = useSelector(state => state.DarkMode);
    const dispatch = useDispatch();
    const toggleColors = () => {
        if (document.getElementsByClassName('colors')[0].classList.contains('hideColors')) {
            document.getElementsByClassName('colors')[0].classList.remove('hideColors');
        }
        else {
            document.getElementsByClassName('colors')[0].classList.add('hideColors');
        }
    }
    const changeColor = (color) => {
        dispatch(change_color(color));
        document.getElementsByClassName('active')[0].style.backgroundColor = color;
        setTimeout(() => {
            document.getElementsByClassName('colors')[0].classList.add('hideColors');
        }, 500)
    }
    return (
        <div className="colors duration-[.3s] fixed z-30 top-[30%] right-[0] flex hideColors">
            <i className="h-[fit-content] text-2xl p-[.5rem] flex rounded-[.5rem] rounded-tr-none rounded-br-none bg-[#777] text-[white] cursor-pointer" onClick={(() => toggleColors())}><AiFillSetting /></i>
            <div className={`list-colors w-[200px] h-[250px] p-[.5rem] ${darkMode ? 'bg-[#020c1b]' : 'bg-[#ddd]'}`}>
                <p className="text-[1.2rem] font-bold">Color Switcher</p>
                <div className="flex flex-col justify-center items-center h-[calc(100%-1.5rem)]">
                    <div className="flex mb-[1rem] ">
                        <div className={`switchedColor bg-[#6610f2]`} onClick={() => changeColor('#6610f2')} ></div>
                        <div className={`switchedColor bg-[#007bff]`} onClick={() => changeColor('#007bff')} ></div>
                        <div className={`switchedColor bg-[#6f42c1]`} onClick={() => changeColor('#6f42c1')} ></div>
                        <div className={`switchedColor bg-[#17a2b8]`} onClick={() => changeColor('#17a2b8')} ></div>
                        <div className={`switchedColor bg-[#dc3545]`} onClick={() => changeColor('#dc3545')} ></div>
                    </div>
                    <div className="flex">
                        <div className={`switchedColor bg-[#e83e8c]`} onClick={() => changeColor('#e83e8c')} ></div>
                        <div className={`switchedColor bg-[#28a745]`} onClick={() => changeColor('#28a745')} ></div>
                        <div className={`switchedColor bg-[#ffc107]`} onClick={() => changeColor('#ffc107')} ></div>
                        <div className={`switchedColor bg-[#fd7e14]`} onClick={() => changeColor('#fd7e14')} ></div>
                        <div className={`switchedColor bg-[#795548]`} onClick={() => changeColor('#795548')} ></div>
                    </div>
                    <button className="bg-[#20c997] text-white p-[.4rem] text2xl mt-[1.2rem] font-[500]" onClick={() => changeColor('#20c997')}>Reset Default Teal</button>
                    <DarkLight />
                </div>
            </div>
        </div>
    )
}
export default ColorSwitcher;