import React from 'react';
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaTwitterSquare, } from 'react-icons/fa';
import './TeamCard.css';

const TeamCard = ({ teamMember }) => {

    const { image, title, describe } = teamMember;

    return (
        <div>
            <div className="card card-compact w-96 rounded-xl border bg-gradient-to-r from-violet-100 from-15%  to-sky-100 to-90% border-gray-300">
            <div className='teamMember-image-wrap w-5/6 my-7 ml-8'>
                <img className='rounded-lg place-self-center' src={image} alt="" />
            </div>
            <div className="card-body text-center mb-2">
                <h2 className="text-xl font-semibold">{title}</h2>
                <p className='text-gray-500 text-lg font-semibold mb-2'>{describe}</p>
                <p className='justify-center flex gap-2 mb-2 text-3xl '>
                    <FaFacebookSquare className='text-blue-700 cursor-pointer'></FaFacebookSquare>
                    <FaTwitterSquare className='text-blue-500 cursor-pointer'></FaTwitterSquare>
                    <FaLinkedin className='rounded-lg text-sky-700 cursor-pointer'></FaLinkedin>
                    <FaInstagramSquare className='text-pink-600 cursor-pointer'></FaInstagramSquare>

                </p>

            </div>
        </div>
        </div>
    );
};

export default TeamCard;