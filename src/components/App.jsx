import React from "react";

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
        <div className="card flex rounded-md gap-2 p-3 bg-blue-300 bg-opacity-10">
          <img
            className="w-8 h-8"
            src="./images/avatar-mark-webber.webp"
            alt="avatar"
          />
          <div className="flex flex-col">
          <span className=" relative text-sm text-gray-400"><span className="text-black font-bold mr-1 ">Mark Webber</span> <span className="">reacted to your recent post</span> <span className=" font-semibold text-gray-500 ml-1">My first tournament today!</span>
          <div className="ml-2 inline absolute bottom-1 rounded w-2 h-2 bg-primary"></div></span>
          <p className="text-xs  mt-1 text-gray-400">1m ago</p>
          </div>
        </div>
      </div>
    </div>
  );
}
