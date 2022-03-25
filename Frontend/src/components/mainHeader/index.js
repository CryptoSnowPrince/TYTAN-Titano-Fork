import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
const Header = () => {
  return (
    <div>
      <div className=" container py-6 md:flex justify-between items-center">
        <Link to="/">
          <img src={Logo} alt="" className=" max-w-xs w-full mx-auto" />
        </Link>
        <div className="md:flex items-center justify-end">
          <ul className="flex items-center justify-center py-2 md:py-0 my-4 md:my-0 md:justify-end nav-menu">
            {linkList.map((val, i) => (
              <li key={i} className="uppercase font-bold text-lg text-white">
                {" "}
                <a href={val.link} className="p-2">
                  {val.text}
                </a>{" "}
              </li>
            ))}
          </ul>
          <button className="m-2 block font-bold mx-auto md:mx-2 mt-6 md:mt-2 bg-primary text-black  py-1.5 rounded-md px-4 uppercase  md:text-sm">
            Open App
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;

const linkList = [
  {
    text: "FAQ's",
    link: "#",
  },
  {
    text: "Whitepaper",
    link: "#",
  },
  {
    text: "glossary",
    link: "#",
  },
  {
    text: "Discord",
    link: "#",
  },
];
