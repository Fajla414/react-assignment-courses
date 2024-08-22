import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-warning">
                <div className="container">
                    <a className="navbar-brand text-decoration-none" href="/"><h3 className='text-dark'>React AssignMent-7</h3></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarText">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link fw-bold" aria-current="page" href="/home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-bold" aria-current="page" href="/course">Course</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-bold" aria-current="page" href="/about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-bold" aria-current="page" href="/cart">Cart</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-bold" aria-current="page" href="/contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;