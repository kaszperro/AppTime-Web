import React, {Component} from 'react';
import {connect} from 'react-redux';
import {reduxForm} from 'redux-form';
import {loginUser} from '../../../actions';
import {makeFormErrors, removeElementsByClass} from './FormErrorsHelper'
import {Col, Button, Form, FormGroup, Label, Input} from 'reactstrap';

import {PulseLoader} from 'react-spinners';
import {RelativeContainer, BackComponent, FrontComponent} from '../componentOnTop'

const form = reduxForm({
    form: 'login'
});

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.formSubmit = this.formSubmit.bind(this);
        this.state = {loading: false};
    }

    formSubmit(e) {
        e.preventDefault();
        this.setState({loading: true});
        let form = e.target;
        let sendData = {
            email: form.email.value,
            password: form.password.value
        };
        this.props.loginUser(sendData, loginSuccess.bind(this), loginError.bind(this));

        function loginSuccess() {             //
            removeElementsByClass("created");
            this.setState({loading: false},function callback() {
                if (this.props.loginSuccess) {
                    this.props.loginSuccess()
                }
            })

        }

        function loginError(error) {          //
            makeFormErrors(error, form);
            this.setState({loading: false})
        }
    }

    render() {
        let button = null;
        if (this.state.loading) {
            button= <div className="float-right">
                <RelativeContainer>
                    <BackComponent>
                        <Button color="primary" disabled style={{color:"transparent"}}>
                            Zaloguj!
                        </Button>
                    </BackComponent>
                    <FrontComponent>
                        <PulseLoader size={9} loading={true} color={"#4A90E2"}/>
                    </FrontComponent>
                </RelativeContainer>
            </div>
        } else {
            button = <Button className="float-right" color="primary">
                Zaloguj!
            </Button>
        }


        return (
            <Form onSubmit={this.formSubmit}>
                <FormGroup row>
                    <Label for="formEmail" sm={2}>Email</Label>
                    <Col sm={10}>
                        <Input type="email" name="email" id="formEmail" placeholder="Email"/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="examplePassword" sm={2}>Hasło</Label>
                    <Col sm={10}>
                        <Input type="password" name="password" id="formPassword" placeholder="Hasło"/>
                    </Col>
                </FormGroup>
                {button}
            </Form>
        );
    }
}

function mapStateToProps(state) {
    return {
        errorMessage: state.auth.error,
        message: state.auth.message
    };
}

//export default form(LoginForm)

export default connect(mapStateToProps, {loginUser})(form(LoginForm));