import React from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <Link class="navbar-brand ms-5 ps-5" to="/">
                    <img src="images/logo2.png" alt="" />
                </Link>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav ms-auto mx-5 px-5">
                        <li class="nav-item">
                            <Link class="nav-link" aria-current="page" to="#">
                                <i class="fas fa-shopping-cart"></i>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/login">
                                Login
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/register">
                                Sign up
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
