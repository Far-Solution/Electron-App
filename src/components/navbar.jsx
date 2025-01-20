import { Typography } from "antd";
import React from "react";
import { BiSolidBookContent } from "react-icons/bi";
import { CiCompass1 } from "react-icons/ci";
import { FaUserGroup } from "react-icons/fa6";
import { ImSearch } from "react-icons/im";
import { IoMdSettings } from "react-icons/io";
import { MdComputer } from "react-icons/md";

const { Title } = Typography;

const Navbar = () => {
  const imagePath = "./public/images/Logo.png";
  return (
    <div className="flex flex-col justify-around items-center h-screen py-[10px] pt-[10px] pb-[100px]">
      <img src={imagePath} alt="Logo" />
      <div className="flex flex-col justify-around items-center h-[500px] p-[25px] rounded-[100px] bg-[#28272E]">
        <MdComputer size={30} />
        <BiSolidBookContent size={30} />
        <CiCompass1 size={30} />
        <FaUserGroup size={30} />
        <ImSearch size={30} />
        <IoMdSettings size={30} />
      </div>
      <div>
        <Title style={{ color: "white" }}>09:57</Title>
        <Typography className="text-white">12 Sep,2024</Typography>
      </div>
    </div>
  );
};

export default Navbar;
