import Image from "next/image";
import React from "react";
import contact from "../public/assets/contact.jpg";
import {AiOutlineClose, AiOutlineMail, AiOutlineMenu} from "react-icons/ai";
import {FaGithub, FaLinkedinIn} from "react-icons/fa";
import {BsFillPersonLinesFill} from "react-icons/bs";


const Contact = () => {
	return (
		<div className="w-full">
			<div className="max-w-[1240px] mx-auto px-2 py-16">
         <p className="uppercase text-xl tracking-widest text-[#722410]">
					Contact
				</p>
				<h2 className="py-2 text-[#234894]">Get In Touch</h2>
            <div className="grid lg:grid-cols-5 gap-8">
               {/* left */}
               <div className="col-span-3 lg:col-span2 w-full shadow-xl rounded-xl">
                  <div className="lg:p-4 h-full">
                     <div>
                        <Image className="rounded-xl hover:scale-105 ease-in duration-300" src={contact} alt="/"  />
                     </div>
                     <div>
                        <h2 className="py-2">Ivan Bowen</h2>
                        <p>Software Developer</p>
                        <p className="py-4">Available for Software Developer positions. Let&apos;s connect! </p>
                     </div>
                     <div>
                     
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
               

            </div>
         </div>
		</div>
	);
};

export default Contact;
