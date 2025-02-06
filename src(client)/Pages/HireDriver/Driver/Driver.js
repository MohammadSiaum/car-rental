import React, { useEffect, useState } from 'react';
import DriverRow from './DriverRow';

const Driver = () => {
    let count = 1;
    const [drivers, setDrivers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3001/drivers')
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
                        <th>Name</th>
                        <th>Experience</th>
                        <th>Present Address</th>
                        <th>Rating( 5* )</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        drivers.map(driver => <DriverRow
                            key={driver.driver_id}
                            driver={driver}

                        ></DriverRow>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Driver;