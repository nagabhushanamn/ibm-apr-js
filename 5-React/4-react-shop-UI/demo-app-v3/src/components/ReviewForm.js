import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ReviewForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            stars: 5,
            author: '',
            body: ''
        };
    }
    toggleForm() {
        let { isOpen } = this.state;
        this.setState({ isOpen: !isOpen, stars: 5, author: '', body: '' });
    }
    handleChange(e) {
        let field = e.target.id;
        let value = e.target.value;
        this.setState({ [field]: value })
    }
    handleForm(e) {
        e.preventDefault();
        let newReview = {
            stars: this.state.stars,
            author: this.state.author,
            body: this.state.body,
        };
        this.props.onNewReview(newReview);
        this.toggleForm();
    }
    renderForm() {
        let { isOpen } = this.state;
        if (!isOpen) {
            return (<div><button onClick={() => this.toggleForm()} className="btn btn-info"><i className="fa fa-plus"></i></button></div>)
        } else {
            return (
                <div className="card">
                    <div className="card-header">Review Form</div>
                    <div className="card-body">
                        <form onSubmit={(e) => { this.handleForm(e) }}>
                            <div className="form-group">
                                <label>stars</label>
                                <select
                                    className="form-control"
                                    id="stars"
                                    onChange={(e) => { this.handleChange(e) }}
                                    value={this.state.stars}>
                                    {[1, 2, 3, 4, 5].map(n => <option key={n}>{n}</option>)}
                                </select>
                                <div className="help-block">
                                    {this.state.stars < 5 ? 'give me 5 stars' : ''}
                                </div>
                            </div>
                            <div className="form-group">
                                <label>author</label>
                                <input className="form-control"
                                    id="author"
                                    onChange={(e) => { this.handleChange(e) }}
                                    value={this.state.author} />
                            </div>
                            <div className="form-group">
                                <label>body</label>
                                <textarea className="form-control"
                                    id="body"
                                    onChange={(e) => { this.handleChange(e) }}
                                    value={this.state.body}></textarea>
                            </div>
                            <button disabled={this.state.stars < 5} className="btn btn-primary">submit</button>
                            <button type="button" onClick={() => this.toggleForm()} className="btn btn-danger">cancel</button>
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
                    <div className="col-6 col-sm-6 col-md-6">
                        {this.renderForm()}
                    </div>
                </div>
            </div>
        );
    }
}
ReviewForm.propTypes = {
    onNewReview: PropTypes.func
}

export default ReviewForm;