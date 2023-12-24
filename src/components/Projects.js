import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore';

const Projects = () => {
    const color = useSelector(state => state.selectedColor)
    const [works, setWorks] = useState([]);

    useEffect(() => {
        getMyWorks()
    }, []);

    const firebaseConfig = {
        apiKey: "AIzaSyAyt9OVC2u0qVXHLkWEzUTuvUXUykyDDG0",
        authDomain: "fir-test-b6c87.firebaseapp.com",
        projectId: "fir-test-b6c87",
        storageBucket: "fir-test-b6c87.appspot.com",
        messagingSenderId: "700344142572",
        appId: "1:700344142572:web:6401b31cd9e1203932f3c9",
        measurementId: "G-6J0KPWQX29"
    };

    const getMyWorks = async () => {
        try {
            const app = initializeApp(firebaseConfig)
            const db = getFirestore(app);
            const colRef = collection(db, 'projects');

            await getDocs(colRef).then((snapshot) => {
                let works = [];
                snapshot.docs.forEach((doc) => {
                    works.push({ ...doc.data() })
                })
                setWorks(works)
            })
        }
        catch (error) {
            console.error("Firebase Error:", error);
        }
    }
    return (
        <main id="portfolio" className="">
            <div className="container">
                <h1 className="main-title">PROJECTS</h1>
                <h3 className="second-title">My Works</h3>
                <article className="text-center">
                    {works.map((ele, index) => {
                        return (
                            <div key={index} className={`sm:w-[calc(100%-100px)] m-[auto] box p-[.2rem] sm:flex justify-between mb-[3rem] ${index % 2 === 1 ? 'flex-row-reverse' : ''}`} >
                                <a href={ele.live} target='_blank'>
                                    <img src={ele.image} alt={ele.name} className="max-w-[300px] mr-[3rem] rounded p-[.3rem] cursor-pointer hover:opacity-[.8] max-[640px]:m-[auto] max-[640px]:mb-[1rem]" />
                                </a>
                                <div className="content basis-[400px]">
                                    <h3 className="sm:text-2xl font-bold mb-[1rem]">{ele.name}</h3>
                                    <p className="mb-[2rem]">{ele.description}</p>
                                    <a href={ele.live} target='_blank' className={`mr-[1rem] sm:text-xl rounded p-[.5rem] text-white bg-[${color}]`}>Live Demo</a>
                                    <a href={ele.git} target='_blank' className={`mr-[1rem] sm:text-xl rounded p-[.5rem] text-white bg-[${color}]`}>Github</a>
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