import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
            <div className="col-6 col-sm-5 col-md-5">
                <div className="card">
                    <div className="card-header bg-primary">Login Form</div>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label>User</label>
                                <input className="form-control" />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input className="form-control" type="password" />
                            </div>
                            <button className="btn btn-primary">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;