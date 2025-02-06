import React from 'react';
import { RiTeamLine, RiServiceLine } from 'react-icons/ri';
import { SiMicrosoftteams } from 'react-icons/si';
import { BiTimeFive, BiSupport } from 'react-icons/bi';
import { BsFillChatRightQuoteFill, BsFillChatSquareTextFill } from 'react-icons/bs';
import { MdEqualizer, MdOutlineGppGood } from 'react-icons/md';
import './Features.css';

const Features = () => {
    return (
        <div className='mb-32 mt-5 max-w-screen-xl mx-auto '>
            <div className='text-center justify-items-center'>
                <p className="text-2xl text-red-500 font-bold">Core Features</p>
                <h1 className='text-5xl font-bold my-6'>Why Choose Us</h1>
                <p className='text-center capitalize mt-7 text-gray-500 text-base leading-7'>the majority have suffered alteration in some form, by injected humour, or randomised</p>
                <p className='text-center capitalize mb-7 text-gray-500 text-base leading-7'>words which don't look even slightly believable. </p>
            </div>

            <div className='mt-14 gap-y-10 gap-x-5 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6'>
                <div className='feature-item w-44 h-40 hover:bg-fuchsia-900 duration-500 cursor-pointer rounded-lg border border-gray-300 grid place-content-center text-center'>
                    <div className='grid justify-items-center'>
                        <SiMicrosoftteams className='text-fuchsia-900 text-5xl f-icon'></SiMicrosoftteams>
                    </div>
                    <h3 className='mt-2 text-lg font-semibold f-title text-gray-950'>Expart Team</h3>
                </div>

                <div className='feature-item w-44 h-40 hover:bg-fuchsia-900 duration-500 cursor-pointer rounded-lg border border-gray-300 grid place-content-center text-center'>
                    <div className='grid justify-items-center'>
                        <BiTimeFive className='text-fuchsia-900 text-5xl f-icon'></BiTimeFive>
                    </div>
                    <h3 className='mt-2 text-lg font-semibold f-title text-gray-950'>Timely Delivery</h3>
                </div>

                <div className='feature-item w-44 h-40 hover:bg-fuchsia-900 duration-500 cursor-pointer rounded-lg border border-gray-300 grid place-content-center text-center'>
                    <div className='grid justify-items-center'>
                        <BiSupport className='text-fuchsia-900 text-5xl f-icon'></BiSupport>
                    </div>
                    <h3 className='mt-2 text-lg font-semibold f-title text-gray-950'>24/7 Support</h3>
                </div>

                <div className='feature-item w-44 h-40 hover:bg-fuchsia-900 duration-500 cursor-pointer rounded-lg border border-gray-300 grid place-content-center text-center'>
                    <div className='grid justify-items-center'>
                        <RiServiceLine className='text-fuchsia-900 text-5xl f-icon'></RiServiceLine>
                    </div>
                    <h3 className='mt-2 text-lg font-semibold f-title text-gray-950'>Best Requirement</h3>
                </div>

                <div className='feature-item w-44 h-40 hover:bg-fuchsia-900 duration-500 cursor-pointer rounded-lg border border-gray-300 grid place-content-center text-center'>
                    <div className='grid justify-items-center'>
                        <MdOutlineGppGood className='text-fuchsia-900 text-5xl f-icon'></MdOutlineGppGood>
                    </div>
                    <h3 className='mt-2 text-lg font-semibold f-title text-gray-950'>100% Quranty</h3>
                </div>

                <div className='feature-item w-44 h-40 hover:bg-fuchsia-900 duration-500 cursor-pointer rounded-lg border border-gray-300 grid place-content-center text-center'>
                    <div className='grid justify-items-center'>
                        <BsFillChatRightQuoteFill className='text-fuchsia-900 text-5xl f-icon'></BsFillChatRightQuoteFill>
                    </div>
                    <h3 className='mt-2 text-lg font-semibold f-title text-gray-950'>Best Service</h3>
                </div>

            </div>
        </div>
    );
};

export default Features;