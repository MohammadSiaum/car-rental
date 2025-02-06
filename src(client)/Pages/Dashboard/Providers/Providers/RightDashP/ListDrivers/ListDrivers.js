import React from 'react';
import ListDriverTable from './ListDriverTable';

const ListDrivers = () => {
    return (
        <div className='max-w-screen-xl mx-auto  py-5 '>
            <h2 className='text-2xl font-semibold text-center mt-2 mb-4 '>List Drivers</h2>
            <ListDriverTable></ListDriverTable>

        </div>
    );
};

export default ListDrivers;