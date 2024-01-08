import React from 'react'
import './works.css'
import protfolio1 from '../../assets/portfolio-1.png'
import protfolio2 from '../../assets/portfolio-2.png'
import protfolio3 from '../../assets/portfolio-3.png'
import protfolio4 from '../../assets/portfolio-4.png'
import protfolio5 from '../../assets/portfolio-5.png'
import protfolio6 from '../../assets/portfolio-6.png'

function Works() {
  return (
    <section id="works">
      <h1 className="worktitle">My Projects</h1>
      <span className='worksDesc'>I take pride in playing atention to the smallest details and making sure that my work is perfect.i am excited to bring my skills and experience to help busineess</span>
      <div className="worksImgs">
        <img src={protfolio1} alt="" className="worksImg" />
        <img src={protfolio2} alt="" className="worksImg" />
        <img src={protfolio3} alt="" className="worksImg" />
        <img src={protfolio4} alt="" className="worksImg" />
        <img src={protfolio5}   alt="" className="worksImg" />
        <img src={protfolio6} alt="" className="worksImg" />
        

      </div>
      <button className="workBtn">see more</button>
    </section>
  )
}

export default Works
