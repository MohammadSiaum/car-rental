import React, { useEffect, useState } from 'react';
import SeekerCarRow from './SeekerCarRow';


const SeekerCarTable = () => {

    const [cars, setCars] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3001/cars')
            .then(res => res.json())
            .then(data => setCars(data));
    }, [])
    return (
        <div className="overflow-x-auto">
            <table className="table">
                <thead>
                    <tr className='text-sm'>

                        <th>Model</th>
                        <th>Seating capacity</th>
                        <th>Rent price (24 hr)</th>
                        <th>Rating (5*)</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cars.map(car => <SeekerCarRow
                            key={car.car_id}
                            car={car}
                        ></SeekerCarRow>)
                    }
                </tbody>


            </table>
        </div>
    );
};

export default SeekerCarTable;