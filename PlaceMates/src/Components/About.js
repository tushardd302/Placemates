import React from 'react'
import aboutus from './images/aboutus.png';
import Navbar from './Navbar';

export default function About() {
    return (
        <>
            <Navbar />
            <div className="aboutInfo">
                <div className="information">
                    <h1>About Us</h1>
                    <p>
                        Welcome to PlaceMates, a leading provider of job placement and recruitment information for job seekers.
                        <br />
                        Our mission is to connect top talent with top employers, and to help our clients achieve their goals by providing them with personalized, reliable, and efficient services.
                        At PlaceMates, we are dedicated to providing exceptional service and building lasting relationships with our clients. <br /> Our team of experienced recruiters and career experts work tirelessly to understand the needs of both job seekers and employers, and to match them with the best possible opportunities.
                        <br />
                        We believe in integrity, professionalism, and innovation, and strive to uphold these values in everything we do.
                        <br />
                        <h6>#Unlock Your Career With Us</h6>
                    </p>
                </div>
                <div className="image">
                    <img src={aboutus} alt="No Image" id='img' />
                </div>
            </div>
        </>
    )
}
