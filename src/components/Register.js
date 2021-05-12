import React from 'react'
import Typography from "@material-ui/core/Typography";
import {Route, Switch} from "react-router-dom";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Finally2 from "./Finally2";


export const Register = () => {
    return (
        <>
            <Typography component="h2" variant="h5">Регистрация</Typography>
            <Switch>
                <Route path="/register" exact component={Step1}/>
                <Route path="/register/step2" exact component={Step2}/>
                <Route path="/register/step3" exact component={Step3}/>
                <Route path="/register/finally" exact component={Finally2}/>
            </Switch>
        </>
    )
}