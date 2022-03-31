import React from "react";
import { FaDiscord, FaReddit, FaTwitter, FaGithub } from "react-icons/fa";
const Footer = () => {
  const linkList = [
    {
      icon: <FaDiscord />,
      link: "https://discord.com/invite/xxdS792B7q",
    },
    {
      icon: <FaReddit />,
      link: "https://discord.com/invite/xxdS792B7q",
    },
    {
      icon: <FaTwitter />,
      link: "https://discord.com/invite/xxdS792B7q",
    },
    {
      icon: <FaGithub />,
      link: "https://discord.com/invite/xxdS792B7q",
    },
  ];

  return (
    <div className="py-20 footer">
      <div className="container">
        <div className="custom-container">
          <h2 className="text-5xl font-bold text-center">Keep in Touch</h2>
          <div className="grid grid-flow-col justify-center items-center gap-x-6 mt-10">
            {linkList.map((val, i) => (
              <a className="block text-4xl" href={val.link} key={i} target={"_blank"} rel="noreferrer">
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
