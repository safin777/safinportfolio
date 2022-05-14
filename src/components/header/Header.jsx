import React from "react";
import "./header.css";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import ME from "../../assets/img/me.png";

const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h2>Hello I'm </h2>
                <h1>Safin Sayed</h1>
                <h3 className="text-light">I'm a Full Stack Web Developer</h3>
                <CTA/>
                <HeaderSocials/>
            </div>
            
            <div className="me">
              <img src={ME} alt="me"/> 
            </div>

            <a href="#contact" className="scroll__down">Scroll Down</a>

            
        </header>
    );
};

export default Header;
