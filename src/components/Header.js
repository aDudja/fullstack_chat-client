import React from "react";
import MenuIcon from '@material-ui/icons/Menu';
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
    icon: {
        fontSize: "33px",
        color: "#fff",
    }
}))

const Header = (props) => {
    const styles = useStyles()
    return (
        <div className="header">
            <div className="header__logo"></div>
            <div className="header__contact-info">
                <span className="contact-name">Илон Маск</span>
                <span className="contact-online">в сети</span>
            </div>
            <div className="header__menu-button">
                <MenuIcon className={styles.icon}/>
            </div>
        </div>
    )
}

export default Header