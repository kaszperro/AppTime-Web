import React, { Component } from 'react';
import LoginForm from '../snippets/forms/LoginForm'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Navbar from '../snippets/navigation/Navbar'
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
        console.log("suc login")
        this.toggle()
    }


    render() {
        return (
            <div>
                <Navbar ></Navbar>

                <Button color="primary" onClick={this.toggle}>Zaloguj</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Zaloguj</ModalHeader>
                    <ModalBody>
                        <LoginForm loginSuccess={this.loginSuccess} />
                    </ModalBody>

                </Modal>

            </div>
        );
    }
}

export default LoginPage;
