import React, {Component} from 'react';
import './register.css';
import Navbar from "../../Components/NavBar/navbar";
// import bcrypt from 'bcryptjs';

class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            password: ''
        }
    }

    nameTextFieldChanged = (event) => {
        this.setState(Object.assign({}, this.state, {name: event.target.value}));
    };

    emailTextFieldChanged = (event) => {
        this.setState(Object.assign({}, this.state, {email: event.target.value}));
    };

    passwordTextFieldChanged = (event) => {
        this.setState(Object.assign({}, this.state, {password: event.target.value}));
    };

    render() {
        return (
            <div className="App">
                <Navbar onRouteChange={this.props.onRouteChange}/>
                <h1 className='mt-5'>Register</h1>
                <div className="row mt-5">
                    <div className="container">
                        <form className='col-lg-6 m-auto' id='registerForm'>
                            <div className='form-group justify-content-center'>
                                <label htmlFor="nameInput" className=''>Name:</label>
                                <div className="col-sm-10 m-auto">
                                    <input
                                        type="text"
                                        id='nameInput'
                                        placeholder='Enter your name'
                                        className='form-control text-center'
                                        onChange={this.nameTextFieldChanged}
                                    />
                                </div>
                            </div>
                            <div className='form-group justify-content-center'>
                                <label htmlFor="emailInput" className=''>Email:</label>
                                <div className="col-sm-10 m-auto">
                                    <input
                                        type="email"
                                        id='emailInput'
                                        placeholder='me@awesome.com'
                                        className='form-control text-center'
                                        onChange={this.emailTextFieldChanged}
                                    />
                                </div>
                            </div>
                            <div className='form-group justify-content-center'>
                                <label htmlFor="emailInput" className=''>Password:</label>
                                <div className="col-sm-10 m-auto">
                                    <input
                                        type="password"
                                        id='passwordInput'
                                        placeholder='Shhhhh'
                                        className='form-control text-center'
                                        onChange={this.passwordTextFieldChanged}
                                    />
                                </div>
                            </div>

                            <button className='btn btn-outline-dark mt-4' onClick={
                                (event) => {
                                    event.preventDefault();
                                    document.getElementById('registerForm').reset();
                                    this.props.registerBtnPressed(this.state)
                                }
                            }>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register;