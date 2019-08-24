import React from 'react';
import './deletebutton-style.css';
import API from '../../utils/API';

export default class DeleteButton extends React.Component {
    constructor(){
        super()

        this.state={id:''};
        this.onClick = this.onClick.bind(this);
        this.deleteRequest = this.deleteRequest.bind(this);
    }

    componentDidMount() {
        // this.setState({
        //     id: this.state.requests._id
        // })
        this.deleteRequest()
    }

    onClick = event => {
        this.deleteRequest(this)
        console.log(`Requst deleted:`, this.state);

    }

    deleteRequest = () => {
        API.deleteRequest()
        .then(res => {
            console.log('deleted request:', res.data)
        })
        .catch(err => console.log(err));
    };
    
    render() {
        return (
            <button className="req-btn" onClick={this.onClick}>
            delete request
            </button>
        )
    }
}