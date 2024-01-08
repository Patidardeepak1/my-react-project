import React from 'react'
import './skill.css';
import UIDesign from "../../assets/ui-design.png";
import WebDesign from "../../assets/website-design.png";
import AppDesign from "../../assets/app-design.png";
function Skill() {
  return (
   
      <section id="skills">
    <span className="skillTitle">Skills</span>skilltitle
    <skill className="skilldoes">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae facilis excepturi distinctio nisi dolore, reprehenderit possimus dicta perferendis quibusdam accusantium? Neque molestias voluptate vel. Aperiam possimus dolor fugiat numquam rerum!</skill>
    <div className="skillbars">
        <div className="skillbar">
            <img src={UIDesign} alt=""  className="skillbarImg" />
            <div className="skillBarText">
                <h2>HTML Css Js</h2>
                <p>Some experience in frontend skills with some small projects like Tic-Toc-Toe</p>
            </div>
         
           
        </div>
        <div className="skillbar">
            <img src={WebDesign} alt=""  className="skillbarImg" />
            <div className="skillBarText">
                <h2>MERN stack</h2>
                <p>Some knowledge about mongoDB,express,React jS as frontend library and node js  </p>
            </div>
         
           
        </div>
        <div className="skillbar">
            <img src={AppDesign} alt=""  className="skillbarImg" />
            <div className="skillBarText">
                <h2>Tools familiar with</h2>
                <p> Git,Github,Postman and VsCode kzjxkan nxsnck kcnskcnx cnaskcnana </p>
               
            </div>
         
           
        </div>
     
  </div>
 
   
      </section>
   
  )
}

export default Skill
