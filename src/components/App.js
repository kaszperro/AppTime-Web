import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom';

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
               
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route exact path='/test' component={TestPage} />
                        <Route exact path='/login' component={LoginPage} />
                        <Route component={NotFoundPage} />
                    </Switch>
              
            </Router>
        );
    }
}

export default App;
