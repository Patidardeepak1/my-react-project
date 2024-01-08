import React, { useState } from 'react'
import './navbar.css'
import logo from '../../assets/logo-modified.png'
import {Link} from  "react-scroll"
import contacting from "../../assets/contact.png"
import menu from "../../assets/menu.png"
function Navbar() {
  const [showMenu,setMenu]=useState(false);
  return (
   
       <nav className="navbar">
      <img src={logo} alt="logo" className="logo"/>
      <div className="desktopmenu">
  <Link activeClass='active' to="intro" spy={true} smooth={true} offset={-100} duration={500} className="desktopmenuListItem">Home</Link>
  <Link activeClass='active' to="skills" spy={true} smooth={true} offset={-50} duration={500} className="desktopmenuListItem">Skills</Link>
     <Link  activeClass='active' to="works" spy={true} smooth={true} offset={-80} duration={500} className="desktopmenuListItem">Projects</Link>

<Link activeClass='active' to="contact" spy={true} smooth={true} offset={-100} duration={500} className="desktopmenuListItem">Contact</Link>
      </div>
      <button className="desktopmenuBtn" onClick={()=>document.getElementById('contact').scrollIntoView({behavior:'smooth'})}>
        <img src={contacting} alt="" className="desktopmenuImg"/>
        Contact me
      </button>
      <img src={menu} alt="menu" className="mobMenu"  onClick={()=>{setMenu(!showMenu)}}/>
      <div className="navmenu" style={{display:showMenu?"flex":'none'}} >
  <Link activeClass='active' to="intro" spy={true} smooth={true} offset={-100} duration={500} className="ListItem" onClick={()=>{setMenu(false)}}>Home</Link>
  <Link activeClass='active' to="skills" spy={true} smooth={true} offset={-50} duration={500} className="ListItem"  onClick={()=>{setMenu(!showMenu)}}>Skills</Link>
     <Link  activeClass='active' to="works" spy={true} smooth={true} offset={-80} duration={500} className="ListItem"  onClick={()=>{setMenu(!showMenu)}}>Projects</Link>

<Link activeClass='active' to="contact" spy={true} smooth={true} offset={-100} duration={500} className="ListItem"  onClick={()=>{setMenu(!showMenu)}}>Contact</Link>
      </div>
    </nav>
  
  )
}

export default Navbar
