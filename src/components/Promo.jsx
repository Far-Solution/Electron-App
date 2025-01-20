import { Button, Typography } from "antd";
import React from "react";

const { Title } = Typography;

const Promo = () => {
  return (
    <div className="w-full h-full flex flex-col justify-around">
      <div>
        <Button
          style={{
            background: "transparent",
            color: "white",
            borderRadius: "30px",
          }}
        >
          20% off
        </Button>
        <div className="flex items-center">
          <Button
            style={{
              background: "transparent",
              color: "white",
              borderRadius: "30px",
            }}
          >
            Free Popcorn
          </Button>
          <Button
            style={{
              background: "transparent",
              color: "white",
              borderRadius: "30px",
            }}
          >
            5% off
          </Button>
        </div>
      </div>
      <div>
        <Typography className="text-white text-[22px]" level={4}>
          Promo
        </Typography>
        <div className="flex">
          <Typography className="text-white text-[42px]">24</Typography>
          <Typography className="text-white text-[17px]">ready</Typography>
        </div>
      </div>
    </div>
  );
};

export default Promo;
