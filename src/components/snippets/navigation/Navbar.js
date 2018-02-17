import React, {Component} from 'react';
import {LinkContainer} from "react-router-bootstrap";
import {
    Navbar as NavbarBoot,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

import LoginForm from '../forms/LoginForm'
import {Button, Modal, ModalHeader, ModalBody, Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import {checkLogin} from '../../../actions';
import {ProfileDropdown} from "../accounts/ProfileDropdown";

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            isLogged: false
        };


        this.loginToggle = this.loginToggle.bind(this);
        this.loginSuccess = this.loginSuccess.bind(this);
        loggedIn = loggedIn.bind(this);
        loggedOut = loggedOut.bind(this);

        checkLogin(loggedIn, loggedOut);

        function loggedIn() {
            this.setState({
                isLogged: true
            })
        }

        function loggedOut() {
            this.setState({
                isLogged: false
            })
        }
    }

    loginToggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    loginSuccess() {
        this.loginToggle();
        setTimeout(function changeState() {
            this.setState({
                isLogged: true
            })
        }.bind(this), 200);
    }

    render() {
        let profile = null;
        if (this.state.isLogged) {
            profile = <NavItem>
                <ProfileDropdown/>
            </NavItem>
        } else {
            profile = <div>
                <Button color="primary" onClick={this.loginToggle}>Zaloguj</Button>
                <Modal isOpen={this.state.modal} toggle={this.loginToggle}>
                    <ModalHeader toggle={this.loginToggle}>Zaloguj</ModalHeader>
                    <ModalBody>
                        <LoginForm loginSuccess={this.loginSuccess}/>
                    </ModalBody>
                </Modal>
            </div>
        }


        return (
            <NavbarBoot color="dark" dark expand="md">
                <LinkContainer to="/">
                    <NavbarBrand>AppTime</NavbarBrand>

                </LinkContainer>
                <Nav className="ml-auto" navbar>

                    <NavItem>
                        <LinkContainer exact to="/">
                            <NavLink>Home</NavLink>
                        </LinkContainer>
                    </NavItem>

                    <NavItem>
                        <LinkContainer to="/login">
                            <NavLink>Cos innego</NavLink>
                        </LinkContainer>
                    </NavItem>
                    {profile}
                </Nav>

            </NavbarBoot>
        );
    }
}

export default Navbar;



