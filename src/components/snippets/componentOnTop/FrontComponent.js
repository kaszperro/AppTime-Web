import React, { Component } from 'react';


export class FrontComponent extends Component {

    render() {
        return (
            <div style={{position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)",}}>
                {this.props.children}
            </div>
        );
    }
}

//export default FrontComponent;
