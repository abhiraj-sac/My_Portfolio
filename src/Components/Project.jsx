import React, { useState } from "react"
import storyscape from "../assets/images/storyscape.png";
import paytm from "../assets/images/paytm.png";
import weather from "../assets/image/weather.png";
import todo from "../assets/image/todo.png";
import google from "../assets/image/google.png";
import rock from "../assets/image/rock.png";
import FileSharing from "../assets/image/FileSharing.png";
import LinkNest from "../assets/image/LinkNest.png";
import digilocker from "../assets/image/digilocker.png";
import metaTransfer from "../assets/image/metatransfer.png";
import medical from "../assets/image/medical.png";
// import "swiper/css";
// import "swiper/css/pagination";

function Project() {
  const [selectedCategory, setSelectedCategory] = useState("All Projects")
  const projects = [
    {
      img: medical,
      name: "WhatsApp-Chat-Analysis",
      github_link: "https://github.com/abhiraj-sac/WhatsApp-Chat-Analysis-Project-End-to-End-Project-with-Deployment",
      live_link: "https://hospital-managemnet.vercel.app/",
      tech: "ML, Data Analytics,Pandas,Numpy,Seaborn,Matplotlib,Streamlit ",
      videoURL: "https://res.cloudinary.com/ddnpto5af/video/upload/v1739814207/Project%20Videos/Medical_1_wrrckx.mp4",
      status: "Completed",
      category: "Web3 Projects",
    },
    {
      img: metaTransfer,
      name: "Meta Transfer",
      github_link: "https://github.com/abhiraj-sac/DSA-LEETCODE",
      live_link: "https://meta-transfer.vercel.app/",
      tech: "LeetCode",
      videoURL: "https://res.cloudinary.com/ddnpto5af/video/upload/v1738132689/Project%20Videos/metaTransfer_yrm3ug.mp4",
      status: "Completed",
      category: "DSA",
    },
    {
      img: digilocker,
      name: "DigiLocker 3.0",
      github_link: "https://github.com/VibhavSachan46/DigiLocker-3.0",
      live_link: "https://digi-locker-3-0.vercel.app/",
      tech: "Solidity, JS, ReactJS,  Ether.js, Pinata, Hardhat, MetaMask, Tailwind CSS",
      videoURL: "https://res.cloudinary.com/ddnpto5af/video/upload/v1737575394/Project%20Videos/digilocker_kwnnta.mp4",
      status: "Completed",
      category: "Web3 Projects",
    },
    {
      img: storyscape,
      name: "Story Scape",
      github_link: "https://github.com/VibhavSachan46/Blog-Completed",
      live_link: "https://story-scape.vercel.app/",
      tech: "JS, ReactJS, NodeJS, ExpressJS, MongoDB, JWT, Tailwind CSS, Cloudinary, Redux Toolkit",
      videoURL: "https://res.cloudinary.com/ddnpto5af/video/upload/v1724913613/Project%20Videos/StoryScape_s9f6js.mp4",
      status: "Completed",
      category: "Full Stack Projects",
    },
    {
      img: LinkNest,
      name: "Link Nest",
      github_link: "https://github.com/VibhavSachan46/Link-Nest",
      live_link: "",
      tech: "Type Script, NextJS, NodeJS, MongoDB, JWT, Tailwind CSS, Cloudinary, JWT, Shadcn",
      videoURL: "https://res.cloudinary.com/ddnpto5af/video/upload/v1724915604/Project%20Videos/linbknest_demo_1_yb4fyx.mp4",
      status: "In Progress",
      category: "Full Stack Projects",
    },
    {
      img: FileSharing,
      name: "Flick-Files",
      github_link: "https://github.com/VibhavSachan46/filesharing",
      live_link: "https://flick-files.vercel.app/",
      tech: "JavaScript, ReactJS, NodeJS, ExpressJS, MongoDB, JWT, Tailwind CSS, Cloudinary",
      videoURL: "https://res.cloudinary.com/ddnpto5af/video/upload/v1725348805/Project%20Videos/flick_files_flyjgc.mp4",
      status: "In Progress",
      category: "Full Stack Projects",
    },
    {
      img: paytm,
      name: "Digital Wallet App",
      github_link: "https://github.com/VibhavSachan46/Paytm",
      live_link: "https://paytm-frontend-two.vercel.app/signin",
      tech: "JavaScript, ReactJS, NodeJS, ExpressJs, MongoDB, JWT, Tailwind CSS, JWT",
      status: "Completed",
      category: "Full Stack Projects",
    },
    {
      img: weather,
      name: "Weather",
      github_link: "https://github.com/VibhavSachan46/weather1",
      live_link: "https://weather-ten-drab.vercel.app/",
      tech: "JavaScript, ReactJS",
      status: "Completed",
      category: "Frontend Projects",
    },
  ];

  const filterprojects = selectedCategory === "All Projects"
    ? projects : projects.filter((project) => project.category === selectedCategory);

  return (
    <section id="projects" className="py-10 text-white">
      <div className="text-center mt-16">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
      </div>
      <br />
      {/* Category Navigation */}
      <div className="flex justify-center space-x-4 my-4">
        {["All Projects", "Web3 Projects", "Full Stack Projects", "Frontend Projects", "DSA"].map((catagory) => (
          <button
            key={catagory}
            className={`px-4 py-2 rounded-lg text-white transition-all ${selectedCategory === catagory ? "bg-cyan-600" : "bg-gray-800 hover:bg-gray-700"
              }`}
            onClick={() => setSelectedCategory(catagory)}
          >
            {catagory}
          </button>
        ))
        }
      </div>
      <div className="px-28 py-4">
        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-3 lg:px-5 sm:px-5">
         {filterprojects.map((project_info,i) =>(
          <div
              key={i}
              className="flex flex-col bg-slate-700 p-4 rounded-3xl justify-center items-center bg-transparent transition-transform duration-300 ease-in-out hover:scale-105 hover:brightness-110"
            >
                            <h3 className="text-3xl lg:font-Heading my-4 ">{project_info.name}</h3>
              <img src={project_info.img} alt="" className="rounded-lg w-full" />
              <p className="p-2 lg:font-Heading">{project_info.tech}</p>
                            {/* Status Indicator */}
              <div
                className={`status-indicator ${
                  project_info.status === "In Progress"
                    ? "bg-yellow-500 hover:bg-yellow-700 hover:cursor-pointer"
                    : "bg-green-500 hover:bg-green-700 hover:cursor-pointer"
                } text-white rounded-full px-4 py-2 mt-4 mb-4`}
              >
                {project_info.status}
              </div>
               <div className="flex gap-3 mt-4">
                {project_info.github_link && (
                  <a
                    href={project_info.github_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white bg-gray-800 px-2 py-2 inline-block rounded-2xl hover:bg-gray-900 hover:text-cyan-600 justify-center items-center"
                  >
                    Git hub
                  </a>
                )}

                {project_info.live_link && (
                  <a
                    href={project_info.live_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white bg-gray-800 px-2 py-2 inline-block rounded-2xl hover:bg-gray-900 hover:text-cyan-600 justify-center items-center"
                  >
                    Live Project
                  </a>
                )}
                </div>
              </div>
         ))}
        </div>
      </div>
    </section>
  )
}
export default Project