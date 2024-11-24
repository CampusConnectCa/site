import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";

import logo from '../assets/logos/Asset 20.svg'


export default function Student () {
    // set up variable for navigation
    const navigate = useNavigate();

    // function to navigate to the home page (landing page)
    const navigateHome = () => navigate('/', {replace: false});

    // function to navigate to the reviews page
    const navigateStudent = () => navigate('/student', { replace: false });

    // function to navigate to the reviews page
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
        <div className="student-wrapper">
            <div className={`nav-bar ${isScrolled ? 'scrolled' : ''}`}>
                <div className="nav-logo-wrapper">
                    <img src={logo} alt="CC-Logo" className="nav-logo" onClick={navigateHome} />
                </div>
                <div className="nav-links-wrapper">
                    <button className={`nav-button ${isScrolled ? 'nav-button-scrolled' : ''}`} onClick={navigateStudent}>find your home</button>
                    <button className={`nav-button ${isScrolled ? 'nav-button-scrolled' : ''}`} onClick={navigateLandlord}>find vetted tenants</button>
                </div>
            </div>
           <h1>Student Page</h1>
           <button onClick={navigateHome}>Landing Page</button>
        </div>
    )
}
