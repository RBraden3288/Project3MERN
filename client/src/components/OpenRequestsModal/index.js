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
            openRequests: false
            // test states
            ,requestTitle: "LA Day trip",
            startDate: "09-10-19",
            endDate: "09-11-19"
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
            "backgroundColor":"#4ABDAC",
            "borderRadius": "5px",
            "height": "100px"
        };

        const requestModal = (
            <div>
            <button style={btnStyles} onClick={this.toggle}>{this.props.buttonLabel} {this.state.requestTitle} {this.state.startDate} to {this.state.endDate}</button>
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader toggle={this.toggle} close={closeBtn}>{this.state.requestTitle}</ModalHeader>
                <ModalBody>
                    Needs
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={this.toggle}>Update</Button>{' '}
                    <Button color="danger" onClick={this.toggle}>Delete</Button>{' '}
                    <Button color="secondary" onClick={this.toggle}>Close</Button>
                </ModalFooter>
            </Modal>
        </div>
        );
        const noRequests = <span className="d-flex m-auto">You have no requests at this time.</span>

        return (
            // if there are no openRequests RequestResults, use the noRequests span. If there are use the modal.
            <div>
                {/* test */}
                <div>
                <button style={btnStyles} onClick={this.toggle}>{this.props.buttonLabel} {this.state.requestTitle} <br /> {this.state.startDate} to {this.state.endDate}</button>
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader toggle={this.toggle} close={closeBtn}>Request title</ModalHeader>
                <ModalBody>
                    Needs
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={this.toggle}>Update</Button>{' '}
                    <Button color="danger" onClick={this.toggle}>Delete</Button>{' '}
                    <Button color="secondary" onClick={this.toggle}>Close</Button>
                </ModalFooter>
            </Modal>
        </div>
                {/* test end */}

                {/* {this.state.openRequests ? requestModal : noRequests} */}
            </div>
        );
    }
}

export default OpenRequestsModal;