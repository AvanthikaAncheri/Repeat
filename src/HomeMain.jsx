import React from 'react'
import './Style1.css'

function HomeMain() {
    const h1 ={
      height:"500px",
      backgroundImage:'url("sample.jpeg")',
    };
    const sample ={
      width:"800px",
      height:"500px",
      backgroundImage:'url("sample.jpeg")',
      backgroundSize:"cover",
    };

  return (
    <div>
        <div className='Heading1'>
            <img src={require("./Image1.webp")} alt="" height={300}  className='sample'/>

            <div className="HeadingText">We are pretty Excellent</div>
            <div className="HeadingPara">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</div>
            <button className='button1'>Our Services</button>
        </div>
    </div>
  )
}

export default HomeMain