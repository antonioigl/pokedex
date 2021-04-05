import React from 'react';
import '../assets/styles/components/Navbar.scss'
import logo from '../assets/static/logo.png';
import {Link} from "react-router-dom";

const Navbar = ({title}) => (
    <div className="Navbar">
        <img className="Navbar-brand" style={{ float: 'left'}} src={logo} alt={'logo'}/>
        <Link to={'/'} style={{ textDecoration: 'none', color: 'white'}}>
            Pokédex { title && '> '}
        </Link>
        {title}
    </div>
);


export default Navbar;