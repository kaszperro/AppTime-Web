import React, {Component} from 'react';
import {ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import {
    css,
    injectGlobal,
    fontFace
} from "react-emotion";

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

                <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.dropdownToggle}>
                    <DropdownToggle caret>
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

        );
    }
}

//export default FrontComponent;
