import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class Header extends Component {
    render() {
        return (
            <header>
                <div className="container clearfix">
                    <Link className="logo float-left" to="/">Blog posts </Link>
                    <ul className="nav float-right">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About Us </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact Us </Link>
                        </li>
                    </ul>
                </div>
            </header>
        )
    }
}

