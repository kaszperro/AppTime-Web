import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

import Navbar from './snippets/navigation/Navbar'

//--- PAGES

import {HomePage, NotFoundPage, TestPage, LoginPage, ProfilePage} from "./pages"

//--- 

//--- STYLES
//import '../assets/css/default.min.css'
//---




class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Navbar />
                    <Switch>

                        <Route exact path="/" component={HomePage} />
                        <Route exact path='/test' component={TestPage} />
                        <Route exact path='/login' component={LoginPage} />
                        <Route exact path='/profile' component={ProfilePage} />
                        <Route component={NotFoundPage} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
