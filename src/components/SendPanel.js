import React from 'react';
import NoteSharpIcon from '@material-ui/icons/NoteSharp';
import PhotoCameraSharpIcon from '@material-ui/icons/PhotoCameraSharp';
import MicSharpIcon from '@material-ui/icons/MicSharp';
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
    icon: {
        fontSize: "24px",
        color: "#C4C4C4",
        marginRight: "7px",
        cursor: "pointer"
    }
}))

const SendPanel = ({ownAvatar, partnerAvatar}) => {
    const styles = useStyles()

    return (
        <div className="send-panel">
            <div className="send-panel__own-avatar" style={{backgroundImage: `url(${ownAvatar})`}}></div>
            <div className="send-panel__form">
                <textarea className="send-panel__textarea" placeholder="Напишите сообщение..."/>
                <div className="send-panel__buttons">
                    <div className="send-panel__load-buttons">
                        <NoteSharpIcon className={styles.icon}/>
                        <PhotoCameraSharpIcon className={styles.icon}/>
                        <MicSharpIcon className={styles.icon}/>
                    </div>
                    <div className="send-panel__send-button">SEND</div>
                </div>
            </div>
            <div className="send-panel__partner-avatar" style={{backgroundImage: `url(${partnerAvatar})`}}></div>
        </div>
    )
}

export default SendPanel