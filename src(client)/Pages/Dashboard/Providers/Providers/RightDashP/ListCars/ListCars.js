import React from 'react';
import ListCarTable from './ListCarTable';

const ListCars = () => {
    return (
        <div className='max-w-screen-xl mx-auto  py-5 '>
            <h2 className='text-2xl font-semibold text-center mt-2 mb-4 '>List Cars</h2>
            <ListCarTable></ListCarTable>
        </div>
    );
};

export default ListCars;