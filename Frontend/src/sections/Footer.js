import React from "react";
import { FaDiscord, FaReddit, FaTwitter, FaGithub } from "react-icons/fa";
const Footer = () => {
  const linkList = [
    {
      icon: <FaDiscord />,
      link: "#",
    },
    {
      icon: <FaReddit />,
      link: "#",
    },
    {
      icon: <FaTwitter />,
      link: "#",
    },
    {
      icon: <FaGithub />,
      link: "#",
    },
  ];

  return (
    <div className="py-20 footer">
      <div className="container">
        <div className="custom-container">
          <h2 className="text-5xl font-bold text-center">Keep in Touch</h2>
          <div className="grid grid-flow-col justify-center items-center gap-x-6 mt-10">
            {linkList.map((val, i) => (
              <a className="block text-4xl" href={val.link} key={i}>
                {val.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
