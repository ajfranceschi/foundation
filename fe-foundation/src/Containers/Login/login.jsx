import React, {Component} from 'react';
import './login.css';
import Navbar from "../../Components/NavBar/navbar";

class Login extends Component {
    render() {
        return (
            <div className="App">
                <Navbar onRouteChange={this.props.onRouteChange}/>
                <h1 className='mt-5'>Login</h1>
                <div className="row mt-5">
                    <div className="container">
                        <form className='col-lg-6 m-auto'>
                            <div className='form-group'>
                                <label htmlFor="emailInput">Email:</label>
                                <input
                                    type="email"
                                    id='emailInput'
                                    placeholder='me@awesome.com'
                                    className='form-control text-center'
                                />
                            </div>
                            <div className='form-group'>
                                <label htmlFor="passwordInput">Password:</label>
                                <input
                                    type="password"
                                    id='passwordInput'
                                    placeholder='Super Secure Password'
                                    className='form-control text-center'
                                />
                            </div>
                            <button className='btn btn-outline-dark' onClick={this.props.loginBtnPressed}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;