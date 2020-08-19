import React from 'react';
import {
    Route,
    Link,
    Switch
} from 'react-router-dom';
import './nav.css';
import Roster from '../Roster/roster';
import Splash from '../Splash/splash';

const Nav=()=> {
    return (
        <div className="navdiv">
        <div className="navlinks">
            <Link to="/Splash" className="li">Splash</Link><br />
            <Link to="/Roster" className="li">Roster</Link><br />
        </div>
        <div className="navroutes">
            <Switch>
            <Route exact path="/Splash"><Splash /></Route>
            <Route exact path="/Roster"><Roster /></Route>
            </Switch>
        </div>
        </div>
    )
}

export default Nav;