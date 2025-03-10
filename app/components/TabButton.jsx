
import React from "react";

const TabButton = ({ selectTab, active, children }) => {
  return (
    <button
      onClick={selectTab}
      className={`mr-3 font-semibold hover:text-white text-[#ADB7BE] border-b ${active ? "border-purple-200" : "border-transparent"}`}
    >
      {children}
    </button>
  );
};

export default TabButton;

