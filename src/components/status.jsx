import { Button } from "antd";
import Typography from "antd/es/typography/Typography";
import React from "react";
import { MdOutlineComputer } from "react-icons/md";
const { Title } = Typography;

const Status = () => {
  const imagePath = "./public/images/Logo.png";
  return (
    <div className="w-full">
      <div style={{ display: "flex", position: "relative" }}>
        <div className="flex items-center gap-2 mt-6">
          <MdOutlineComputer className="!text-white" size={35} />
          <div>
            <Title className="!mb-0 !text-white" level={3}>
              STATUS
            </Title>
            <Typography className="!text-white">/Computer Status</Typography>
          </div>
        </div>
        <img
          style={{ position: "absolute", left: "45%", objectFit: "cover" }}
          src={imagePath}
          alt="Logo"
        />
      </div>
      <div
        className="flex items-center justify-between border border-gray-300 rounded-md"
        style={{ width: "100%", marginTop: "40px" }}
      >
        {/* Transparent Buttons */}
        <div>
          <Button
            type="text"
            className="text-white hover:!text-white hover:underline hover:underline-offset-4 hover:decoration-red-500 active:text-red-900 active:underline active:underline-offset-4 active:decoration-red-500"
          >
            Button 1
          </Button>
          <Button
            type="text"
            className="text-white hover:!5text-white hover:underline hover:underline-offset-4 hover:decoration-red-500 active:text-white active:underline active:underline-offset-4 active:decoration-red-500"
          >
            Button 2
          </Button>
        </div>

        {/* White Background Button */}
        <Button
          style={{
            backgroundColor: "white",
            border: "1px solid #d9d9d9",
            color: "black",
          }}
        >
          Button 3
        </Button>
      </div>
    </div>
  );
};

export default Status;
