// import React from 'react'
import Services_Data from '../../assets/Services_data.js'
import arrow from "../../assets/arrow.svg";
import aboutimg from "../../assets/aboutimg.svg";

const Services = () => {
  return (
<div id='services' className="services flex flex-col items-center justify-center gap-20 my-20 mx-44">
    <div className="services-title relative">
        <h1 className="px-8 text-5xl font-semibold font-playfair">My Services</h1>
        <img src={aboutimg} alt="About" className="absolute -z-1 bottom-0 right-0 rounded h-10 top-0.5 border-radius-1" />
    </div>
    <div className="services-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
        {Services_Data.map((service, index) => (
            <div className="service-format flex flex-col justify-center gap-5 p-15 rounded-lg border-2 border-white transition duration-400 cursor-pointer font-playfair hover:border-pink-500 hover:bg-gradient-to-br hover:from-[#3f0028] hover:to-[#582300] hover:scale-105" key={index}>
                <h3 className="text-4xl font-semibold">{service.s_no}</h3>
                <h2 className="text-5xl font-semibold bg-gradient-to-r from-[#df8908] to-[#b415ff] bg-clip-text text-transparent">{service.s_name}</h2>
                <p className="text-gray-400 text-2xl 
                 leading-10 max-w-[300px] font-montserrat">{service.s_desc}</p>
                <div className="services-readmore flex gap-5 items-center mt-5">
                    <p className="text-blue-500 hover:underline cursor-pointer font-semibold font-serif">Read More</p>
                    <img src={arrow} alt="Arrow" className="w-4 h-4" />
                </div>
            </div>
        ))}
    </div>
</div>
  )
}

export default Services