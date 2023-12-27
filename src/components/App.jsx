import React from "react";
import Notification from "./Notification.jsx";

export default function App() {
  return (
    <div className="container py-5 px-4 font-jakarta">
      <div className="header flex justify-between">
        <h1 className=" text-black font-jakarta800 text-base">
          Notifications{" "}
          <span className=" text-white bg-secondary py-0 px-2 rounded-md">
            3
          </span>
        </h1>
        <button className=" text-gray-400 text-xs">Mark all as read</button>
      </div>
      <div className="notifications pt-5">
      <Notification />
      </div>
    </div>
  );
}
