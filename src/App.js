import React, {useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import {useSelector} from "react-redux"
import {connect} from "react-redux"

import './App.scss';
import {Auth} from "./pages/Auth";
import {Im} from "./pages/Im";
import {me} from "./redux/actions";

const App = ({me}) => {
    useEffect(()=>{
        const data = JSON.parse(localStorage.getItem('userData'))
        if (data && data.token){
            me(data.token, data.userId)
        }
    }, [])
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
    return (
        <Router>
            <Switch>
                {isAuthenticated
                    ?
                    <>
                        <Route path="/im" exact component={Im}/>
                        <Route path="/" component={Auth}>
                            <Redirect to="/im"/>
                        </Route>
                    </>
                    :
                    <Route path="/" component={Auth}/>
                }
            </Switch>
        </Router>
    )
}

export default connect(null, {me})(App);
