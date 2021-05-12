import React from 'react'

const MessageItem = ({avatar, name, time, text}) => {
    return (
        <div className="message-item">
            <div className="message-item__avatar" style={{backgroundImage: `url(${avatar})`}}></div>
            <div className="message-item__content">
                <div className="message-item__name-wrapper">
                    <div className="message-item__name">{name}</div>
                    <div className="message-item__time">{time}</div>
                </div>
                <div className="message-item__text"><span>{text}</span></div>
            </div>
        </div>
    )
}

export default MessageItem