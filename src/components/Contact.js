import React from 'react'

const Contact = ({fullname, avatar, text, qty, time}) => {
    return (
        <div className="contact">
            <div className="contact__avatar"
                 style={{backgroundImage: `url(${avatar})`}}>
            </div>
            <div style={{width: '83%'}}>
                <div className="contact__wrapper-top">
                    <div className="contact__name">
                        <span>{fullname}</span>
                    </div>
                    <div className="contact__last-message-time">
                        <span>{time}</span>
                    </div>
                </div>
                <div className="contact__wrapper-bottom">
                    <div className="contact__last-message">
                        <span>{text}</span>
                    </div>
                    {qty &&
                    <div className="contact__qty-messages">
                        <span>{qty}</span>
                    </div>
                    }

                </div>
            </div>
        </div>
    )
}

export default Contact