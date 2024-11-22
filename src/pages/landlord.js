import { useNavigate } from "react-router-dom";
import React, { useState } from "react";


export default function Landlord () {
    // set up variable for navigation
    const navigate = useNavigate();

    // function to navigate to the home page (landing page)
    const navigateHome = () => navigate('/', {replace: false});


    return (
        <div className="landlord-wrapper">
           <h1>Landlord Page</h1>
           <button onClick={navigateHome}>Landing Page</button>
        </div>
    )
}
