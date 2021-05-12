import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import PersonIcon from '@material-ui/icons/Person';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import {connect} from "react-redux";
import {registration} from "../redux/actions";
import {PrimaryButton} from "./PrimaryButton";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));

const Finally2 = ({email, password, name, surname, files, registration}) => {
    const onSubmit = () => {
        registration(email, password, name, surname)
    }
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <List component="nav" aria-label="main mailbox folders">
                <ListItem button>
                    <ListItemIcon>
                        <PersonIcon />
                    </ListItemIcon>
                    <ListItemText primary={email} />
                </ListItem>
                <Divider />
                <ListItem button>
                    <ListItemIcon>
                        <VpnKeyIcon />
                    </ListItemIcon>
                    <ListItemText primary={password} />
                </ListItem>
                <Divider />
                <ListItem button>
                    <ListItemIcon>
                    </ListItemIcon>
                    <ListItemText primary={name} />
                </ListItem>
                <Divider />
                <ListItem button>
                    <ListItemIcon>
                    </ListItemIcon>
                    <ListItemText primary={surname} />
                </ListItem>
            </List>
            <PrimaryButton onClick={onSubmit}>Создать пользователя</PrimaryButton>
        </div>
    );
}

const mapStateToProps = (state) => ({
    email: state.reg.email,
    password: state.reg.password,
    name: state.reg.name,
    surname: state.reg.surname
})

export default connect(mapStateToProps, {registration})(Finally2)