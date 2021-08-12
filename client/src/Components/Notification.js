import React from 'react'

export default function Notification({ notifications }) {
  
  return (
    <div>
      <h1 className="notifcations-headline">Welcome to the Notification Center</h1>
      <div className="notification-parent">
      {notifications && notifications.map((notification) => {
        return (
          <>
          <h2>{notification.title}</h2>
          <p>{notification.content}</p>
          </>
          )
          
        })}
        </div>
    </div>
  )
}
