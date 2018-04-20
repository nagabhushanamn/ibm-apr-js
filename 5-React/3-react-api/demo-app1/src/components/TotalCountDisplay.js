import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TotalCountDisplay extends Component {
    constructor(props) {
        super(props);
        console.log('TotalCountDisplay :: constructor()');
    }
    render() {
        console.log('TotalCountDisplay :: render()');
        let { value } = this.props;
        return (
            <div className="card">
                <div className="card-body">
                    Total count : <span className="badge badge-info">{value}</span>
                </div>
            </div>
        );
    }
}
TotalCountDisplay.propTypes = {
    value: PropTypes.number
}
TotalCountDisplay.defaultProps = {
    value: 0
}

export default TotalCountDisplay;