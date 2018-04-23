import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Greeting extends Component {
    constructor(props) {
        super(props);
        console.log('Greeting :: constructor()');
        //this.state = { message: ''};
        //this.state = {now: new Date().toTimeString()}
    }
    componentWillMount() {
        console.log('Greeting :: componentWillMount()');
    }
    render() {
        console.log('Greeting :: render()');
        // this.props.message="my own message";
        return (
            <div className="alert alert-info">
                {this.props.message}
                <hr />
                {/* {this.state.message} */}
                {/* {this.state.now} */}
                {new Date().toTimeString()}
            </div>
        );
    }
    componentDidMount() {
        console.log('Greeting :: componentDidMount()');

        // n/w request

        // setTimeout(() => {
        //     let message = "hello from server-side";
        //     this.setState({ message });
        // }, 5000);

        // this.interval = setInterval(() => {
        //     this.setState({now: new Date().toTimeString()})
        // }, 500);

        this.interval = setInterval(() => {
            //this.forceUpdate();
        }, 500);


    }
    componentWillReceiveProps(nextProps) {
        console.log('Greeting :: componentWillReceiveProps()');
        //console.log(this.props);
        //console.log(nextProps);
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('Greeting :: shouldComponentUpdate()');
        //if (this.props.message === nextProps.message) return false;
        return true;
    }
    componentWillUpdate() {
        console.log('Greeting :: componentWillUpdate()');
    }
    componentDidUpdate() {
        console.log('Greeting :: componentDidUpdate()');
    }
    componentWillUnmount() {
        console.log('Greeting :: componentWillUnmount()');
        clearInterval(this.interval);
    }

}
Greeting.propTypes = {
    message: PropTypes.string
}
Greeting.defaultProps = {
    message: 'greetings'
}
// Greeting.displayName="IBM-Greeting"

export default Greeting;