import React from 'react';
import Driver from './Driver/Driver';

const HireDriver = () => {
    return (
        <div className='max-w-screen-xl mx-auto mt-20 mb-20 py-5 bg-gradient-to-r from-violet-200 from-10%  to-emerald-100 to-90%'>
            <h2 className='text-2xl font-semibold text-center mb-5 '>Hire a driver as your car partner</h2>
            <Driver></Driver>
        </div>
    );
};

export default HireDriver;