import React, { useEffect, useState } from 'react';
import HireDriverRow from './HireDriverRow';

const HiredDriverTable = () => {
    const [drivers, setDrivers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3001/hired/drivers')
            .then(res => res.json())
            .then(data => setDrivers(data));

    }, [])

    return (
        <div className="overflow-x-auto mt-10 mb-10">
            <table className="table">
                {/* head */}
                <thead>
                    <tr className='text-sm'>
                        <th></th>
                        <th>Start Date</th>
                        <th>Days</th>
                        <th>Payment</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        drivers.map(driver => <HireDriverRow
                            key={driver.driver_id}
                            driver={driver}

                        ></HireDriverRow>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default HiredDriverTable;