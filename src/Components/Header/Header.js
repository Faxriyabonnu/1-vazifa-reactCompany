/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import './Header.css'

class Header extends Component {
    render() {
        return (
            <header className="p-3 px-md-4 bg-white border-bottom shadow">
                <div className="container-fluid">
                    <h5>Company name</h5>
                    <nav>
                        <a className="textLink p-2" href="#">Features</a>
                        <a className="textLink p-2"href="#">Enterprise</a>
                        <a className="textLink p-2" href="#">Support</a>
                        <a className="textLink p-2" href="#">Pricing</a>
                        <a className="btn p-2 btn-outline-primary ml-3" href="#">Sign up</a>
                    </nav>
                 </div>
           </header>
        );
    }
}

export default Header;