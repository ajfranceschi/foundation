import React, {Component} from 'react';
import './App.css';
import Navbar from "../Components/NavBar/navbar";
import Carousel from "./Carousel/carousel";
import Logo from '../Components/Logo/logo';
import Register from "./Register/register";
import Login from "./Login/login";

class App extends Component {
    constructor() {
        super();
        this.state = {
            route: 'login',
            component: null
        }
    }

    // ROUTE MANAGEMENT
    onRouteChange = (route) => {
        this.setState({
            route: route
        })
    };

    loginBtnPressed = (event) => {
        event.preventDefault();
        console.log(event);
    };


    render() {
        if (this.state.route === 'home') {
            return(
                <div className='App'>
                    <Navbar onRouteChange={this.onRouteChange}/>
                    <Logo/>
                    <Carousel/>
                </div>
            )
        } else if (this.state.route === 'login') {
            return <Login onRouteChange={this.onRouteChange} loginBtnPressed={this.loginBtnPressed}/>
        } else if (this.state.route === 'register') {
            return <Register onRouteChange={this.onRouteChange}/>
        }
    }
}

export default App;
