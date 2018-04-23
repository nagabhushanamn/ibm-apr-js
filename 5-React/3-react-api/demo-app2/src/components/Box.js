import React, { Component } from 'react';

class Box extends Component {
    renderChildren() {
        let childs = this.props.children;
        return childs.map((child,idx) => {
            return (
                <div key={idx} className="list-group-item">
                    {child}
                </div>
            );
        });
    }
    render() {
        return (
            <div className="alert alert-info">
                <div className="list-group">
                    {this.renderChildren()}
                </div>
            </div>
        );
    }
}

export default Box;