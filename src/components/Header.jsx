import React, { useEffect, useState } from "react";

function Header(){


    return(
        <div className="header">
            <nav  className="navbar navbar-expand-lg navbar-light nav-bg">
            <a className="navbar-brand" href="#"><img src="/weatherApp/images/logo.png" alt="logo" width="50px"/><span className="logoText">Sunshine Weather</span></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item active">
                    <a className="nav-link" href="https://muqtadirbillah.github.io/Profile/" target="_blank"><b>Developer Profile</b><span class="sr-only">(current)</span></a>
                </li>
                </ul>
            </div>
            </nav>
        </div>
    );
}

export default Header;