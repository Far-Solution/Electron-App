import React from "react";
import Clientprofile from "./clientprofile.jsx";
import Action from "./action.jsx";

const Sidebar = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center h-full gap-3 p-4">
      <Clientprofile />
      <Action />
    </div>
  );
};

export default Sidebar;
