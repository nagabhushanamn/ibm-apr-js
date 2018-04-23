import React, { Component } from 'react';

class ReviewForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
    }
    toggleForm() {
        let { isOpen } = this.state;
        this.setState({ isOpen: !isOpen });
    }
    renderForm() {
        let { isOpen } = this.state;
        if (!isOpen) {
            return (<button onClick={() => { this.toggleForm() }} className="btn btn-info"><i className="fa fa-plus"></i></button>)
        } else {
            return (
                <div className="card">
                    <div className="card-header">Review Form</div>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label>stars</label>
                                <select className="form-control"></select>
                            </div>
                            <div className="form-group">
                                <label>author</label>
                                <input className="form-control" />
                            </div>
                            <div className="form-group">
                                <label>body</label>
                                <textarea className="form-control"></textarea>
                            </div>
                            <button className="btn btn-primary">submit</button>
                            <button type="button" onClick={() => { this.toggleForm() }} className="btn btn-danger">cancel</button>
                        </form>
                    </div>
                </div>
            )
        }
    }
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-6 col-sm-8 col-md-8">
                        {this.renderForm()}
                    </div>
                </div>
            </div>
        );
    }
}

export default ReviewForm;