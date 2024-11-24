import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { HashLink as Link } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import '../styles.css'

// images imported:
import logo from '../assets/logos/Asset 20.svg'


export default function LandingPage () {
    // set up variable for navigation
    const navigate = useNavigate();

    // function to navigate to the home page (landing page)
    const navigateHome = () => navigate('/', {replace: false});

    // mailto string for email questions button
    const emailString = "mailto:jarenworme@gmail.com?subject=JWElectrical%20Query?body=Hi%20Jaren,%0D%0A%0D%0AI%20would%20like%20to%20ask%20a%20question%20about%20your%20services!%0D%0A%0D%0A"

    // function to navigate to the student page
    const navigateStudent = () => navigate('/student', { replace: false });

    // function to navigate to the landlord page
    const navigateLandlord = () => navigate('/landlord', { replace: false });

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return (
        <div className="landing-page-wrapper">
            <div className={`nav-bar ${isScrolled ? 'scrolled' : ''}`}>
                <div className="nav-logo-wrapper">
                    <img src={logo} alt="CC-Logo" className="nav-logo" onClick={navigateHome} />
                </div>
                <div className="nav-links-wrapper">
                    <button className={`nav-button ${isScrolled ? 'nav-button-scrolled' : ''}`} onClick={navigateStudent}>find your home</button>
                    <button className={`nav-button ${isScrolled ? 'nav-button-scrolled' : ''}`} onClick={navigateLandlord}>find vetted tenants</button>
                </div>
            </div>
            <div className="lp-block1-wrapper">
                <div className="lp-block1-text-wrapper">
                    <h1 className="lp-block1-text">We find students housing that matches their preferences and connect landlords with fully vetted, trustworthy tenants.</h1>
                </div>
                <div className="lp-block1-button-wrapper">
                    <button className="lp-block1-cta-1">find your home</button>
                    <button className="lp-block1-cta-2">find vetted tenants</button>
                </div>
                <Link className="nav-link" smooth to="#lpblock2">
                    <FontAwesomeIcon icon={faChevronDown} className='lp-chevron-down-icon' size='2x' />
                </Link>
            </div>
            <div id="lpblock2" className="lp-block2-wrapper">
                <h1 className="lp-block2-text">Reviews will go here</h1>
                <button className="lp-block2-button">review cards</button>
            </div>
            <div className="lp-block3-wrapper">
                <h1 className="lp-block3-text">student info</h1>
                <button className="lp-block2-button">Learn more here</button>
            </div>
            <div className="lp-block4-wrapper">
                <h1 className="lp-block4-text">Landlord info</h1>
            </div>
            <div className="lp-block5-wrapper">
                <h1 className="lp-block4-text">Our platform is currently in development. Stay tuned.</h1>
            </div>
            <div className="footer">
                <FontAwesomeIcon icon={faInstagram} className='ig-icon' size='xl' onClick={navigateHome}/>
                <p className="copyright-text">&copy; 2024 Campus Connect MGT</p>
            </div>
        </div>
    )
}
