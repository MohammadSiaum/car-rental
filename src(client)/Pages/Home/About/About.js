import React from 'react';
import person from '../../../assets/images/about_us/person2.jpg';
import parts from '../../../assets/images/about_us/parts2.jpg';

const About = () => {
    return (
        <div className="hero my-32 ">
            <div className="hero-content flex-col lg:flex-row  p-0 gap-8">
                <div className='relative w-1/2'>
                    <img src={person} alt='' className="w-3/4 h-full person-image rounded-lg " />
                    <img src={parts} alt='' className="w-2/5 absolute right-20 top-1/2 border-8 rounded-lg" />
                </div>
                <div className='w-1/2'>
                    <h3 className="text-xl font-bold text-red-500 mb-7" >About Us</h3>
                    <h1 className="text-5xl font-bold">We are qualified</h1>
                    <h1 className="text-5xl font-bold my-2 ">& of experience</h1>
                    <h1 className="text-5xl font-bold mb-3">in this field</h1>
                    <p className="py-5 text-gray-500 text-lg leading-7 capitalize">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p className=" text-gray-500 text-lg leading-7 capitalize">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                    <button className="mt-10 btn btn-primary border-none text-white text-base hover:bg-gray-800 bg-fuchsia-900 capitalize">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;