import {useState, useEffect} from "react";

export default function Skills(){
    const [skills, setSkills] = useState([]);

    useEffect(()=>{
        const getSkills = async () => {
            try{
                let response = await fetch (
                    "https://http5222-assignment1.onrender.com/skills/",
                    {
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }
                );
                let data = await response.json();
                console.log(data);
                setSkills(data);
            } catch (error) {
                console.error("Error fetching skills: ", error);
            }
        };
        getSkills();
    },[]);

    return(
        <section id="skills"> 
           <h2>Skills</h2>
            {skills.length > 0 ? (
                skills.map((skill,index)=>(
                    <div key={index}>
                        <h3>{skill.expertise}</h3>
                        <p>{skill.languages}</p>
                        <p>{skill.description}</p>
                    </div>
                ))
            ):(
                <p>Loading skills....</p>
            )}
        </section>
    );
}