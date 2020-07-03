import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="about-us verticla-line">
                <h4 className="heading-4">About Us</h4>
                <p>
                    Everything that we used to create our products can be downloaded for free 
                    under MIT License. People have already trusted and used them in thousands of sites.
                </p>
            </div>
            <div className="address">
                <h4 className="heading-4">Address</h4>
                <p><i className="fas fa-map-marker-alt"></i>Seattle, WA 98144-4643</p>
                <p><i className="fas fa-phone-alt"></i>+5959220801</p>
                <p><i className="fas fa-envelope"></i>cecibenitezca@gmail.com</p>
            </div>
            <div className="contact-us">
                <h4 className="heading-4">Contact Us</h4>
                <form className="form">
                    <input type="text" placeholder="name" />
                    <textarea rows="4" cols="50" placeholder="message" /><br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
            <div className="copyright">Cecilia Benítez Casaccia <span>&copy; 2020</span> for a better web</div>
        </footer>
    );
}

export default Footer;