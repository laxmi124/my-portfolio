import React from "react";
// import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ExperienceCard ({companyName,title, role, duration}) {
    return <Card className="project-card-view" style={{textAlign:"start"}}>
        <div style={{textAlign:"center"}}>
         {companyName} <br/> <strong className="purple">{duration}</strong>
         <br/>
        Title: {title}
        </div>
       
        <ul>
            {role.map((item)=>{
                return <li>{item}</li>
            })}
        </ul>
    </Card>
}
export default ExperienceCard;