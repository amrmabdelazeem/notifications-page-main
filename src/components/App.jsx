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
      <Notification avatar="mark-webber" userName="Mark Webber" action="react to your recent post" achievement="My first tournament today!" timestamp="1m ago" read={true}/>
      <Notification avatar="angela-gray" userName="Angela Gray" action="followed you" achievement="" timestamp="5m ago" read={true} />
      <Notification avatar="jacob-thompson" userName="Jacob Thompson" action="has joined your group" achievement="Chess Club" timestamp="1 day ago" read={true}/>
      <Notification avatar="rizky-hasanuddin" userName="Rizky Hasanuddin" action="sent you a private message" achievement="" timestamp="5 days ago" privateMsg = {true} read={false}/>
      </div>
    </div>
  );
}
