import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ActionButton.css'

class ActionButton extends Component {
    constructor(props) {
        super(props);
        console.log('ActionButton :: constructor()');
        this.state = {
            count: 0
        }
        //this.handleBtnClick = this.handleBtnClick.bind(this)
    }
    handleBtnClick() {
        let { count } = this.state;
        let { onAction } = this.props;
        this.setState({ count: count + 1 });
        onAction();
    }
    render() {
        console.log('ActionButton :: render()');
        let { value } = this.props;
        let { count } = this.state;
        return (
            <div className="action-btn">
                <div className="card">
                    <div className="card-body">
                        <button className="btn btn-primary"
                            onClick={() => { this.handleBtnClick() }}>
                            {value} : <span className="badge badge-light">{count}</span>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
ActionButton.propTypes = {
    value: PropTypes.string.isRequired,
    onAction:PropTypes.func
};

export default ActionButton;