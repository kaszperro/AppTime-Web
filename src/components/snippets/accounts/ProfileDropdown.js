import React, {Component} from 'react';
import {UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import {getUserInfo as getUserInfoAPI} from '../../../actions';

import {LinkContainer} from "react-router-bootstrap";
import {NavLink, Nav, NavItem} from 'reactstrap';

export class ProfileDropdown extends Component {
    constructor(props) {
        super(props);

        this.dropdownToggle = this.dropdownToggle.bind(this);
        this.state = {dropdownOpen: false, name: ""};
        this.getUserInfo = this.getUserInfo.bind(this)
        this.successUserInfo = this.successUserInfo.bind(this)
    }

    componentDidMount() {
        this.getUserInfo()
    }

    getUserInfo() {
        getUserInfoAPI(['name', 'email'], this.successUserInfo)
    }

    successUserInfo(result) {
        this.setState({
            name: result['name']
        })
    }


    dropdownToggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        return (

            <UncontrolledDropdown>
                <DropdownToggle caret>
                    <strong>{this.state.name}</strong>
                </DropdownToggle>
                <DropdownMenu style={{right: "0", left: "auto"}}>
                    <LinkContainer exact to="/profile">
                        <DropdownItem>
                            Profil
                        </DropdownItem>
                    </LinkContainer>
                    <DropdownItem divider/>
                    <DropdownItem>Wyloguj</DropdownItem>

                </DropdownMenu>
            </UncontrolledDropdown>


        );
    }
}

//export default FrontComponent;
