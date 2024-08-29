import React from 'react'
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const MainHeader = () => {
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        navigate("/login");
    }
    const handleReg = (e) => {
        e.preventDefault();
        navigate("/Registration");
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container d-flex justify-content-between">
                   
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto">

                            <li class="nav-item">
                                <a class="nav-link" href="/SchoolNipunaData">SchoolNipunaData</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/LoadNipunaResponses">LoadNipunaResponses</a>
                            </li>
                           
                            <li class="nav-item">
                                <a class="nav-link" href="/Test">Test</a>
                            </li>
                            {/* <li class="nav-item">
                                <a class="nav-link" href="/Registration">Registration</a>
                            </li> */}
                          
                        </ul>
                    </div>
                    <div className="d-flex align-items-center">
                        <button className="btn btn-outline-light" onClick={(e) => handleLogin(e)}>
                            Login
                        </button>
                      <li></li>
                        <button className="btn btn-outline-light" onClick={(e) => handleReg(e)}>
                        Registration
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default MainHeader;