import profile from "../assets/image/profile.jpg"
import { IoLogoGithub, IoLogoLinkedin, IoEggSharp } from "react-icons/io5";
import Type from "./Type"
const Hero = () => {
    const socal_media = [
  {
    icon: <IoLogoGithub />,
    link: "https://github.com/abhiraj-sac",
  },
  {
    icon: <IoLogoLinkedin />,
    link: "https://www.linkedin.com/in/abhiraj-sachan-05b9082a5/",
  },
  {
    icon: <IoEggSharp />,
    link: "https://leetcode.com/u/abhirajsac/",
  },
];


    return (

        <section
            id="home"
            className="min-h-screen flex py-10 md:flex-row flex-col items-center"
        >
            <div className="w-[40%] flex justify-center h-full mt-8 ">
                <img
                    src={profile}
                    alt=""
                    className="md:w-9/12 object-cover rounded-full bg-transparent transition-transform duration-300 ease-in-out hover:scale-105 hover:brightness-110 lg:mt-0 sm:mt-32"
                />
            </div>
            <div className="md:text-left text-center">
                <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
                    <span className="text-cyan-600 md:text-6xl text-5xl">
                        Hi there!
                        <br />
                    </span>
                    I'am <span className="text-cyan-600 md:text-6xl">Abhiraj Sachan</span>
                </h1>
                <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
                    {<Type />}
                </h4>
                <div className="mt-12 text-3xl flex items-center md:justify-start justify-center gap-5">
                    {socal_media?.map((social) =>(
                    <a
                        key = {social}
                 className="text-gray-600 hover:text-white cursor-pointer hover:text-cyan-600 transition-transform duration-300 ease-in-out hover:scale-110 hover:brightness-110"
                 href={social.link}
                 target="_blank"
                       >
                        {social.icon}
                        
                    </a>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default Hero