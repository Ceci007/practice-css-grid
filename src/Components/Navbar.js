import React, { useState, useEffect } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import DrawerToggle from './DrawerToggle';

const Navbar = (props) => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    }, [scrolled]);

    const handleScroll = (event) => {
        const scrollTop = window.pageYOffset;
    
        if(scrollTop > 40) {
          setScrolled( true );
        } else {
          setScrolled( false );
        }
      };

    return (
        <nav className={scrolled ? "navbar-white" : "navbar"}>
           <div className={scrolled ? "navbar-white__logo-box" : "navbar__logo-box"}>
               <img src="./img/logo.png" />
           </div> 
           <div className={scrolled ? "navbar-white__toggle" : "navbar__toggle" }>
                <DrawerToggle />
           </div>
           <ul className={scrolled ? "navbar-white__list" : "navbar__list"}>
                <li className={scrolled ? "navbar-white__item" : "navbar__item"}>
                    <Link><i className="fas fa-cogs"></i>Technologies</Link>
                </li>
                <li className={scrolled ? "navbar-white__item" : "navbar__item"}>
                    <Link><i className="fas fa-magic"></i>Design</Link>
                </li>
                <li className={scrolled ? "navbar-white__item" : "navbar__item"}>
                    <Link><i className="fab fa-sketch"></i>Sketch</Link>
                </li>
                <li className={scrolled ? "navbar-white__item" : "navbar__item"}>
                    <Link><i className="fas fa-gift"></i><span>5</span>Bundles</Link>
                </li>
                <li className={scrolled ? "navbar-white__item" : "navbar__item"}>
                    <Link><div className="navbar__item--img"><img src="./img/face.jpg" /></div></Link>
                </li>
           </ul>
        </nav>
    )
}

export default Navbar;