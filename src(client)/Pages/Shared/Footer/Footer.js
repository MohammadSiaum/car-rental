import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="max-w-screen-xl mx-auto footer  p-32 mb-2 bg-gray-900 rounded-lg text-slate-200">
            <div>
                <img className='w-1/2'  alt="" />
                <p className='mt-1'>Car Rental System Ltd.<br />Providing reliable tech since 2023</p>
            </div>
            <div>
                <span className="footer-title">About</span>
                <Link to='/' className="link link-hover">Home</Link>
                <Link to='/' className="link link-hover">Service</Link>
                <Link to='/' className="link link-hover">Contact</Link>
                <Link to='/' className="link link-hover">Triple M's Team</Link>
        
            </div>
            <div>
                <span className="footer-title">Company</span>
                <Link to='/' className="link link-hover">Why Car Rental?</Link>
                <Link to='/' className="link link-hover">About</Link>
                <Link to='/' className="link link-hover">Jobs</Link>
            </div>
            <div>
                <span className="footer-title">Support</span>
                <Link to='/' className="link link-hover">Support Center</Link>
                <Link to='/' className="link link-hover">Terms of use</Link>
                <Link to='/' className="link link-hover">Feedback</Link>
                <Link to='/' className="link link-hover">Accesbility</Link>
            </div>
        </footer>
    );
};

export default Footer;