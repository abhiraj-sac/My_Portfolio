import React from "react";
import profile from "../assets/images/profiless.png"

const About = () => {
  return (
    <section id="about" className="text-white py-10">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          About <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg hover:text-gray-700">My introduction</p>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2 text-lg lg:font-Heading">
            <div className="text-gray-300 my-3">

              <p className="text-justify leading-7 w-11/12 mx-auto text-cyan-600 bg-transparent transition-transform duration-300 ease-in-out hover:scale-105 hover:brightness-110 ">
                Hello! 👋 I'm Abhiraj Sachan, a 2027 Computer Science graduate with a deep passion for Web3 and full-stack development. My journey revolves around blending the power of the MERN (MongoDB, Express.js, React, Node.js) stack with the decentralized potential of blockchain technology.
              </p>
              <br />

              <p className="text-justify leading-7 w-11/12 mx-auto text-cyan-600 bg-transparent transition-transform duration-300 ease-in-out hover:scale-105 hover:brightness-110 ">
                I specialize in building scalable, secure, and user-friendly Web3 applications, leveraging smart contracts, decentralized storage, and blockchain integrations. My goal is to craft innovative solutions that enhance user experiences in the decentralized web.
              </p>
              <br />

              <p className="text-justify leading-7 w-11/12 mx-auto text-cyan-600 bg-transparent transition-transform duration-300 ease-in-out hover:scale-105 hover:brightness-110 ">
                Alongside, I'm dedicated to honing my problem-solving skills through continuous learning and practice in data structures and algorithms. I strongly believe that mastering these fundamentals is key to building robust and efficient software.
              </p>

              <br />
            </div>
          </div>
          <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
            <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg ">
              <img
                src={profile}
                alt=""
                className="w-full object-cover bg-cyan-600 rounded-xl bg-transparent transition-transform duration-300 ease-in-out hover:scale-105 hover:brightness-110"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
