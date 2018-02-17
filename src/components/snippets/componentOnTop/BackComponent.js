import React, { Component } from 'react';


export class BackComponent extends Component {

    render() {
        return (
            <div style={{color:"transparent"}}>{this.props.children}</div>
        );
    }
}

//export default BackComponent;
