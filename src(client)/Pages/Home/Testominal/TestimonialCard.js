import React from 'react';
import { ImQuotesRight } from 'react-icons/im';
import { FaStar } from 'react-icons/fa';
import customer from '../../../assets/images/customer/Customer1.jpg';

const TestimonialCard = ({customerName}) => {
    const itemStar = <>
        <FaStar></FaStar>
        <FaStar></FaStar>
        <FaStar></FaStar>
        <FaStar></FaStar>
        <FaStar></FaStar>
    </>

    return (
        <div className='border-2 border-pink-300 rounded-lg shadow-md'>
            <div className='p-14'>
                <div className='flex justify-between w-4/5'>
                    <div className='flex items-center'>
                        <div className='w-14 h-14 mr-8'>
                            <img className='rounded-full' src={customer} alt="" />
                        </div>
                        <div>
                            <h2 className='text-2xl font-semibold mb-1 text-blue-950'>{customerName}</h2>
                            <h3 className='text-xl font-semibold text-gray-500'>Businessman</h3>
                        </div>

                    </div>
                    <div className='text-6xl text-red-200'>
                        <ImQuotesRight></ImQuotesRight>
                    </div>

                </div>

                <div>
                    <p className='capitalize mt-7 text-gray-600 text-base leading-7'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                    </p>
                    <p className=' flex gap-1 mt-5 text-orange-400'>
                        {itemStar}
                    </p>

                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;