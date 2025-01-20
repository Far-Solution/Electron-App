import React from "react";
import Promo from "./Promo.jsx";
import Confirmation from "./confirmation.jsx";
import Status from "./status.jsx";

const Home = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "black",
        height: "100%",
        gap: "12px",
      }}
    >
      <div
        style={{
          height: "100%",
          borderRadius: "150px",
          backgroundColor: "#1E1C27",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Status />
      </div>
      <div
        style={{
          display: "flex",
          gap: "12px",
          alignItems: "flex-end",
          height: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            borderRadius: "100px",
            backgroundColor: "#28272E",
            height: "100%",
            maxWidth: "300px",
          }}
        >
          <Promo />
        </div>
        <div
          style={{
            width: "100% ",
            borderRadius: "100px",
            backgroundColor: "#28272E",
            height: "100%",
            display: "flex",
            alignItems: "center  ",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Confirmation />
        </div>
      </div>
    </div>
  );
};

export default Home;
