import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from '../../../Shared/Header/Header';
import LeftDashS from '../LeftDashS/LeftDashS';
import Footer from '../../../Shared/Footer/Footer';


const SeekersMain = () => {
    return (
        <div className='max-w-screen-xl mx-auto'>
            <Header></Header>
            <div className='bg-gradient-to-r from-violet-200 from-10%  to-emerald-100 to-90% mb-10 mt-10 rounded-sm '>
                <div className='grid grid-cols-4 gap-4'>
                    <div className='bg-gradient-to-r from-violet-600 from-15%  to-emerald-500 to-90% p-5 rounded-sm'>
                        <LeftDashS></LeftDashS>
                    </div>

                    <div className='col-span-3'>
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default SeekersMain;