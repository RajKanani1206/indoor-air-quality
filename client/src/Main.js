import React from "react";
import Sidebar from "./components/sidebar/Sidebar";

const Main = ({ children }) => {
  return (
    <div>
      <div className="grid grid-cols-5">
        <div>
          <Sidebar />
        </div>
        <div className="col-span-4">
          <div className="text-[#111827] italic font-medium text-end dash-nav p-[20px] pe-16">Hi, Raj</div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Main;
