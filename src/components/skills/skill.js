import React from 'react'
import './skill.css';
import UIDesign from "../../assets/ui-design.png";
import WebDesign from "../../assets/website-design.png";
import AppDesign from "../../assets/app-design.png";
function Skill() {
  return (
   
      <section id="skills">
    <span className="skillTitle">Skills</span>
    <span className="skilldoes">Unlocking Possibilities: A Showcase of Proficiencies that Transform Challenges into Triumphs</span>
    <div className="skillbars">
        <div className="skillbar">
            <img src={UIDesign} alt=""  className="skillbarImg" />
            <div className="skillBarText">
                <h2>Frontend</h2>
                <p>Explore my skills  I'm good at designing websites and making them work smoothly. I use HTML and CSS to create the look, add interactivity with JavaScript, and make things dynamic with tools like React and Vue.js. </p>
        </div>
        </div>
        <div className="skillbar">
            <img src={WebDesign} alt=""  className="skillbarImg" />
            <div className="skillBarText">
                <h2>MERN stack</h2>
                <p>I specialize in backend development using Python and Node.js. From managing databases to crafting secure APIs, I'm the architect behind smooth digital experiences. Let's navigate servers and databases together</p>
            </div>
         
           
        </div>
        <div className="skillbar">
            <img src={AppDesign} alt=""  className="skillbarImg" />
            <div className="skillBarText">
                <h2>Tools familiar with</h2>
                <p> 
Efficiently coding with Visual Studio Code, testing APIs seamlessly with Postman, scripting robust backend logic with Node.js, managing NoSQL databases expertly with MongoDB, and ensuring collaborative development with Git and GitHub. </p>
               
            </div>
         
           
        </div>
     
      
 </div>
   
      </section>
   
  )
}

export default Skill
