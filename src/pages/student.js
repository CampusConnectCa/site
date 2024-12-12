import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

import logo from '../assets/logos/Asset 20.svg'
import image1 from '../assets/images/cc7.JPEG'
import image2 from '../assets/images/cc6.JPEG'


export default function Student () {
    // set up variable for navigation
    const navigate = useNavigate();

    // function to navigate to the home page (landing page)
    const navigateHome = () => navigate('/', {replace: false});

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
                    <a href="https://www.instagram.com/campusconnectca/" target="_blank" rel="noopener noreferrer" className={`nav-a ${isScrolled ? 'nav-scrolled-a' : ''}`}>
                        <h3 className="nav-a-text">Contact Us</h3>
                        <FontAwesomeIcon icon={faInstagram} size='xl' className="nav-a-ig"/>
                    </a>
                    <h2 className="nav-a-bar">|</h2>
                    <button className={`nav-button ${isScrolled ? 'nav-scrolled-button' : ''}`} onClick={navigateLandlord}>Landlord? Click Here</button>
                </div>
            </div>
           <div className="s-intro">
                <div className="s-intro-text-wrapper">
                    <h1 className="s-intro-text">We find you the home you'd actually pick, not the one you settle for.</h1>
                </div>
                <a href="https://www.instagram.com/campusconnectca/" target="_blank" rel="noopener noreferrer" className="s-intro-cta">
                    <h3 className="s-intro-cta-text">Send us a dm</h3>
                    <FontAwesomeIcon icon={faInstagram} size='2x' />
                </a>
            </div>
            <div className="image-block">
                <div className="image-block-content-wrapper">
                    <h2 className="image-block-title">Our Mission.</h2>
                    <h3 className="l-image-block-text">
                        At Campus Connect, we believe finding your ideal off-campus home shouldn't be a hassle. That's 
                        why we go beyond the basics to deliver peace of mind, so you can focus on what matters most—your 
                        studies, friends, and college life..
                    </h3>
                </div>
                <div className="image-block-image-wrapper">
                    <img src={image1} alt="students vibing" className="image-block-image" />
                </div>
            </div>
            <div className="text-block-primary">
                    <h2 className="text-block-title secondary-text">Tailored to Your Unique Preferences</h2>
                    <h3 className="text-block-text secondary-text">
                    We understand that no two students are the same. That's why we work closely with you to match housing 
                    options that meet your specific needs, including:
                    </h3>
            </div>
            <div className="s-card-wrapper">
                <div className="s-card">
                    <div className="s-card-title-wrapper">
                        <h2 className="s-card-title">Budget</h2>
                    </div>
                    <hr className="s-card-hr" />
                    <h3 className="s-card-text">
                        From affordable options to premium accommodations, we'll help you stay within your financial comfort zone.
                    </h3>
                </div>
                <div className="s-card">
                    <div className="s-card-title-wrapper">
                        <h2 className="s-card-title">Location</h2>
                    </div>
                    <hr className="s-card-hr" />
                    <h3 className="s-card-text">
                        Whether you prefer to be steps away from campus or closer to the city buzz, 
                        we'll find a home in the perfect spot.
                    </h3>
                </div>
                <div className="s-card">
                    <div className="s-card-title-wrapper">
                        <h2 className="s-card-title">Lifestyle Preferences</h2>
                    </div>
                    <hr className="s-card-hr" />
                    <h3 className="s-card-text">
                        Looking for a quiet neighborhood or a social vibe? We consider behavior requirements to match you with a 
                        home that aligns with your lifestyle.
                    </h3>
                </div>
                <div className="s-card">
                    <div className="s-card-title-wrapper">
                        <h2 className="s-card-title">Extra Requirements</h2>
                    </div>
                    <hr className="s-card-hr" />
                    <h3 className="s-card-text">
                        Need pet-friendly housing or specific amenities? We've got you covered.
                    </h3>
                </div>
            </div>
            <div className="image-block">
                <div className="image-block-content-wrapper">
                    <h2 className="image-block-title">Why Campus Connect?</h2>
                    <div className="image-block-card">
                        <FontAwesomeIcon icon={faCircleCheck} className="image-block-check-icon" size='xl' />
                        <div className="image-block-text-wrapper">
                            <h3 className="image-block-subtitle">Stress-Free Process</h3>
                            <h4 className="image-block-text">Skip the headaches of endless searching—we simplify the process for you.</h4>
                        </div>
                    </div>
                    <div className="image-block-card">
                        <FontAwesomeIcon icon={faCircleCheck} className="image-block-check-icon" size='xl' />
                        <div className="image-block-text-wrapper">
                            <h3 className="image-block-subtitle">Reliable Options</h3>
                            <h4 className="image-block-text">We carefully vet landlords and properties to ensure you experience minimal issues.</h4>
                        </div>
                    </div>
                    <div className="image-block-card">
                        <FontAwesomeIcon icon={faCircleCheck} className="image-block-check-icon" size='xl' />
                        <div className="image-block-text-wrapper">
                            <h3 className="image-block-subtitle">Close to What Matters</h3>
                            <h4 className="image-block-text">Stay near your favorite restaurants, coffee shops, and hangout spots.</h4>
                        </div>
                    </div>
                </div>
                <div className="image-block-image-wrapper">
                    <img src={image2} alt="vibey room" className="image-block-image" />
                </div>
            </div>
            <div className="text-block-secondary">
                <h2 className="text-block-title">Our Goal</h2>
                    <h3 className="text-block-text">
                        At Campus Connect, we don't just find housing—we create solutions. Our mission is to provide a living 
                        experience that empowers you to thrive academically, socially, and personally.
                    </h3>
                    <h3 className="text-block-text">
                        Let us find a space that feels like home, so you can focus on making the most of your college journey.
                    </h3>
            </div>
            <div className="s-spacer" />
            <div className="s-bottom-wrapper">
                <h2 className="s-bottom-text">
                    Your perfect home is just a step away—get started with Campus Connect today!
                </h2>
                <a href="https://www.instagram.com/campusconnectca/" target="_blank" rel="noopener noreferrer" className="s-intro-cta">
                    <h3 className="s-intro-cta-text">Send us a dm</h3>
                    <FontAwesomeIcon icon={faInstagram} size='2x' />
                </a>
            </div>
            <div className="footer">
                <h3 className="footer-text">Contact Us!</h3>
                <a href="https://www.instagram.com/campusconnectca/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} className='ig-icon' size='xl' />
                </a>
                <p className="copyright-text">&copy; 2024 Campus Connect MGT</p>
            </div>
        </div>
    );
}
