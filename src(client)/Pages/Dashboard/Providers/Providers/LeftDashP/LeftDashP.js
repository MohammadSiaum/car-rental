import React from 'react';
import { Link } from 'react-router-dom';

const LeftDashP = () => {
    return (
        <div>
            <h2 className='text-2xl font-semibold text-center mb-3'>Provider Dashboard</h2>
            <ul className="menu text-base text-white">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='add-car'>Add Car</Link></li>
                <li><Link to='cars-list'>List Cars</Link></li>
                <li>
                    <summary>Driver</summary>
                    
                    <ul>
                        <li><Link to='join-driver'>Add Driver</Link></li>
                        <li><Link to='add-driver'>List Driver</Link></li>
                    </ul>
                    
                </li>
            </ul>
            <h2 className='mt-6 ms-5 mb-3 text-white'><Link className='btn-neutral p-2 px-4 rounded-lg'>Log out</Link></h2>
        </div>
    );
};

export default LeftDashP;