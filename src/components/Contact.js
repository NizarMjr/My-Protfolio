import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import emailjs from "emailjs-com";
const Contact = () => {
    const color = useSelector(state => state.selectedColor);
    const form = useRef();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_jl91twl', 'template_45rkufe', form.current, 'd59d4Qz1ZWQKnQ-as')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
        setEmail('');
        setName('');
        setMessage('');
    };
    return (
        <main className="main-section bg-[#eee] h-[fit-content] w-[calc(100%-20px) m-[auto] sm:pl-[1rem]">
            <div className="container">
                <h1 id="contact" className="main-title">CONTACT</h1>
                <h3 className="second-title">Contact Me</h3>
                <div className="md:flex justify-between">
                    <form ref={form} className="w-[100%] mr-[2rem] " onSubmit={sendEmail}>
                        <input required name="name" value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="YOUR NAME" className="p-[.5rem] bg-[#ddd] mb-[1rem] focus:outline-none w-[100%] " />
                        <input required name="email" value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="YOUR EMAIL" className="p-[.5rem] bg-[#ddd] mb-[1rem] focus:outline-none w-[100%] " />
                        <textarea required name="message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="MESSAGE" className="h-[10rem] bg-[#ddd] block mb-[1rem] focus:outline-none w-[100%]" />
                        <button type="submit" className={`bg-[${color}] text-white p-[.5rem] rounded mb-[1rem]`}>GET IN TOUCH</button>
                    </form>
                    <p>If you have any questions about me or my projects, I'm available to grab a coffee and chat! Drop a comment, question, concern, and thanks in advance!</p>
                </div>
                <ul className="flex items-center text-3xl pt-[2rem] pb-[2rem] cursor-pointer sm:w-[calc(100%/4)]">
                    <a href="https://github.com/NizarMjr" target="_blank" className="mr-[2rem]"><li><BsGithub /></li></a>
                    <a href="https://www.linkedin.com/in/nizar-mejri-b2a940252/" target="_blank"><li><BsLinkedin /></li></a>
                </ul>
                <p className="text-blod text-2xl pb-[2rem]">+216 20 438 141</p>
            </div>
        </main>
    )
}
export default Contact;