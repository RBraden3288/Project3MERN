import React from 'react';
import API from '../../utils/API';
import DeleteButton from '../DeleteButton'
import {
    Col,
    Row,
    Container
} from 'reactstrap';
import './openRequestsDiv-style.css';


export default class OpenRequestsDiv extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            requests: []
        }

        // this.getAllRequests = this.getAllRequests.bind(this);
    };

    componentDidMount() {
        this.getAllRequests()
    };

    getAllRequests = () => {
        API.getUserRequests()
        .then(res => {
            console.log('open requests', res.data);
            this.setState({ requests: res.data })
          })
          .catch(err => console.log(err));
    };

    render() {
        return (
            <div className="requests-container">
                <Container className="request-header">
                    <Row className="title">
                        <Col>
                            {this.state.title}
                        </Col>
                    </Row>
                    <Row>
                            {this.state.startDate}
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col>
                            <button className="req-btn">
                                update request
                            </button>
                        </Col>
                        <Col>
                            <DeleteButton />
                        </Col>
                        <Col>
                            <button className="req-btn">
                                view neighbors
                            </button>
                        </Col>
                    </Row>
                </Container>
                <Container className="request-body">
                request date and tasks here
                </Container>
            </div>
        )
    }
}