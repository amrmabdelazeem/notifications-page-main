import React from "react";

export default function Notification() {
  return (
    <div className="card flex rounded-md gap-2 p-3 bg-blue-300 bg-opacity-10">
      <img
        className="w-8 h-8"
        src="./images/avatar-mark-webber.webp"
        alt="avatar"
      />
      <div className="flex flex-col">
        <span className=" relative text-sm text-gray-400">
          <span className="text-black font-bold mr-1 ">Mark Webber</span>{" "}
          <span className="">reacted to your recent post</span>{" "}
          <span className=" font-semibold text-gray-500 ml-1">
            My first tournament today!
          </span>
          <div className="ml-2 inline absolute bottom-1.5 rounded w-2 h-2 bg-primary"></div>
        </span>
        <p className="text-xs  mt-1 text-gray-400">1m ago</p>
      </div>
    </div>
  );
}
