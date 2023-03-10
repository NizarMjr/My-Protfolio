import React from "react";
import { useSelector } from "react-redux";

const Footer = () => {
    const color = useSelector(state => state.selectedColor);
    return (
        <footer className="text-center font-bold sm:text-2xl p-[2rem]">
            <p>DESIGNED BY <span style={{ color: color, display: 'inline-block' }}>NIZAR MEJRI</span> 2023
            </p>
        </footer>
    )
}
export default Footer;