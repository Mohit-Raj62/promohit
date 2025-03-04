// import React from 'react'
import aboutimg from "../../assets/aboutimg.svg";
// import git from "../../assets/git-git.svg";
// import github from "../../assets/github.svg";
// import Postman from "../../assets/postman.svg";
import vscode from "../../assets/about-removebg.png";

const Aboutt = () => {
  return (
    <div
      id="about"
      className="flex flex-col items-center justify-center gap-12 md:gap-20 px-4 sm:px-8 md:px-12 lg:px-24 xl:px-44 py-16 md:py-20"
    >
      {/* About Title Section */}
      <div className="relative ">
        <h1 className=" px-6 md:px-8 text-4xl sm:text-5xl md:text-6xl font-semibold font-['Playfair_Display',serif]">
          About Me
        </h1>
        <img
          src={aboutimg}
          alt=""
          className="absolute top-0 bottom-0 right-0 -z-1 border-radius-1"
        />
      </div>

      {/* About Sections */}
      <div className=" flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-20 w-full">
        {/* Left Column - Image */}
        <div className="about-right lg:w-2/5">
          <img className="about-img  rounded-lg" src={vscode} alt="" />
        </div>
        {/* Right Column - Content */}
        <div className="about-right flex flex-col gap-12 md:gap-20 w-full lg:w-2/4">
          {/* About Paragraphs */}
          <div className="about-para flex flex-col gap-5 text-base sm:text-lg md:text-xl font-medium font-['Montserrat',serif]">
            <p>
              I&#39;M an experienced Frontend Developer with over a decade of
              professional expertise in the field. Throughout my career, I have
              had the privilege of collaborating with prestigious organizations,
              contributing to their success and growth.
            </p>
            <p>
              My passion for frontend development is not only reflected in my
              extensive experience but also in the enthusiasm and dedication I
              bring to each project.
            </p>
          </div>

          {/* Frontend Skills */}
          <div className="about-skills flex flex-col gap-5">
            <div className="about-skills flex flex-col gap-3 sm:gap-5">
              <h1 className="text-center text-xl sm:text-2xl md:text-3xl font-['Playfair_Display',serif]">
                Frontend
              </h1>

              <div className="about-skill flex gap-4 sm:gap-8 md:gap-12 items-center hover:scale-105 transition-transform duration-300">
                <p className="min-w-[100px] sm:min-w-[150px] text-lg sm:text-xl md:text-2xl font-medium">
                  HTML
                </p>
                <div className="h-2 md:h-3 w-[55%] rounded-full bg-gradient-to-r from-[#e3df03] to-[#00e1fe]"></div>
              </div>

              <div className="about-skill flex gap-4 sm:gap-8 md:gap-12 items-center hover:scale-105 transition-transform duration-300">
                <p className="min-w-[100px] sm:min-w-[150px] text-lg sm:text-xl md:text-2xl font-medium">
                  CSS
                </p>
                <div className="h-2 md:h-3 w-[60%] rounded-full bg-gradient-to-r from-[#e3df03] to-[#00e1fe]"></div>
              </div>

              <div className="about-skill flex gap-4 sm:gap-8 md:gap-12 items-center hover:scale-105 transition-transform duration-300">
                <p className="min-w-[100px] sm:min-w-[150px] text-lg sm:text-xl md:text-2xl font-medium">
                  JavaScript
                </p>
                <div className="h-2 md:h-3 w-[70%] rounded-full bg-gradient-to-r from-[#e3df03] to-[#00e1fe]"></div>
              </div>

              <div className="about-skill flex gap-4 sm:gap-8 md:gap-12 items-center hover:scale-105 transition-transform duration-300">
                <p className="min-w-[100px] sm:min-w-[150px] text-lg sm:text-xl md:text-2xl font-medium">
                  React JS
                </p>
                <div className="h-2 md:h-3 w-[65%] rounded-full bg-gradient-to-r from-[#e3df03] to-[#00e1fe]"></div>
              </div>

              <div className="about-skill flex gap-4 sm:gap-8 md:gap-12 items-center hover:scale-105 transition-transform duration-300">
                <p className="min-w-[100px] sm:min-w-[150px] text-lg sm:text-xl md:text-2xl font-medium">
                  Next JS
                </p>
                <div className="h-2 md:h-3 w-[50%] rounded-full bg-gradient-to-r from-[#e3df03] to-[#00e1fe]"></div>
              </div>

              <h1 className="text-center text-xl sm:text-2xl md:text-3xl font-['Playfair_Display',serif] mt-3 sm:mt-4">
                Backend
              </h1>

              <div className="about-skill flex gap-4 sm:gap-8 md:gap-12 items-center hover:scale-105 transition-transform duration-300">
                <p className="min-w-[100px] sm:min-w-[150px] text-lg sm:text-xl md:text-2xl font-medium">
                  Node
                </p>
                <div className="h-2 md:h-3 w-[60%] rounded-full bg-gradient-to-r from-[#e3df03] to-[#00e1fe]"></div>
              </div>

              <div className="about-skill flex gap-4 sm:gap-8 md:gap-12 items-center hover:scale-105 transition-transform duration-300">
                <p className="min-w-[100px] sm:min-w-[150px] text-lg sm:text-xl md:text-2xl font-medium">
                  Express
                </p>
                <div className="h-2 md:h-3 w-[50%] rounded-full bg-gradient-to-r from-[#e3df03] to-[#00e1fe]"></div>
              </div>

              <div className="about-skill flex gap-4 sm:gap-8 md:gap-12 items-center hover:scale-105 transition-transform duration-300">
                <p className="min-w-[100px] sm:min-w-[150px] text-lg sm:text-xl md:text-2xl font-medium">
                  MongoDB
                </p>
                <div className="h-2 md:h-3 w-[60%] rounded-full bg-gradient-to-r from-[#e3df03] to-[#00e1fe]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Achievements Section */}
      <div className="about-achievements flex w-full justify-around flex-wrap gap-6 md:gap-0 mb-10 sm:mb-12 md:mb-16">
        <div className="about-achievement flex flex-col items-center gap-1 sm:gap-2 md:gap-3 hover:scale-110 transition-transform duration-500">
          <h1 className="text-3xl sm:text-2xl md:text-4xl font-bold font-['Playfair_Display',serif] bg-gradient-to-r from-[#e3df03] to-[#00e1fe] bg-clip-text text-transparent">
            2+
          </h1>
          <p className="font-medium text-base sm:text-lg md:text-xl lg:text-2xl font-['Playfair_Display',serif] text-center">
            YEARS OF EXPERIENCE
          </p>
        </div>

        <hr className="hidden md:block h-32 w-px bg-gray-300" />

        <div className="about-achievement flex flex-col items-center gap-1 sm:gap-2 md:gap-3 hover:scale-110 transition-transform duration-500">
          <h1 className="text-3xl sm:text-3xl md:text-4xl font-bold font-['Playfair_Display',serif] bg-gradient-to-r from-[#e3df03] to-[#00e1fe] bg-clip-text text-transparent">
            10+
          </h1>
          <p className="font-medium text-base sm:text-lg md:text-xl lg:text-2xl font-['Playfair_Display',serif] text-center">
            PROJECTS COMPLETED
          </p>
        </div>

        <hr className="hidden md:block h-32 w-px bg-gray-300" />

        <div className="about-achievement flex flex-col items-center gap-1 sm:gap-2 md:gap-3 hover:scale-110 transition-transform duration-500">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-['Playfair_Display',serif] bg-gradient-to-r from-[#e3df03] to-[#00e1fe] bg-clip-text text-transparent">
            10+
          </h1>
          <p className="font-medium text-base sm:text-lg md:text-xl lg:text-2xl font-['Playfair_Display',serif] text-center">
            HAPPY CLIENTS
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutt;
