import React from "react";
import github from "../assets/image/github.png"
import node from "../assets/image/node.png"
import javascript from "../assets/image/javascript.png"
import react from "../assets/image/react.png"
import nextjs from "../assets/image/nextjs.png"
import tailwind from "../assets/image/tailwind.png"
import mongodb from "../assets/image/m.jpg"
import prisma from "../assets/image/prisma.jpeg"
import ts from "../assets/image/ts.png"
import docker from "../assets/image/docker.png"
import redux from "../assets/image/redux.png"
import pgs from "../assets/image/postgres.png"
import ether from "../assets/image/ether.png"
import solidity from "../assets/image/solidity.png"
import hardhat from "../assets/image/hardhat.png"
import metamask from "../assets/image/metamask.png"
function Skills(){
    const skills =[
        {logo:solidity,name:"solidity"},
        {logo:metamask, name:"metamask"},
        {logo:docker,name:"docker"},
        {logo:redux,name:"redux"},
        {logo:ether,name:"ether"},
        {logo:pgs,name:"pgs"},
        {logo:github,name:"github"},
        {logo:node,name:"node"},
        {logo:javascript,name:"javascript"},
        {logo:nextjs,name:"nextjs"},
        {logo:mongodb,name:"mongodc"},
        {logo:react,name:"react"}
    ]
    return(
   <section id="skills" className="py-10  relative mt-8">
    <div className="mt-8 text-gray-100 text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Skills</span>
        </h3>
        <div className="flex items-center justify-center mt-12 gap-10 flex-wrap ">
            {skills.map((skill,i) =>(
                <div
              key={i}
              className="border-2 group border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl p-8 bg-transparent transition-transform duration-300 ease-in-out hover:scale-105 hover:brightness-110"
            >
              <div
                style={{
                  background: `conic-gradient(rgb(8,145,170) ${skill.count}%,#ddd ${skill.count}%)`,
                }}
                className="w-32 h-32 flex items-center justify-center rounded-full"
              >
                <div className="text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600 relative overflow-hidden">
                  <img src={skill.logo} alt="skill logo" className="w-full h-full object-cover absolute top-0 left-0 rounded-full" />
                </div>


              </div>
              <p className="text-xl mt-3 lg:font-Madimi">{skill.name}</p>
            </div>
          
            ))}
        </div>
        </div>
   </section>
    )
}
export default Skills