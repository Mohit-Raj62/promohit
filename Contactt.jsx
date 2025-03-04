// import React from 'react'
import aboutimg from "../../assets/aboutimg.svg";
import gmail from "../../assets/gmail.svg";
// import phone from "../../assets/phone.svg";
import whatsapp from "../../assets/whatsapp.svg";
import loca from "../../assets/location.svg";
// import { useState } from "react";

import { useState, useEffect } from 'react';

const Contactt = () => {
  // Add state to track submitted name
  const [submittedName, setSubmittedName] = useState("");
  const [showSubmittedName, setShowSubmittedName] = useState(false);
  
  // Add verification code states
  const [verificationCode, setVerificationCode] = useState("");
  const [userInput, setUserInput] = useState("");
  const [verificationError, setVerificationError] = useState(false);

  // Generate verification code on component mount
  useEffect(() => {
    generateVerificationCode();
  }, []);

  // Function to generate a random 4-digit verification code
  const generateVerificationCode = () => {
    const randomCode = Math.floor(10000 + Math.random() * 90000);
    setVerificationCode(randomCode.toString());
    setUserInput("");
    setVerificationError(false);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    
    // Verify the code before proceeding
    if (userInput !== verificationCode) {
      setVerificationError(true);
      return;
    }
    
    const formData = new FormData(event.target);

    // Get the name value to display
    const nameValue = formData.get("name");
    setSubmittedName(nameValue);
    setShowSubmittedName(true);

    formData.append("access_key", "d09fe9f8-a093-4660-ad6c-321fe653faa2");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());
    
    if (res.success) { 
      // Only show thank you message after successful submission
      alert("Thank you for your message, " + nameValue.toUpperCase() + "!");
      
      // Reset form and generate new verification code
      event.target.reset();
      generateVerificationCode();
    }
  };
  
  // Handle verification code input change
  const handleCodeChange = (e) => {
    setUserInput(e.target.value);
    if (verificationError) {
      setVerificationError(false);
    }
  };
  
  return (
    <div
      id="contact"
      className="contact flex flex-col items-center justify-center gap-10 md:gap-20 py-16 md:py-20 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-28 max-w-screen-2xl mx-auto"
    ><br />
      <div className="contact-title relative">
        <br />
        <h1 className="px-4 md:px-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold font-playfair">
          Get In Touch
        </h1>
        <img
          src={aboutimg}
          alt="About"
          className="absolute -z-1 bottom-0  top-1 right-0 rounded h-20 border-radius-1"
        />
      </div>

      {/* Display submitted name */}
      {showSubmittedName && (
        <div className="bg-gradient-to-r from-[#dd8908] to-[#b415ff] p-4 rounded-lg text-white text-center w-full max-w-md">
          <p className="text-xl font-medium">Thank you for your message, <span className="font-bold text-neutral-50">{submittedName.toUpperCase()}</span>!</p>
          <p className="text-sm mt-2">We&#39;ll get back to you soon.</p>
        </div>
      )}

      <div className="contact-section flex flex-col lg:flex-row gap-10 md:gap-15 lg:gap-24 xl:gap-36 w-full">
        <div className="contact-left flex flex-col gap-6 md:gap-8 w-full lg:w-2/5">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-[#dd8908] to-[#b415ff] bg-clip-text text-transparent font-playfair">
            Let&#39;s talk
          </h1>
          <p className="text-gray-300 text-base md:text-lg leading-7 md:leading-8 font-montserrat">
            I am currently available to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can also check out my resume and other projects.
          </p>
          <div className="contact-details flex flex-col gap-6 md:gap-8 text-gray-300 text-lg md:text-xl mt-2">
            <div className="contact-detail flex items-center gap-4 md:gap-5">
              <a href="https://whatsapp.com/channel/0029Vb3Cd5JFnSzHB0i0on04" className="contact-detail flex items-center gap-4 md:gap-5" ><img
                src={whatsapp}
                alt="whatsapp"
                className="w-6 h-6"
              />
              <p className="break-all">WhatSapp</p></a>
            </div>
            <div className="contact-detail flex items-center gap-4 md:gap-5">
              <a href="mailto:mohit9470sinha@gmail.com" className="contact-detail flex items-center gap-4 md:gap-5">
              <img
                src={gmail}
                alt="Email"
                className="w-6 h-6 "
              />
              <p className="break-all">E-mail</p>
              </a>
            </div>
            <div className="contact-detail flex items-center gap-4 md:gap-5">
              <img
                src={loca}
                alt="Location"
                className="w-6 h-6 md:w-auto md:h-auto"
              />
              <p>Patna, India, Bihar</p>
            </div>
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="contact-right flex flex-col gap-4 md:gap-6 lg:gap-8 w-full lg:w-3/5 xl:w-3/5 mt-8 lg:mt-0"
        >
          <input
            type="text"
            placeholder="Enter your name"
            required
            name="name"
            className="border-none w-full h-14 md:h-16 lg:h-[78px] pl-4 md:pl-5 rounded-lg bg-[#32323c] text-gray-400 font-outfit text-base md:text-lg"
          />

          <input
            type="email"
            required
            placeholder="Enter your email"
            name="email"
            className="border-none w-full h-14 md:h-16 lg:h-[78px] pl-4 md:pl-5 rounded-lg bg-[#32323c] text-gray-400 font-outfit text-base md:text-lg"
          />

          <textarea
            name="message"
            required
            rows="3"
            placeholder="Enter your message"
            className="w-full border-none p-4 md:p-6 rounded-lg bg-[#32323c] text-gray-400 font-outfit text-base md:text-lg resize-none"
          />
          
          {/* Verification code section */}
          <div className="verification-section flex flex-col  justify-center align-middle md:flex-row gap-4 md:items-center">
            <div className="verification-code-display w-15 h-10 bg-[#000000] px-6 py-3  rounded-lg">
              <span className="font-bold text-gray-100 text-xl tracking-wider select-none">
                {verificationCode}
              </span>
            </div>
            <div className="verification-input flex-grow ">
              <input
                type="text"
                value={userInput}
                onChange={handleCodeChange}
                required
                placeholder="Enter verification code"
                className={`border-none w-full h-14 md:h-16 pl-4 md:pl-5 rounded-lg bg-[#32323c] text-gray-400 font-outfit text-base md:text-lg ${
                  verificationError ? "border-2 border-red-500" : ""
                }`}
              />
              {verificationError && (
                <p className="text-red-500 text-sm mt-1">Code doesn&#39;t match. Please try again.</p>
              )}
            </div>
            <button
              type="button"
              onClick={generateVerificationCode}
              className="bg-[#0f0ff0] text-gray-200 px-8 py-5 w-25 h-10 rounded-lg hover:bg-[#000000] transition-colors"
            >
              New Code
            </button>
          </div>
          
          <button
            type="submit"
            className="contact-submit border-none h-15 py-3 px-6 sm:py-4 sm:px-10 md:py-5 md:px-14 text-white text-lg sm:text-4xl rounded-full bg-gradient-to-r from-[#df8908] to-[#b415ff] cursor-pointer font-montserrat transition duration-300 mb-12 hover:scale-105"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contactt;
