import React, { useEffect, useState } from 'react';
import ListCarRow from './ListCarRow';

const ListCarTable = () => {
    const [cars, setCars] = useState([]);
    const user_id_string = localStorage.getItem('user-id');
    const user_id = parseInt(user_id_string);
    let count = 1;
    

    /* const ListedCars = () => {
        
        let l;
        for(l = 0; l<cars.length; l++) {
            if(cars.provider_id == user_id) {
                // setListCars(...cars[l]);
                console.log(cars[l]);
            }
        }
    } */

    useEffect(() => {
        fetch('http://localhost:3001/cars')
            .then(res => res.json())
            .then(data => {
                setCars(data);
                // console.log(data);
                /* const listed = cars.filter(car => car.provider_id !== user_id);
                setListCars(listed); */
                
                     
            })
    }, []);
    // console.log(cars);
    const listedCars = cars.filter(car => car.provider_id === user_id);
    


    /* const lists = cars.filter(car => car.provider_id == user_id);
    setListCars(...lists); */





    // console.log(listCars)


    return (
        <div className="overflow-x-auto mt-10 mb-10">
            <table className="table">
                {/* head */}
                <thead>
                    <tr className='text-sm'>
                        <th>Model</th>
                        <th>Seating capacity</th>
                        <th>Rent price (24 hr)</th>
                        <th>Update</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        listedCars.map(listed => <ListCarRow
                        key={listed.car_id}
                        listed={listed}
                        count={count++}
                        
                        ></ListCarRow>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ListCarTable;