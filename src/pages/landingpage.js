import { useNavigate } from "react-router-dom";
import React, { useState } from "react";


export default function LandingPage () {
    // set up variable for navigation
    const navigate = useNavigate();

    // function to navigate to the home page (landing page)
    const navigateHome = () => navigate('/', {replace: false});

    // mailto string for email questions button
    const emailString = "mailto:jarenworme@gmail.com?subject=JWElectrical%20Query?body=Hi%20Jaren,%0D%0A%0D%0AI%20would%20like%20to%20ask%20a%20question%20about%20your%20services!%0D%0A%0D%0A"

    // function to navigate to the reviews page
    const navigateStudent = () => navigate('/student', { replace: false });

    // function to navigate to the reviews page
    const navigateLandlord = () => navigate('/landlord', { replace: false });


    return (
        <div className="landing-page-wrapper">
           <h1>Campus Connect Landing Page</h1>
           <button onClick={navigateStudent}>Student Page</button>
           <button onClick={navigateLandlord}>Landlord Page</button>
        </div>
    )
}
