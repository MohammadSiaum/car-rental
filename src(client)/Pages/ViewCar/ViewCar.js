import React from 'react';
import CarTable from './Cars/CarTable';

const ViewCar = () => {
    return (
        <div className='max-w-screen-xl mx-auto mt-20 mb-20 py-5 bg-gradient-to-r from-violet-200 from-10%  to-emerald-100 to-90%'>
            <h2 className='text-2xl font-semibold text-center mb-5 '>Available Cars</h2>
            <CarTable></CarTable>
        </div>
        
    );
};

export default ViewCar;