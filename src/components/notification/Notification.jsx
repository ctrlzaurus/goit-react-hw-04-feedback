import { Component } from 'react';

class Notification extends Component {
    static defaultProps = {
        messege: '',
    }
    render() {
        return <h2>{this.props.messege}</h2>;
    }
}

export default Notification;