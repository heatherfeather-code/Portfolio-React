import {Link} from "react-router"
import {useEffect} from "react"
import Contact from "../components/Contact/Contact"
import Projects from "../components/Projects/Projects"
import Skills from "../components/Skills/Skills"
import "./Home.css";

export default function Home(){
    useEffect(()=>{
        document.title = "Home | Heather Boden Portfolio"
    }, []);
    return(
        <main id="main">
            <h1>Hi, I'm Heather Boden.</h1>
            <p> I am looking for a role as either a Web Developer or as a Full-Stack developer.</p>
            <p>A Full-Stack Web Developer with 5+ years of design experience working on digital and print publications. Skilled with creating clean effective page layouts, and working with backend infrastructure as well as creating full-stack projects.</p>

            <h2>About Me</h2>
            <p>I grew up within the GTA and always had a passion for being an artist. In University I studied Art and Art History and graduated with an Honours Bachelor of Arts from both Sheridan College and the University of Toronto in Spring of 2022. After exploring the world of tech, I decided to get certified in web development to use my design skills to their fullest capability.</p>
            <p>I live in the GTA with my partner and my cat Queen. You can often find me spending time outside in the nice weather often with a good book!</p>
            <Projects/>
            <Skills/>
            <Contact/>
        </main>
    )
}