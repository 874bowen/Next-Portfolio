import React from "react";
import {AiOutlineClose, AiOutlineMail, AiOutlineMenu} from "react-icons/ai";
import {FaGithub, FaLinkedinIn} from "react-icons/fa";
import {BsFillPersonLinesFill} from "react-icons/bs";

const Main = () => {
	return (
	<div className="w-full h-screen text-center">
		<div className="max-w-[1240px] w-full h-full mx-auto my-auto p-2 flex justify-center items-center">
         <div>
         <p className="uppercase text-sm tracking-widest text-gray-600"> Greatness is not achieved alone</p>
         <h1 className="py-4 text-gray-700">
            Hi, I&apos;m <span className="text-[#722410]">Ivan </span> <span className="text-[#44a3ac]">Bowen</span>
         </h1>
         <h2 className="py-2 text-gray-700">
            A Software Developer 
         </h2>
         <p className="py-4 text-gray-600 max-w-[70%] m-auto">
         Enthusiastic Software developer eager to contribute to team success through hard work, attention to detail and excellent organizational skills. Clear understanding of web development and designing and training in Responsive Web Design. Motivated to learn, grow and excel in Technology.
         </p>
            <div className="flex items-center justify-between mx-auto max-w-[50%] w-full py-4">
               <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaLinkedinIn />
               </div>
               <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaGithub />
               </div>
               <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <AiOutlineMail />
               </div>
               <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <BsFillPersonLinesFill />
               </div>
            </div>
	
         </div>
		</div>
	</div>
   );
};

export default Main;
