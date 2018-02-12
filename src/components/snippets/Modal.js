import React, { Component } from 'react';

class Modal extends Component {
   
    render() {

        return (
            <div id={this.props.id} className="modal fade" role="dialog" >
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">{this.props.title}</h4>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div className="modal-body">
                            {this.props.children}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal">Zamknij</button>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Modal;
