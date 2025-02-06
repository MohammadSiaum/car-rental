import React from 'react';
import { Link } from 'react-router-dom';

const CustDash = () => {
    return (

        <div className='bg-base-200 h-96 mb-10 mt-10 rounded-sm'>
            <div className='grid grid-cols-4 gap-4'>
                <div className='bg-gray-800 p-5 h-96 rounded-sm'>
                    <div className='grid gap-y-4 text-white'>
                        <h2 className='text-2xl font-semibold text-center mb-3'>Seeker Dashboard</h2>
                        <div className='grid gap-y-5'>
                            <h2><Link to='/' className='focus:bg-violet-700 p-3 rounded-sm'>Home</Link></h2>
                            <h2><Link className='focus:bg-violet-700 p-3 rounded-sm'>Available Cars</Link></h2>
                            <h2><Link className='focus:bg-violet-700 p-3 rounded-sm'>Available Drivers</Link></h2>
                            <h2><Link className='focus:bg-violet-700 p-3 rounded-sm'>Car Booked</Link></h2>
                            <h2><Link className='focus:bg-violet-700 p-3 rounded-sm'>Hire Driver</Link></h2>
                            <h2 className='mt-4 ms-3'><Link className='bg-green-500 hover hover:bg-green-600 p-2 px-4 rounded-sm'>Log out</Link></h2>
                        </div>


                    </div>
                </div>
                <div className='col-span-3'>
                    <h2>Car Booked</h2>
                    <h2>Hire Driver</h2>

                </div>
            </div>
        </div>
    );
};

export default CustDash;