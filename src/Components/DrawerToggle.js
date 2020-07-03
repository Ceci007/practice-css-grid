import React, { useState, useEffect } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

const DrawerToggle = (props) => {
    return (
        <button className="toggle">
            <input type="checkbox" className="toggle__checkbox" id="nav-toggle" />
            <label htmlFor="nav-toggle" className="toggle__button">
                <span className="toggle__icon" />
            </label>
            <div className="toggle__background" />
            <nav className="toggle__nav">
                <div className="toggle__list">
                    <div className="toggle__link">
                        <Link><i className="fas fa-cogs"></i>Technologies</Link>
                    </div>
                    <div className="toggle__link">
                        <Link><i className="fas fa-magic"></i>Design</Link>
                    </div>
                    <div className="toggle__link">
                        <Link><i className="fab fa-sketch"></i>Sketch</Link>
                    </div>
                    <div className="toggle__link">
                        <Link><i className="fas fa-gift"></i>Bundles</Link>
                    </div>
                    <div className="toggle__link">
                        <Link><i className="fas fa-user"></i>Logout</Link>
                    </div>
                </div>
            </nav>
        </button>
    );
}

export default DrawerToggle;