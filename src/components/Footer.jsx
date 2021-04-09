import React from "react";

function Footer(){

    var date = new Date();
    var year = date.getFullYear();

    return(
        <div className="footer" id="about">
            <div className="footerLeftDiv">
                <h4>Sunshine Weather</h4>
                <p>Sunshine Weather is created by MBMA using React<br />and Weather API to get current weather condition of<br />a specific city.</p>
            </div>
            <div className="footerRightDiv">
                <h4>Developer Details</h4>
                <p>This website is made by Muqtadir Billah Musab Abbasi<br />on React using Weather API.</p>
                <a href="https://muqtadirbillah.github.io/Profile/" target="_blank"><p>Developer Profile</p></a>
                <a href="https://www.linkedin.com/in/muqtadir-billah-musab-abbasi/" target="_blank"><p>LinkedIn Profile</p></a>
                <a href="https://github.com/MuqtadirBillah/" target="_blank"><p>GitHub Profile</p></a>
            </div>
            <h6 className="dev">Design and Developed by MBMA © {year}</h6>
        </div>
    );
}

export default Footer;