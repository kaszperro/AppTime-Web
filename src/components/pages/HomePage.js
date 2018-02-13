import React, { Component } from 'react';
import Navbar from '../snippets/navigation/Navbar';

class HomePage extends Component {
    render() {
        return (
            <div>
                <Navbar ></Navbar>

                <h1>Home Page</h1>
                <p>siema stary</p>

            </div>
        );
    }
}

export default HomePage;
