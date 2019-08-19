import React, {Component} from 'react';
import './App.css';
import Navbar from "../Components/NavBar/navbar";
import Carousel from "./Carousel/carousel";
import Logo from '../Components/Logo/logo';

class App extends Component {
  render() {
    return (
        <div className="App">
          <Navbar />
          <Logo />
          <Carousel />
        </div>
    );
  }
}

export default App;
