import React, {Component} from 'react';
import {ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import {
    css,
    injectGlobal,
    fontFace
} from "react-emotion";

import MdAccountBox from 'react-icons/lib/md/account-box'

export class ProfileDropdown extends Component {
    constructor(props) {
        super(props);

        this.dropdownToggle = this.dropdownToggle.bind(this);
        this.state = {dropdownOpen: false};
    }

    dropdownToggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        return (

            <div
                css={`
                    .icon-size
                    {
                        font-size: 87px;
                    }
                    .navbar-login
                    {
                        width: 305px;
                        padding: 10px;
                        padding-bottom: 0px;
                    }

                    .navbar-login-session
                    {
                        padding: 10px;
                        padding-bottom: 0px;
                        padding-top: 0px;
                    }
                `}
            >
                <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.dropdownToggle}>
                    <DropdownToggle caret>

                        <MdAccountBox/>
                        <strong>Salman</strong>
                        <span className="glyphicon glyphicon-chevron-down"></span>
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem header>Header</DropdownItem>
                        <DropdownItem disabled>Action</DropdownItem>
                        <DropdownItem>Another Action</DropdownItem>
                        <DropdownItem divider/>
                        <DropdownItem>Another Action</DropdownItem>
                    </DropdownMenu>
                </ButtonDropdown>
            </div>
        );
    }
}

//export default FrontComponent;
