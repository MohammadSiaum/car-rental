import React from 'react';
import { Link } from 'react-router-dom';

const LeftDashs = () => {

    return (
        <div>
            <h2 className='text-2xl font-semibold text-center mb-3'>Seeker Dashboard</h2>
            <ul className="menu text-base text-white">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='available-car'>Available Cars</Link></li>
                <li><Link to='available-driver'>Available Drivers</Link></li>
                <li><Link to='car-booked'>Car Booked</Link></li>
                <li><Link to='hired-driver'>Hired Driver</Link></li>
            </ul>
            <h2 className='mt-6 ms-5 mb-3 text-white'><Link className='btn-neutral p-2 px-4 rounded-lg'>Log out</Link></h2>
        </div>

    );
};

export default LeftDashs;