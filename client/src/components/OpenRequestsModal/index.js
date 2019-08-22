import React from 'react';
import {
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter
} from 'reactstrap';
import './openrequest-style.css';

class OpenRequestsModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            requests: []
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    render() {
        const closeBtn = <button className="close" onClick={this.toggle}>&times;</button>;
        var btnStyles = {
            "backgroundColor": "#4ABDAC",
            "borderRadius": "5px",
            "height": "100px"
        };

        return (
            // if there are no openRequests RequestResults, use the noRequests span. If there are use the modal.
            <div>
                <button style={btnStyles} onClick={this.toggle}>{this.props.buttonLabel} {this.props.requestTitle} {this.state.startDate} to {this.state.endDate}</button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle} close={closeBtn}>{this.props.request.title}</ModalHeader>
                    <ModalBody className='modal-body'>
                        {this.props.request}
                    </ModalBody>
                    <ModalFooter>
                        <button className="modal-button" onClick={this.toggle}>Update</button>{' '}
                        <button className="modal-button" onClick={this.toggle}>Delete</button>{' '}
                        <button className="modal-button modal-button-search" onClick={this.toggle}>Search Neighbors</button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default OpenRequestsModal;