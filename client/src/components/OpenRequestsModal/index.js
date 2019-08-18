import React from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter
} from 'reactstrap';

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
                <button style={btnStyles} onClick={this.toggle}>{this.props.buttonLabel} {this.state.requestTitle} {this.state.startDate} to {this.state.endDate}</button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle} close={closeBtn}>{this.props.request.title}</ModalHeader>
                    <ModalBody>
                        {this.props.request}
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>Update</Button>{' '}
                        <Button color="danger" onClick={this.toggle}>Delete</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Close</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default OpenRequestsModal;