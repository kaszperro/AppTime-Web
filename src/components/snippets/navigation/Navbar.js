import React, { Component } from 'react';
import { NavLink as NavLinkRouter } from 'react-router-dom'
import { LinkContainer } from "react-router-bootstrap";
import {
    Collapse,
    Navbar as NavbarBoot,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';

import LoginForm from '../forms/LoginForm'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class Navbar extends Component {
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
            <NavbarBoot color="dark" dark expand="md">
                <NavbarBrand href="/">AppTime</NavbarBrand>


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

                    <Button color="primary" onClick={this.toggle}>Zaloguj</Button>
                    <Modal isOpen={this.state.modal} toggle={this.toggle}>
                        <ModalHeader toggle={this.toggle}>Zaloguj</ModalHeader>
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



