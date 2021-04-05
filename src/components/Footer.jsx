import React from "react";
import "../assets/styles/components/Footer.scss";

function Footer() {
    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h4>Developed by: <a href="https://github.com/antonioigl" target={'_blank'} rel={'noopener noreferrer'}> antonioigl</a></h4>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <p className="col-sm">
                        <a href="https://github.com/antonioigl" target={'_blank'} rel={'noopener noreferrer'}> github</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;