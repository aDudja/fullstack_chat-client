import React from 'react'
import Header from "../components/Header";
import MessageItem from "../components/MessageItem";
import SendPanel from "../components/SendPanel";
import Contacts from "../components/Contacts";

export const Im = () => {
    return (
        <div className="wrapper">
            <Header/>
            <Contacts/>
            <div className="dialog">
                <div className="dialog__chat">
                    <div className="dialog-container">
                        <MessageItem avatar="https://source.unsplash.com/user/erondu/100x100" name="Антон" text="Чего звонил?" time="10:10:13"/>
                        <MessageItem avatar="https://upload.wikimedia.org/wikipedia/commons/e/ed/Elon_Musk_Royal_Society.jpg" name="Илон" text="Скинь" time="10:13:14"/>
                        <MessageItem avatar="https://upload.wikimedia.org/wikipedia/commons/e/ed/Elon_Musk_Royal_Society.jpg" name="Илон" text="Чертежи по новой Tesla" time="10:13:14"/>
                    </div>
                </div>
                <SendPanel ownAvatar="https://source.unsplash.com/user/erondu/100x100" partnerAvatar="https://upload.wikimedia.org/wikipedia/commons/e/ed/Elon_Musk_Royal_Society.jpg"/>
            </div>
        </div>
    )
}