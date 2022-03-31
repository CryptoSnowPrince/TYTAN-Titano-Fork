/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./style.css";
import { FaTelegram, FaTwitter, FaMedium, FaDiscord } from "react-icons/fa";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CalculateIcon from "@mui/icons-material/Calculate";
import OfflineBoltIcon from "@mui/icons-material/OfflineBolt";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import Logo from "../../assets/logo.png";
const Sidebar = ({ show, setShow }) => {
  return (
    <div className={`sidebar ${show && "active"}  flex flex-col`}>
      <div className="grid grid-flow-col gap-x-3 justify-start  items-center sidebar-logo px-5">
        <Link to="../">
          <img src={Logo} alt="" />
        </Link>
      </div>
      <div className="flex flex-col  justify-between flex-1 px-6 py-4">
        <ul className=" pr-14">
          {menuList.map((val, i) => (
            <React.Fragment key={i}>
              <li>
                {i <= 2 ? (
                  <CustomLink to={val.link}>
                    {/* <span className="text-lg">{val.icon}</span> */}
                    <span>{val.text}</span>
                  </CustomLink>
                ) : (
                  <a
                    href={val.link}
                    target={"_blank"}
                    className=" grid grid-flow-col font-medium uppercase  text-base mb-2 justify-start gap-x-2 items-center py-2 px-6 hover:bg-primary-400 rounded-lg my-1"
                    rel="noreferrer"
                  >
                    {/* <span className="text-lg">{val.icon}</span> */}
                    <span>{val.text}</span>
                  </a>
                )}
              </li>
            </React.Fragment>
          ))}

          {/* <li>
            <ul className="grid grid-flow-col gap-6 justify-start items-center mt-6 ml-5">
              {socialList.map((val, i) => (
                <li key={i}>
                  <a href={val.link} className="text-lg">
                    {val.icon}
                  </a>
                </li>
              ))}
            </ul>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

const menuList = [
  {
    text: "Dashboard",
    icon: <DashboardIcon />,
    link: "dashboard",
  },
  {
    text: "Account",
    icon: <AccountCircleIcon />,
    link: "account",
  },
  {
    text: "Calculator",
    icon: <CalculateIcon />,
    link: "calculator",
  },
  {
    text: "Swap",
    icon: <OfflineBoltIcon />,
    link: "https://app.bogged.finance/bsc/swap?tokenIn=BNB&tokenOut=0xBA96731324dE188ebC1eD87ca74544dDEbC07D7f",
  },
  {
    text: "Docs",
    icon: <LibraryBooksIcon />,
    link: "https://docs.titano.finance/",
  },
];

// const socialList = [
//   {
//     link: "",
//     icon: <FaTelegram />,
//   },
//   {
//     link: "",
//     icon: <FaMedium />,
//   },
//   {
//     link: "",
//     icon: <FaTwitter />,
//   },
//   {
//     link: "",
//     icon: <FaDiscord />,
//   },
// ];

// const Logo = () => (
//   <svg
//     width="40"
//     height="46"
//     viewBox="0 0 60 35"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//     focusable="false"
//     aria-hidden="true"
//   >
//     <path
//       d="M22.7734 16.3522C21.8844 15.0987 20.5971 14.0266 18.5667 13.3545C19.5245 15.5218 18.4896 17.1043 16.9268 19.4907C16.3893 20.3109 15.7781 21.2444 15.1877 22.3413L19.7509 30.2098L24.7085 20.6529C24.2229 19.1549 23.681 17.6293 22.7745 16.3522H22.7734ZM25.9074 17.431C28.9805 10.5343 34.3375 10.478 40.6185 10.4121C41.6393 10.4014 42.6871 10.3907 43.7823 10.3428L48.2943 2.37514L3.80213 2.24556L8.19636 10.1974C8.75466 10.2177 9.28703 10.2335 9.81603 10.2493C12.7692 10.3371 15.6451 10.4228 18.6282 11.038L18.7115 11.0554C21.5779 11.8712 23.3683 13.328 24.6004 15.0654C25.1171 15.8064 25.5552 16.5992 25.9074 17.431ZM35.1465 19.6084C33.5759 17.0383 32.4857 15.2536 33.1376 13.4632C30.5168 14.3736 28.42 16.3364 27.1237 20.618L32.2734 29.825L36.7803 22.4032C36.2169 21.3588 35.6502 20.4349 35.1465 19.6084ZM33.2153 32.5894L27.0746 43.5643L26.1293 45.2544L25.1344 43.5953L19.8794 34.8338L19.863 34.8654L18.8383 33.0987L12.9399 22.9311L12.6357 22.4066L12.9089 21.8658C13.652 20.3966 14.4024 19.2507 15.0497 18.2637C16.4468 16.1296 17.2502 14.9032 15.5567 12.8165C13.6373 12.5996 11.7146 12.5421 9.75406 12.4841C8.98113 12.461 8.20369 12.4379 7.47526 12.4081L6.84147 12.3816L6.53614 11.8295L0.918284 1.66192L0 0L1.90135 0.00506834L50.212 0.145349L52.1274 0.150981L51.1849 1.81515L45.4273 11.9822L45.1265 12.514L44.5147 12.5478C43.2189 12.6199 41.9086 12.6334 40.6359 12.6469C39.1926 12.6616 37.8056 12.6762 36.4975 12.7951C34.5939 14.4091 35.4834 15.8688 37.0608 18.4422C37.6721 19.4428 38.3673 20.5796 39.0619 21.9272L39.3481 22.4816L39.0224 23.0184L33.2153 32.5894ZM21.0912 32.4987L26.0589 40.7869L30.9523 32.0452L25.9541 23.1153L21.0912 32.4987Z"
//       fill="url(#paint0_linear_0_9349)"
//     ></path>
//     <defs>
//       <linearGradient
//         id="paint0_linear_0_9349"
//         x1="26.0637"
//         y1="9.89939"
//         x2="26.0637"
//         y2="45.2544"
//         gradientUnits="userSpaceOnUse"
//       >
//         <stop stopColor="#28E0B2"></stop>
//         <stop offset="0.9999" stopColor="#67FFD9"></stop>
//         <stop offset="1" stopColor="#16866A"></stop>
//       </linearGradient>
//     </defs>
//   </svg>
// );

// const LogoText = () => (
//   <svg
//     width="220"
//     height="28"
//     viewBox="0 0 226 28"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//     // class="MuiSvgIcon-root name-icon MuiSvgIcon-colorPrimary MuiSvgIcon-fontSizeSmall"
//     focusable="false"
//     aria-hidden="true"
//   >
//     <path
//       d="M8.12023 27H15.4618V6.86629H23.3966V1.04494H0.148315V6.86629H8.12023V27ZM31.6936 27H39.0351V1.04494H31.6936V27ZM55.3448 27H62.6864V6.86629H70.6212V1.04494H47.3729V6.86629H55.3448V27ZM97.0438 27H104.682L93.1876 1.04494H85.9573L74.5 27H81.9899L84.0292 21.9573H95.0045L97.0438 27ZM86.1798 16.5438L89.5168 8.2382L92.8539 16.5438H86.1798ZM129.826 1.04494V14.8753L118.369 1.04494H112.325V27H119.518V13.1697L130.976 27H137.02V1.04494H129.826ZM160.849 27.5191C169.154 27.5191 175.272 21.809 175.272 14.0225C175.272 6.23596 169.154 0.525841 160.849 0.525841C152.543 0.525841 146.425 6.23596 146.425 14.0225C146.425 21.809 152.543 27.5191 160.849 27.5191ZM160.849 21.4382C156.918 21.4382 153.841 18.509 153.841 14.0225C153.841 9.53595 156.918 6.60674 160.849 6.60674C164.779 6.60674 167.857 9.53595 167.857 14.0225C167.857 18.509 164.779 21.4382 160.849 21.4382Z"
//       fill="white"
//     ></path>
//   </svg>
// );

function CustomLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link
        className={`custom-link ${match && "text-primary"
          } grid grid-flow-col font-medium  uppercase text-base mb-2 justify-start gap-x-2 items-center py-2 px-6 hover:bg-primary-400 rounded-lg my-1 `}
        to={to}
        {...props}
      >
        {children}
      </Link>
    </div>
  );
}
