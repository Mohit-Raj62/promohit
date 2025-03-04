// import React from 'react'
import './Mywork.css'
import aboutimg from "../../assets/aboutimg.svg";
import mywork_data from '../../assets/mywork_data.js';
import arrow from "../../assets/arrow.svg";

const Mywork = () => {
  return (
    <div id='mywork' className='mywork'>
        <div className="mywork-title">
            <h1>My Latest Work</h1>
            <img src={aboutimg} alt="" />
        </div>
        <div className="mywork-container">
            {mywork_data.map((Work,index) =>{
                return <img key={index} src={Work.w_img} alt=""/> 
            })}
        </div>
        <div className="mywork-showmore">
            <p>Show More</p>
            <img src={arrow} alt="" />
        </div>  
    </div>
  )
}

export default Mywork

{/* <div className="mywork-container">
            {mywork_data.map((work, index) => 
            (

                <div className="portfolio" key={index}>
                    <img src={work.w_img} alt="" />
                    <div className="layer">
                        <h3>{work.w_name}</h3>
                        <p>{work.w_desc}</p>
                        <div><a href="#">Read More</a></div>
                    </div>
                </div>
            ) )}
        </div>  */}