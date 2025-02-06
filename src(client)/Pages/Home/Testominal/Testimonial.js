import React from 'react';
import TestimonialCard from './TestimonialCard';


const Testimonial = () => {
    const customer1 ='Mohammad Siaum';
    const customer2 = 'Siaum Ahmed';
    return (
        <div className='mb-28 max-w-screen-xl mx-auto'>
            <div className='text-center justify-items-center'>
                <p className="text-2xl text-red-500 font-bold">Testimonial</p>
                <h1 className='text-5xl font-bold my-6 text-zinc-900'>Why Customer Says</h1>
                <p className='text-center capitalize mt-7 text-gray-500 text-base leading-7'>the majority have suffered alteration in some form, by injected humour, or randomised</p>
                <p className='text-center capitalize mb-7 text-gray-500 text-base leading-7'>words which don't look even slightly believable. </p>
            </div>
            <div className='mt-14 gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
                <TestimonialCard customerName={customer1}></TestimonialCard>
                <TestimonialCard customerName={customer2}></TestimonialCard>
            </div>
            
        </div>
    );
};

export default Testimonial;