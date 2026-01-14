import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [sticky, setsticky] = useState(false);
  const [active, setActive] = useState("HOME");

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 0 ? setsticky(true) : setsticky(false);
      console.log(window.scrollY > 0 ? "yessss" : "noooo");
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuLinks = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "SKILLS", link: "#skills" },
    { name: "PROJECT", link: "#projects" },
    { name: "CONTACT", link: "#contact" }
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full px-10 py-4 z-[999]
transition-all duration-300
${sticky ? "bg-black text-white shadow-lg" : "bg-gray-800 text-white"}
`}
      >
        <div className="flex items-center justify-between">
          <div className="mx-7">
          <a href="/">
            <h4 className="text-4xl uppercase font-bold lg:font-Heading tracking-widest">
              Ab<span className="text-cyan-600">hir</span>aj
            </h4>
          </a>
        </div>

          <ul className="flex gap-8 text-lg">
            {menuLinks.map((menu, index) => (
              <li
                className={`${active === menu.name ? "text-cyan-400" : ""}`}
                onClick={() => setActive(menu.name)}
                key={index}
              >
                <a href={menu.link}>{menu.name}</a>
              </li>
            ))}
          </ul>
        </div>

      </nav>

      
    </>
  );
};

export default Navbar;
