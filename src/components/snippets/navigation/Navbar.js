import React, { Component } from 'react';
import { LinkContainer } from "react-router-bootstrap";
import {
    Navbar as NavbarBoot,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

import LoginForm from '../forms/LoginForm'
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';

import { checkLogin } from '../../../actions';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.loginSuccess = this.loginSuccess.bind(this)

        this.state = {
            modal: false
        };
        this.loginToggle = this.loginToggle.bind(this);
    }

    loginToggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    loginSuccess() {
        this.loginToggle()

    }

    componentDidMount() {
        checkLogin(isLogged, isntLogged)

        function isLogged() {
            console.log("jest zalogowany")
        }

        function isntLogged() {
            console.log("nie jest zalogo")
        }
    }

    render() {
        return (
            <NavbarBoot color="dark" dark expand="md">
                <LinkContainer to="/" >
                    <NavbarBrand>AppTime</NavbarBrand>

                </LinkContainer>
                <Nav className="ml-auto" navbar>


                    <NavItem>
                        <LinkContainer exact to="/" >
                            <NavLink>Home</NavLink>
                        </LinkContainer>
                    </NavItem>


                    <NavItem>
                        <LinkContainer to="/login" >
                            <NavLink>Cos innego</NavLink>
                        </LinkContainer>
                    </NavItem>


                    <Button  color="primary" onClick={this.loginToggle}>Zaloguj</Button>
                    <Modal isOpen={this.state.modal} toggle={this.loginToggle}>
                        <ModalHeader toggle={this.loginToggle}>Zaloguj</ModalHeader>
                        <ModalBody>
                            <LoginForm loginSuccess={this.loginSuccess} />
                        </ModalBody>
                    </Modal>

                </Nav>

            </NavbarBoot>
        );
    }
}

export default Navbar;



