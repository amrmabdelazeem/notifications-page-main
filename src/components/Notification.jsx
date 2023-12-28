import React from "react";

export default function Notification(props) {

  return (
    <div
      onClick={() => {
        let targetId = props.id;
        let targetState = props.read;
        props.onChild(targetId, targetState)
      }}
      className={`card flex rounded-md gap-2 p-3 mb-2 bg-opacity-10 cursor-pointer ${props.read ? "bg-blue-300" : "bg-transparent"
        }`}
    >
      <img
        className="w-8 h-8"
        src={`./images/avatar-${props.avatar}.webp`}
        alt="avatar"
      />
      <div className="flex flex-col">
        <span className=" relative text-sm text-gray-500">
          <span className="text-black font-bold mr-1 cursor-pointer hover:text-secondary">{props.userName}</span>{" "}
          <span className="">{props.action}</span>{" "}
          <span
            className={`font-semibold ml-1 ${props.achievement === "Chess Club"
                ? "text-secondary"
                : "text-gray-500"
              } cursor-pointer hover:text-secondary`}
          >
            {props.achievement}
          </span>
          <div
            className={`ml-2 inline absolute bottom-1.5 rounded w-2 h-2 ${props.read ? "bg-primary" : "bg-transparent"
              } animate-pulse`}
          ></div>
        </span>
        <p className="text-xs  mt-1 text-gray-400">{props.timestamp}</p>
        <div
          className={`${props.privateMsg ? "block" : "hidden"
            } text-gray-500 border rounded-md text-xs p-3 pr-5 mt-3 lg:text-sm hover:bg-blue-100 cursor-pointer`}
        >
          <p>
            Hello, thanks for setting up the Chess Club. I've been a member for
            a few weeks now and I'm already having lots of fun and improving my
            game.
          </p>
        </div>
      </div>
      <div
        className={`picture ${props.picture ? "" : "hidden"
          }  grow flex justify-end w-10`}
      >
        <img className="w-8 h-8 cursor-pointer" src="./images/image-chess.webp" alt="chess" />
      </div>
    </div>
  );
}
