import React, {Component} from 'react';
import './register.css';
import Navbar from "../../Components/NavBar/navbar";

class Register extends Component {
    render() {
        return (
            <div className="App">
                <Navbar onRouteChange={this.props.onRouteChange}/>
                <h1 className='mt-5'>Register</h1>
                <div className="row mt-5">
                    <div className="container">
                        <form className='col-lg-6 m-auto'>
                            <div className='form-group justify-content-center'>
                                <label htmlFor="nameInput" className=''>Name:</label>
                                <div className="col-sm-10 m-auto">
                                    <input
                                        type="text"
                                        id='nameInput'
                                        placeholder='Enter your name'
                                        className='form-control text-center'
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
                                    />
                                </div>
                            </div>
                            <div className='form-group justify-content-center'>
                                <label htmlFor="emailInput" className=''>Password:</label>
                                <div className="col-sm-10 m-auto">
                                    <input
                                        type="email"
                                        id='emailInput'
                                        placeholder='Shhhhh'
                                        className='form-control text-center'
                                    />
                                </div>
                            </div>

                            <button className='btn btn-outline-dark mt-4' onClick={this.props.loginBtnPressed}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register;