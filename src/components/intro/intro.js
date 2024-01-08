import React from 'react'
import './intro.css'
import bg from '../../assets/IMG_20221213_141452_718-modified.png'
import {Link} from  "react-scroll"
import btnImg from '../../assets/hireme.png'
function Intro() {
  return (
    <section id="intro">
       <div className="introContent">
<span className="hello">Hello,</span>
<span className="introtext">I'm<span className="introName"> Deepak</span><br/>Website Designer</span>
<p className="introPara">I am a skilled web designer with experience in creating <br/> Visulas appealing and user friendly websites.</p>
<Link ><button className="btn"><img src={btnImg} className="btnImg" alt="Hire me"/>Hire Me</button></Link>
        </div> 
        <img src={bg} alt="profile" className="bg"/>
    </section>
  )
}

export default Intro
