import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

import logo from '../assets/logos/Asset 20.svg'
import image1 from '../assets/images/cc11.JPEG'
import image2 from '../assets/images/cc10.JPEG'



export default function Landlord () {
    // set up variable for navigation
    const navigate = useNavigate();

    // function to navigate to the home page (landing page)
    const navigateHome = () => navigate('/', {replace: false});

    // function to navigate to the reviews page
    const navigateStudent = () => navigate('/student', { replace: false });

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return (
        <div className="landlord-wrapper">
           <div className={`nav-bar ${isScrolled ? 'scrolled' : ''}`}>
                <div className="nav-logo-wrapper">
                    <img src={logo} alt="CC-Logo" className="nav-logo" onClick={navigateHome} />
                </div>
                <div className="nav-links-wrapper">
                    <a href="https://zld3ikl4smc.typeform.com/to/sTDJ5Vqd" target="_blank" rel="noopener noreferrer" className={`nav-a ${isScrolled ? 'nav-scrolled-a' : ''}`}>
                        <h3 className="nav-a-text">Contact Us</h3>
                    </a>
                    <h2 className="nav-a-bar">|</h2>
                    <button className={`nav-button ${isScrolled ? 'nav-scrolled-button' : ''}`} onClick={navigateStudent}>Student? Click Here</button>
                </div>
            </div>
            <div className="l-block1-wrapper">
                <h1 className="l-block1-title">We make having students as tenants low stress and profitable.</h1>
                <h3 className="l-block1-text">
                    As a landlord, filling vacancies isn't the challenge—finding the right tenants is. Campus Connect takes the guesswork out 
                    of leasing by delivering vetted, reliable tenants tailored to your preferences, while making your landlord experience as 
                    smooth and worry-free as possible.
                </h3>
                <a href="https://zld3ikl4smc.typeform.com/to/sTDJ5Vqd" target="_blank" rel="noopener noreferrer" className="l-block1-a">Contact Us</a>
            </div>
            <div className="l-block2-wrapper">
                <h2 className="l-block2-title">What We Offer</h2>
                <h3 className="l-block2-text">
                    At Campus Connect, we do more than just connect you with tenants—we ensure your 
                    property is in good hands while you enjoy a truly low-touch landlord experience.
                </h3>
            </div>
            <div className="l-block3-wrapper">
                <div className="l-block3-content-wrapper">
                    <div className="l-block3-title-wrapper">
                        <h2 className="l-block3-title">Our Comprehensive Tenant Vetting Process</h2>
                        <h4 className="l-block3-title-text">
                            We rigorously screen every applicant to ensure they're a perfect fit for 
                            your property, saving you time, money, and headaches:
                        </h4>
                    </div>
                    <div className="l-block3-card">
                        <FontAwesomeIcon icon={faCircleCheck} className="l-check-icon" size='xl' />
                        <div className="l-block3-text-wrapper">
                            <h3 className="l-block3-subtitle">In-Depth Interviews:</h3>
                            <h4 className="l-block3-text">Uncover tenants' true suitability.</h4>
                        </div>
                    </div>
                    <div className="l-block3-card">
                        <FontAwesomeIcon icon={faCircleCheck} className="l-check-icon" size='xl' />
                        <div className="l-block3-text-wrapper">
                            <h3 className="l-block3-subtitle">Social Media Checks: </h3>
                            <h4 className="l-block3-text">Gain clarity on their habits and lifestyle.</h4>
                        </div>
                    </div>
                    <div className="l-block3-card">
                        <FontAwesomeIcon icon={faCircleCheck} className="l-check-icon" size='xl' />
                        <div className="l-block3-text-wrapper">
                            <h3 className="l-block3-subtitle">Credit Checks:</h3>
                            <h4 className="l-block3-text">Confirm financial responsibility to protect your investment.</h4>
                        </div>
                    </div>
                    <div className="l-block3-card">
                        <FontAwesomeIcon icon={faCircleCheck} className="l-check-icon" size='xl' />
                        <div className="l-block3-text-wrapper">
                            <h3 className="l-block3-subtitle">Real References:</h3>
                            <h4 className="l-block3-text">We dig deeper for authentic insights—not just the names tenants provide.</h4>
                        </div>
                    </div>
                </div>
                <div className="l-block3-image-wrapper">
                    <img src={image1} alt="campus building" className="l-block3-image" />
                </div>
            </div>
            <div className="l-block4-wrapper">
                <h2 className="l-block4-title">Why Choose Campus Connect?</h2>
                <div className="l-block4-content-wrapper">
                    <div className="l-block4-card">
                        <div className="l-block4-number-wrapper">
                            <h4 className="l-block4-number">1</h4>
                        </div>
                        <h3 className="l-block4-subtitle">Save Money:</h3>
                        <h4 className="l-block4-text">
                            Prevent costly repairs and damages by leasing only to thoroughly vetted tenants who will respect your property.
                        </h4>
                    </div>
                    <div className="l-block4-card">
                        <div className="l-block4-number-wrapper">
                            <h4 className="l-block4-number">2</h4>
                        </div>
                        <h3 className="l-block4-subtitle">Guaranteed Replacements:</h3>
                        <h4 className="l-block4-text">
                            If a tenant moves out, we'll find a new, qualified one—quickly and without hassle.
                        </h4>
                    </div>
                    <div className="l-block4-card">
                        <div className="l-block4-number-wrapper">
                            <h4 className="l-block4-number">3</h4>
                        </div>
                        <h3 className="l-block4-subtitle">Maintenance Made Easy:</h3>
                        <h4 className="l-block4-text">
                            From plumbing issues to appliance repairs, we organize and coordinate maintenance needs so you don't 
                            have to lift a finger.
                        </h4>
                    </div>
                    <div className="l-block4-card">
                        <div className="l-block4-number-wrapper">
                            <h4 className="l-block4-number">4</h4>
                        </div>
                        <h3 className="l-block4-subtitle">Low-Touch Experience:</h3>
                        <h4 className="l-block4-text">
                            Sit back and relax while we handle everything, from tenant sourcing to problem-solving. 
                            Your only job? Collect rent every month, stress-free.
                        </h4>
                    </div>
                    <div className="l-block4-card">
                        <div className="l-block4-number-wrapper">
                            <h4 className="l-block4-number">5</h4>
                        </div>
                        <h3 className="l-block4-subtitle">Tailored Tenants:</h3>
                        <h4 className="l-block4-text">
                            Our Landlord Preference Form lets you specify exactly what you want in a tenant. We'll find the 
                            closest match to ensure your property is leased to someone who aligns with your expectations.
                        </h4>
                    </div>
                </div>
            </div>
            <div className="l-block5-wrapper">
                <div className="l-block5-content-wrapper">
                    <h2 className="l-block5-title">Your Partner in Property Management</h2>
                    <h3 className="l-block5-text">
                        At Campus Connect, we're here to simplify your role as a landlord. From handling tenant screenings to 
                        organizing maintenance, we take care of the details so you can enjoy the benefits of property ownership 
                        without the hassle.
                    </h3>
                </div>
                <div className="l-block5-image-wrapper">
                    <img src={image2} alt="students vibing" className="l-block5-image" />
                </div>
            </div>
            <div className="l-block6-wrapper">
                <h2 className="l-block6-title">Partner with Campus Connect today—stress less, earn more!</h2>
                <a href="https://zld3ikl4smc.typeform.com/to/sTDJ5Vqd" target="_blank" rel="noopener noreferrer" className="l-block6-a">Contact Us</a>
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
