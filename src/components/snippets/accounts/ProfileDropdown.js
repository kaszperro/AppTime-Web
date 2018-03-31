import React, {Component} from 'react';
import {UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import {
    css,
    injectGlobal,
    fontFace
} from "react-emotion";
import {getUserInfo as getUserInfoAPI} from '../../../actions';

export class ProfileDropdown extends Component {
    constructor(props) {
        super(props);

        this.dropdownToggle = this.dropdownToggle.bind(this);
        this.state = {dropdownOpen: false,name:""};
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
                <DropdownMenu style={{right:"0", left:"auto"}}>
                    <DropdownItem header>Header</DropdownItem>
                    <DropdownItem disabled>Action</DropdownItem>
                    <DropdownItem>Another Action</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>



        );
    }
}

//export default FrontComponent;
