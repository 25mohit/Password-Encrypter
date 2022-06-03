import React from 'react'
import './NotificationBar.css'

export const NotificationBar = ({ message, setShowNotification }) => {
    setTimeout(() => {
            setShowNotification(false)
    },1500)
  return (
    <div className='notification-bar'>
        <div className="container-notification">
                <p className="notification-text">{message}</p>
        </div>
    </div>
  )/* This app is created by Mohit Agarwal  :: -> :: eMail : mohit724agarwal@gmail.com */
}
