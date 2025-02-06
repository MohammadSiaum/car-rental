import React, { useEffect, useState } from 'react';
import CarRow from './CarRow';


const CarTable = () => {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3001/cars')
          .then(res => res.json())
          .then(data => setCars(data));
    }, [])


    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr className='text-sm'>

                        <th>Model</th>
                        <th>Seating capacity</th>
                        <th>Rent price (24 hr)</th>
                        <th>Rating (5*)</th>
            
                    </tr>
                </thead>
                <tbody>
                      {
                        cars.map(car => <CarRow
                           key={car.car_id}
                           car={car}
                        ></CarRow>)
                      }
                </tbody>


            </table>
        </div>
    );
};

export default CarTable;