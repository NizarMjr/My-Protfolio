import React from "react";
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md'
import { useDispatch, useSelector } from "react-redux";
import { switchDarkMode } from "../redux/Actions";

const DarkLight = () => {
    const dispatch = useDispatch();
    const darkMode = useSelector(state => state.DarkMode);

    const setLightMode = () => {
        dispatch(switchDarkMode(false));
        setTimeout(() => {
            document.getElementsByClassName('colors')[0].classList.add('hideColors');
        }, 500)
    }
    const setDarkMode = () => {
        dispatch(switchDarkMode(true));
        setTimeout(() => {
            document.getElementsByClassName('colors')[0].classList.add('hideColors');
        }, 500)
    }
    return (
        <div className="flex items-center justify-between w-[80%] mt-4">
            <MdOutlineLightMode className={`cursor-pointer text-3xl ${darkMode ? 'text-white' : 'text-black'}`} onClick={() => (setLightMode())} />
            <MdOutlineDarkMode className={`cursor-pointer text-3xl ${darkMode ? 'text-white' : 'text-black'}`} onClick={() => (setDarkMode())} />
        </div>
    )
}
export default DarkLight;