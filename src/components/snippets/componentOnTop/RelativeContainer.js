import React, { Component } from 'react';


export class RelativeContainer extends Component {

    render() {
        return (
            <div style={{position: "relative"}}>
                {this.props.children}
            </div>
        );
    }
}

//export default Container;
