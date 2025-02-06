import React from 'react';
import { toast } from 'react-hot-toast';

const ListCarRow = ({ listed }) => {
    const { car_id, model, seating_capacity, rating, rent_price, availability } = listed;

    const handleDeleteCar = () => {

        if (availability === 'available') {
            const proceed = window.confirm('Are you sure ?');
            if (proceed) {
                fetch(`http://localhost:3001/delete/car/${car_id}`, {
                    method: 'DELETE',
                    headers: {

                    }
                })
                    .then(res => res.json())
                    .then(data => { })

            }

        }
        else {
            toast.error('It is already booked. You can not delete it');
        }

    }

    return (
        <tr className='text-base text-blue-950 font-medium'>
            <th>{model}</th>
            <td>{seating_capacity}</td>
            <td>{rent_price}</td>
            <td>
                <button className="btn btn-ghost text-white bg-green-500 btn-xs">Update</button>
            </td>
            <td>
                <button onClick={handleDeleteCar} className="btn btn-ghost text-white bg-red-500 btn-xs">delete</button>
            </td>
        </tr>
    );
};

export default ListCarRow;