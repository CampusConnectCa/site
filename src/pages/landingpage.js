import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import '../styles.css'

// images imported:
import logo from '../assets/logos/Asset 20.svg'
import image1 from '../assets/images/cc12.JPEG'
import image2 from '../assets/images/cc2.JPEG'
import headshot1 from '../assets/images/headshot1.jpg'
import headshot2 from '../assets/images/headshot2.jpg'
import headshot3 from '../assets/images/headshot3.jpg'


export default function LandingPage () {
    // set up variable for navigation
    const navigate = useNavigate();

    // function to navigate to the home page (landing page)
    const navigateHome = () => navigate('/', {replace: false});

    // mailto string for email questions button
    // const emailString = "mailto:jarenworme@gmail.com?subject=JWElectrical%20Query?body=Hi%20Jaren,%0D%0A%0D%0AI%20would%20like%20to%20ask%20a%20question%20about%20your%20services!%0D%0A%0D%0A"

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
                    <button className={`nav-button ${isScrolled ? 'nav-scrolled-button' : ''}`} onClick={navigateStudent}>find your home</button>
                    <button className={`nav-button ${isScrolled ? 'nav-scrolled-button' : ''}`} onClick={navigateLandlord}>find vetted tenants</button>
                </div>
            </div>
            <div className="lp-intro">
                <div className="lp-intro-text-wrapper">
                    <h1 className="lp-intro-text">We find students housing that matches their preferences</h1>
                    <h1 className="lp-intro-text">and</h1>
                    <h1 className="lp-intro-text">connect landlords with fully vetted, trustworthy tenants.</h1>
                </div>
                <div className="lp-intro-cta-wrapper">
                    <button className="lp-intro-cta" onClick={navigateStudent}>find your home</button>
                    <button className="lp-intro-cta" onClick={navigateLandlord}>find vetted tenants</button>
                </div>
            </div>
            <div className="reviews-wrapper">
                <div className="review">
                    <img src={headshot2} alt="headshot" className="review-headshot" />
                    <div className="review-content">
                        <h2 className="review-title">Pira Ebrahimi, Keller Williams</h2>
                        <p className="review-text">
                            Working with the Campus Connect team was exceptional. They found and screened two ideal tenants 
                            and guided me through the entire process seamlessly.
                        </p>
                    </div>
                </div>
                <div className="review">
                    <img src={headshot1} alt="headshot" className="review-headshot" />
                    <div className="review-content">
                        <h2 className="review-title">Karima, Australian Exchange Student</h2>
                        <p className="review-text">
                            Campus Connect really helped find me a new tenant for my place at the Quad. Not only did I have a 
                            lot of people asking about the place, but there was a wide range which fit the description of the 
                            type of person I wanted. The team really helped me feel at ease once my move out date came about. 
                            If it wasn't for them I would have been on struggle street trying to find someone to take my lease!
                        </p>
                    </div>
                </div>
                <div className="review">
                    <img src={headshot3} alt="headshot" className="review-headshot" />
                    <div className="review-content">
                        <h2 className="review-title">Samantha, Student Athlete</h2>
                        <p className="review-text">
                            Heading into my second year, I found myself scrambling to secure housing at the last minute. I was 
                            unsure how to navigate the process, and finding legitamate listings that met my criteria felt impossible. 
                            Campus Connect not only helped me find a comfortable home, but they also made this daunting process less 
                            stressful. I felt less alone in tackling this challenging task. The team at Campus Connect was very 
                            professional, reliable and I would highly recommend their service to any university student searching 
                            for housing accommodations.
                        </p>
                    </div>
                </div>
            </div>
            <div className="image-block">
                <div className="image-block-content-wrapper">
                    <h2 className="image-block-title">Ditch the housing drama.</h2>
                    <h3 className="image-block-text">
                        Campus Connect hooks you up with off-campus spots that match your vibe—budget, location, 
                        lifestyle, all covered. We make sure you're set, so you can focus on crushing college 
                        life without the stress.
                    </h3>
                    <button className="image-block-button" onClick={navigateStudent}>find your home</button>
                </div>
                <div className="image-block-image-wrapper">
                    <img src={image1} alt="students" className="image-block-image" />
                </div>
            </div>
            <div className="image-block image-block-reverse-display">
                <div className="image-block-content-wrapper">
                    <h2 className="image-block-title right-align">Lease your property with confidence.</h2>
                    <h3 className="image-block-text right-align">
                        Campus Connect delivers fully vetted tenants tailored to your preferences, saves you money 
                        by minimizing risks, and handles maintenance requests. Enjoy a low-touch landlord experience 
                        where we take care of the hassles, and you collect the rent.
                    </h3>
                    <button className="image-block-button" onClick={navigateLandlord}>find vetted tenants</button>
                </div>
                <div className="image-block-image-wrapper">
                    <img src={image2} alt="housing" className="image-block-image" />
                </div>
            </div>
            <div className="text-block-secondary">
                <h2 className="text-block-title">Our new platform is currently in development. Stay tuned.</h2>
            </div>
            <div className="footer">
                <h3 className="footer-text">Contact Us!</h3>
                <a href="https://www.instagram.com/campusconnectca/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} className='ig-icon' size='xl' />
                </a>
                <p className="copyright-text">&copy; 2024 Campus Connect MGT</p>
            </div>
        </div>
    )
}
