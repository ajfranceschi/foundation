import React from 'react';
import './navbar.css';

const Navbar = (props) => {
    return(
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark text-center'>
            <h1 className='navbar-brand' onClick={() => props.onRouteChange('home')}>Foundation Store</h1>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-end" id='navbarSupportedContent'>
                <ul className='navbar-nav'>
                    <li className="nav-item">
                        <h5 className='nav-link' onClick={() => props.onRouteChange('register')}>Register</h5>
                    </li>
                    <li className="nav-item">
                        <h5 className='nav-link' onClick={() => props.onRouteChange('login')}>Login</h5>
                    </li>
                </ul>
            </div>
        </nav>
    )
};

export default Navbar;
