import { Typography } from "antd";
import React from "react";
import Clientbtn from "./clientbtn.jsx";
import { BiSolidBookContent } from "react-icons/bi";
import { CiCompass1 } from "react-icons/ci";
import { IoMdSettings } from "react-icons/io";
import { MdComputer } from "react-icons/md";
0;

const { Title } = Typography;

const Clientprofile = () => {
  return (
    <div
      style={{ height: "100%" }}
      className="flex flex-col items-center bg-[#1E1C27] rounded-[100px] w-full h-full"
    >
      <Title level={3} className="!text-white !mb-0 mt-10">
        "Client's Name"
      </Title>
      <Title level={5} className="!text-white !mt-0 ">
        Welcome to Adminisyration Panel
      </Title>
      <div
        style={{
          width: "350px",
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
          marginTop: "40px",
        }}
      >
        <Clientbtn icon={<MdComputer size={35} />} name={"Status"} />
        <Clientbtn icon={<BiSolidBookContent size={35} />} name={"Content"} />
        <Clientbtn icon={<CiCompass1 size={35} />} name={"Rates"} />
        <Clientbtn icon={<IoMdSettings size={35} />} name={"Setting"} />
      </div>
    </div>
  );
};

export default Clientprofile;
