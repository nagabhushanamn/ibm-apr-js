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
        let { onAction, value } = this.props;
        this.setState({ count: count + Number.parseInt(value, 10) }, () => {
            let { count } = this.state;
            onAction(count * count);
        });
    }
    render() {
        console.log('ActionButton :: render()');
        let { value } = this.props;
        let { count } = this.state;
        let className = value < 0 ? 'btn btn-danger' : 'btn btn-primary';
        return (
            <div className="action-btn">
                <div className="card">
                    <div className="card-body">
                        <button className={className}
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
    value: PropTypes.number.isRequired,
    onAction: PropTypes.func
};

export default ActionButton;