import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

import Navbar from './snippets/navigation/Navbar'

//--- PAGES
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import TestPage from './pages/TestPage';
import LoginPage from './pages/LoginPage';
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
                        <Route component={NotFoundPage} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
