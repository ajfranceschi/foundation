import React, {Component} from 'react';
import './register.css';
import Navbar from "../../Components/NavBar/navbar";

class Register extends Component {
    render() {
        return (
            <div className="App">
                <Navbar onRouteChange={this.props.onRouteChange}/>
                <h1 className='mt-5'>Register</h1>
            </div>
        )
    }
}

export default Register;