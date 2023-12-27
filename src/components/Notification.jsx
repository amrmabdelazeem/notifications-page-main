import React from "react";

export default function Notification(props) {
  return (
    <div className="card flex rounded-md gap-2 p-3 mb-2 bg-blue-300 bg-opacity-10">
      <img
        className="w-8 h-8"
        src={`./images/avatar-${props.avatar}.webp`}
        alt="avatar"
      />
      <div className="flex flex-col">
        <span className=" relative text-sm text-gray-400">
          <span className="text-black font-bold mr-1 ">{props.userName}</span>{" "}
          <span className="">{props.action}</span>{" "}
          <span
            className={`font-semibold ml-1 ${
              props.achievement === "Chess Club"
                ? "text-secondary"
                : "text-gray-500"
            }`}
          >
            {props.achievement}
          </span>
          <div className="ml-2 inline absolute bottom-1.5 rounded w-2 h-2 bg-primary"></div>
        </span>
        <p className="text-xs  mt-1 text-gray-400">{props.timestamp}</p>
        <div className={`${props.privateMsg ? "block" : "hidden"} text-gray-500 border-2 rounded-md text-xs py-4 px-5 mt-3`}>
          <p>
            Hello, thanks for setting up the Chess Club. I've been a member for
            a few weeks now and I'm already having lots of fun and improving my
            game.
          </p>
        </div>
      </div>
    </div>
  );
}
