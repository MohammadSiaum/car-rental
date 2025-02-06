import React, { useEffect, useState } from 'react';
import SeekerDriverRow from './SeekerDriverRow';

const SeekerDriverTable = () => {
    
    const [skrDrivers, setSkrDrivers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3001/drivers')
            .then(res => res.json())
            .then(data => setSkrDrivers(data));

    }, [])
    
    return (
        <div className="overflow-x-auto mt-10 mb-10">
            <table className="table">
                {/* head */}
                <thead>
                    <tr className='text-sm'>
                        <th></th>
                        <th>Name</th>
                        <th>Experience</th>
                        <th>Present Address</th>
                        <th>Rating( 5* )</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        skrDrivers.map(driver => <SeekerDriverRow
                            key={driver.driver_id}
                            driver={driver}
                            
                        ></SeekerDriverRow>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default SeekerDriverTable;