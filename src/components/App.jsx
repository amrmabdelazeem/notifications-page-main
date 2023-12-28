import React, { useState } from "react";
import Notification from "./Notification.jsx";

export default function App() {
const [isRead, setIsRead] = useState({first: true, second: true, thrid: true})
const [notifications, setNotifications] = useState(3);


const markAllRead = () =>{
  setIsRead(!isRead);
  setNotifications(0)
}

const decreaseNotification = (state) => {
  if(state && notifications> 0){
    setNotifications(notifications-1);
  }
}

const MarkAsRead = (id, state) =>{
  if(Object.values(isRead)[id-1]){
    setIsRead((prevState)=>{
      return {...prevState, [Object.keys(isRead)[id-1]]: !state};
    })
  }
}


function handleClick(id, state){
  decreaseNotification(state);
  MarkAsRead(id, state);
}

  return (
    <div className="container rounded-lg p-8 pb-0 font-jakarta lg:w-7/12 xl:w-52% bg-white lg:m-10">
      <div className="header flex justify-between">
        <h1 className=" text-black font-jakarta800 text-base">
          Notifications
          <span className=" text-white bg-secondary py-1 px-3 rounded-md ml-2">
            {notifications}
          </span>
        </h1>
        <button onClick={markAllRead} className=" text-gray-400 text-xs">Mark all as read</button>
      </div>
      <div className="notifications pt-5">
        <Notification
          id={1}
          onChild= {handleClick}
          avatar="mark-webber"
          userName="Mark Webber"
          action="react to your recent post"
          achievement="My first tournament today!"
          timestamp="1m ago"
          read={isRead.first}
        />
        <Notification
          id={2}
          onChild= {handleClick}
          avatar="angela-gray"
          userName="Angela Gray"
          action="followed you"
          achievement=""
          timestamp="5m ago"
          read={isRead.second}
        />
        <Notification
          id={3}
          onChild= {handleClick}
          avatar="jacob-thompson"
          userName="Jacob Thompson"
          action="has joined your group"
          achievement="Chess Club"
          timestamp="1 day ago"
          read={isRead.thrid}
        />
        <Notification
          id={4}
          onChild= {handleClick}
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
          onChild= {handleClick}
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
          onChild= {handleClick}
          avatar="nathan-peterson"
          userName="Nathan Peterson"
          action="reacted to your recent post"
          achievement="5 end-game strategies to increase your win rate"
          timestamp="2 weeks ago"
          // read={false}
        />
        <Notification
          id={7}
          onChild= {handleClick}
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
