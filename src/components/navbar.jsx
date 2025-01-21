// import { Typography } from "antd";
// import React from "react";
// import { BiSolidBookContent } from "react-icons/bi";
// import { CiCompass1 } from "react-icons/ci";
// import { FaUserGroup } from "react-icons/fa6";
// import { ImSearch } from "react-icons/im";
// import { IoMdSettings } from "react-icons/io";
// import { MdComputer } from "react-icons/md";

// const { Title } = Typography;

// const Navbar = () => {
//   const imagePath = "./public/images/Logo.png";
//   return (
//     <div className="flex flex-col justify-around items-center h-screen py-[10px] pt-[10px] pb-[100px]">
//       <img src={imagePath} alt="Logo" />
//       <div className="flex flex-col justify-around items-center h-[500px] p-[25px] rounded-[100px] bg-[#28272E]">
//         <MdComputer size={30} />
//         <BiSolidBookContent size={30} />
//         <CiCompass1 size={30} />
//         <FaUserGroup size={30} />
//         <ImSearch size={30} />
//         <IoMdSettings size={30} />
//       </div>
//       <div>
//         <Title style={{ color: "white" }}>09:57</Title>
//         <Typography className="text-white">12 Sep,2024</Typography>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
import "./navbar.scss";
import React, { useState } from 'react';



import statusIcon from "../images/1na.png";
import statusIconActive from "../images/1a.png";
import contentIcon from "../images/2na.png";
import contentIconActive from "../images/2a.png";
import pricingIcon from "../images/3na.png";
import pricingIconActive from "../images/3a.png";
import usersIcon from "../images/4na.png";
import usersIconActive from "../images/4a.png";
import statisticsIcon from "../images/5na.png";
import statisticsIconActive from "../images/5a.png";
import settingsIcon from "../images/6na.png";
import settingsIconActive from "../images/6a.png";

const Navbar = () => {
    const [activeIndex, setActiveIndex] = useState(0);
  
    return (
      <div className='main'>
        <div
          className={`status ${activeIndex === 0 ? 'active' : ''}`}
          onClick={() => setActiveIndex(0)}
        >
          <img
            src={activeIndex === 0 ? statusIconActive : statusIcon}
            alt="Status Icon"
            className="nav-icon"
          />
        </div>
  
        <div
          className={`content ${activeIndex === 1 ? 'active' : ''}`}
          onClick={() => setActiveIndex(1)}
        >
          <img
            src={activeIndex === 1 ? contentIconActive : contentIcon}
            alt="Content Icon"
            className="nav-icon"
          />
        </div>
  
        <div
          className={`pricing ${activeIndex === 2 ? 'active' : ''}`}
          onClick={() => setActiveIndex(2)}
        >
          <img
            src={activeIndex === 2 ? pricingIconActive : pricingIcon}
            alt="Pricing Icon"
            className="nav-icon"
          />
        </div>
  
        <div
          className={`users ${activeIndex === 3 ? 'active' : ''}`}
          onClick={() => setActiveIndex(3)}
        >
          <img
            src={activeIndex === 3 ? usersIconActive : usersIcon}
            alt="Users Icon"
            className="nav-icon"
          />
        </div>
  
        <div
          className={`statistics ${activeIndex === 4 ? 'active' : ''}`}
          onClick={() => setActiveIndex(4)}
        >
          <img
            src={activeIndex === 4 ? statisticsIconActive : statisticsIcon}
            alt="Statistics Icon"
            className="nav-icon"
          />
        </div>
  
        <div
          className={`settings ${activeIndex === 5 ? 'active' : ''}`}
          onClick={() => setActiveIndex(5)}
        >
          <img
            src={activeIndex === 5 ? settingsIconActive : settingsIcon}
            alt="Settings Icon"
            className="nav-icon"
          />
        </div>
      </div>
    );
  };
  
  export default Navbar;
  