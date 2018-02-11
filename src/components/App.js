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
import LoginForm from './auth/LoginForm';
//--- 

//--- STYLES
//import '../assets/css/default.min.css'
//---




class App extends Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route path='/test' component={TestPage} />
                        <Route path='/login' component={LoginForm} />
                        <Route component={NotFoundPage} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
