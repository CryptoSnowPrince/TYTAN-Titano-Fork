import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
const Header = () => {
  return (
    <div>
      <div className=" container pt-14 pb-10 md:py-6 md:flex justify-between items-center">
        <Link to="/">
          <img
            src={Logo}
            alt=""
            className=" w-10/12  md:max-w-xs md:w-full mx-auto"
          />
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
          <button className="m-2 block mx-auto md:mx-2 mt-8 md:mt-2 bg-primary text-black  py-3.5 px-10  md:py-2 rounded-md md:px-6 uppercase  font-bold btn">
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
