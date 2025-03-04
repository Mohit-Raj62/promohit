// import React from 'react'
import './Footer.css'
// import mohit55 from '../../assets/mohit55.png';
// import user from '../../assets/user.svg';


const Footer = () => {
  return ( 

    <div id="footer" className='footer bg-black-800 text-white w-full py-6 sm:py-8 md:py-10'>
        <br />
    <div className="footer-top flex flex-col justify-around items-center px-3 sm:px-4 lg:px-20 text-center">
      <div className="footer-top-left flex flex-col items-center mb-4 sm:mb-6 max-w-xs sm:max-w-sm md:max-w-xl">
        {/* <img src={mohit55} alt="Mohit Sinha" className="mb-3 w-24 sm:w-28 md:w-32 h-auto rounded-full shadow-lg" /> */}
        <p className="text-gray-300 text-xs sm:text-sm md:text-base">
          I&#39;m currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.
        </p>
      </div>
    </div>
    
    {/* <hr className="border-gray-600 my-4 sm:my-5 md:my-6  sm:w-4/5 mx-auto w-full" />  */}
    
    <div className="footer-bottom flex flex-col items-center px-3 sm:px-4 lg:px-20 space-y-3 sm:space-y-4">
      <div className="footer-bottom-left text-center">
        <p className="text-gray-400 text-xs sm:text-sm md:text-base">@2023 Mohit Sinha. All rights reserved.</p>
      </div>
      <div className="footer-bottom-right flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 items-center">
        <p className="text-gray-400 text-xs sm:text-sm md:text-base cursor-pointer hover:underline">Terms of Services</p>
        <p className="text-gray-400 text-xs sm:text-sm md:text-base cursor-pointer hover:underline">Privacy Policy</p>
        <p className="text-gray-400 text-xs sm:text-sm md:text-base cursor-pointer hover:underline">Connect With Me</p>
      </div>
    </div>
  </div>
  )
}

export default Footer