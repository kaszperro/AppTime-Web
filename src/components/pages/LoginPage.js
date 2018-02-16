import React, { Component } from 'react';
class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.loginSuccess = this.loginSuccess.bind(this)

        this.state = {
            modal: false
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    loginSuccess() {
        this.toggle()
    }

    render() {
        return (
            <div>
                Siema Elo
            </div>
        );
    }
}

export default LoginPage;
