import React, { useEffect, useState } from 'react';
import CarBookRow from './CarBookRow';

const CarBookTable = () => {

    const [cars, setCars] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3001/booked/cars')
            .then(res => res.json())
            .then(data => setCars(data));

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
                        cars.map(car => <CarBookRow
                            key={car.car_id}
                            car={car}

                        ></CarBookRow>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default CarBookTable;