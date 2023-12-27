import React, { useState } from "react";
import Notification from "./Notification.jsx";

export default function App() {
const [isRead, setIsRead] = useState(true)
const [notifications, setNotifications] = useState(3);

const markAllRead = () =>{
  setIsRead(!isRead);
  setNotifications(0)
}

  return (
    <div className="container py-5 px-4 font-jakarta">
      <div className="header flex justify-between">
        <h1 className=" text-black font-jakarta800 text-base">
          Notifications
          <span className=" text-white bg-secondary py-0 px-2 rounded-md">
            {notifications}
          </span>
        </h1>
        <button onClick={markAllRead} className=" text-gray-400 text-xs">Mark all as read</button>
      </div>
      <div className="notifications pt-5">
        <Notification
          id={1}
          avatar="mark-webber"
          userName="Mark Webber"
          action="react to your recent post"
          achievement="My first tournament today!"
          timestamp="1m ago"
          read={isRead}
        />
        <Notification
          id={2}
          // onclicked={(isRead)=> handleCardClicks(2, isRead)}
          avatar="angela-gray"
          userName="Angela Gray"
          action="followed you"
          achievement=""
          timestamp="5m ago"
          read={isRead}
        />
        <Notification
          id={3}
          // onclicked={(isRead)=> handleCardClicks(3, isRead)}
          avatar="jacob-thompson"
          userName="Jacob Thompson"
          action="has joined your group"
          achievement="Chess Club"
          timestamp="1 day ago"
          read={isRead}
        />
        <Notification
          id={4}
          // onclicked={(isRead)=> handleCardClicks(4, isRead)}
          avatar="rizky-hasanuddin"
          userName="Rizky Hasanuddin"
          action="sent you a private message"
          achievement=""
          timestamp="5 days ago"
          privateMsg={true}
          // read={false}
        />
        <Notification
          id={5}
          // onclicked={(isRead)=> handleCardClicks(5, isRead)}
          avatar="kimberly-smith"
          userName="Kimberly Smith"
          action="commented on your picture"
          achievement=""
          timestamp="1 week ago"
          // read={false}
          picture={true}
        />
        <Notification
          id={6}
          // onclicked={(isRead)=> handleCardClicks(6, isRead)}
          avatar="nathan-peterson"
          userName="Nathan Peterson"
          action="reacted to your recent post"
          achievement="5 end-game strategies to increase your win rate"
          timestamp="2 weeks ago"
          // read={false}
        />
        <Notification
          id={7}
          // onclicked={(isRead)=> handleCardClicks(7, isRead)}
          avatar="anna-kim"
          userName="Anna Kim"
          action="left the group"
          achievement="Chess Club"
          timestamp="2 weeks ago"
          // read={false}
        />
      </div>
    </div>
  );
}
