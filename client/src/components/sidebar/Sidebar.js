import React from "react";
import "./style.css";
import { useLocation, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="bg-[#111827] min-h-screen">
      <div className="text-center p-6">
        <img src="images/logo.png" alt="logo" />
        <div className="flex flex-col gap-4 mt-12">
          <button
            type="button"
            className={`text-[#9ca3af] font-semibold text-start w-full py-2 text-lg px-10 rounded-lg sidebar-btn ${
              location.pathname === "/" ? "sidebar-active" : ""
            }`}
            onClick={() => navigate("/")}
          >
            Dashboard
          </button>
          <button
            type="button"
            className={`text-[#9ca3af] font-semibold text-start w-full py-2 text-lg px-10 rounded-lg sidebar-btn ${
              location.pathname === "/insights" ? "sidebar-active" : ""
            }`}
            onClick={() => navigate("/insights")}
          >
            Insights
          </button>
          {/* <button
            type="button"
            className={`text-[#9ca3af] font-semibold text-start w-full py-2 text-lg px-10 rounded-lg sidebar-btn ${
              location.pathname === "/guide" ? "sidebar-active" : ""
            }`}
            onClick={() => navigate("/guide")}
          >
            Guide
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
