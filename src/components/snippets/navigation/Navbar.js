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

class Navbar extends Component {
    constructor(props) {
        super(props);
        // this.activeEvent = this.activeEvent.bind(this);
    }

    //   activeEvent(e) {
    //      console.log("is active")
    //  }

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
                            <NavLink>Login</NavLink>
                        </LinkContainer>
                    </NavItem>

                </Nav>

            </NavbarBoot>
        );
    }
}

export default Navbar;



