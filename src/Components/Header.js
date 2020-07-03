import React, {Fragment} from 'react';
import Navbar from './Navbar';

const Header = () => {
    return (
        <header className="header-box">
             <Navbar />
            <div className="hero">
                <div className="wrapper">
                    <div className="wrapper__left">
                        <h2 className="headline-2">Fully Coded UI Tools to create<br/>web and mobile apps</h2>
                        <p className="italic-paragraph margin-top-medium">
                            UI Kits, Templates and Dashboards built on top of Bootstrap, Vue.js, React, Angular, 
                            Ruby on Rails and Node.js. Join over 1,214,032 creatives to access all our products!
                        </p>
                        <div className="search margin-top-medium">
                            <input className="search__input" placeholder="Material UI" />
                            <span><i className="fas fa-search"></i></span>
                        </div>
                    </div>
                    <div className="wrapper__right">
                    </div>
                </div>
            </div>
            <div className="landing-right">
                
            </div>
        </header>
    )
}

export default Header;