import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import {MainContainer} from "../components/MainContainer";
import Paper from "@material-ui/core/Paper";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Login from "../components/Login";
import {Register} from "../components/Register";


const useStyles = makeStyles((theme) => ({
    paper: {
        width: "450px",
        padding: theme.spacing(5),
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
}));

export const Auth = () => {
    const styles = useStyles()

    return (
        <>
            <MainContainer>
                <Paper className={styles.paper}>
                    <Switch>
                        <Route path="/" exact component={Login}/>
                        <Route path="/register" component={Register}/>
                        <Route>
                            <Redirect to="/"/>
                        </Route>
                    </Switch>
                </Paper>
            </MainContainer>
        </>
    )
}