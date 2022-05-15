import React from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser} from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDots } from "react-icons/bi";


const Nav = () => {
    return (
        <nav className="nav">
            <a href="#">
                <AiOutlineHome />
            </a>
            <a href="#about">
                <AiOutlineUser />
            </a>
            <a href="#experience">
                <BiBook />
            </a>
            <a href="#services">
                <RiServiceLine />
            </a>
            <a href="#contact">
                <BiMessageSquareDots />
            </a>
        </nav>
    );
};

export default Nav;
