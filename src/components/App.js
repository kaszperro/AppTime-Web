import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom';

import Header from './headerComponent/header';
import Footer from './footerComponent/footer'


//--- PAGES
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import TestPage from './pages/TestPage';
import login from './auth/login';
//--- 

//--- STYLES
import '../Assets/css/default.min.css'
//---




class App extends Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route path='/test' component={TestPage} />
                        <Route path='/login' component = {login} />
                        <Route component={NotFoundPage} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;