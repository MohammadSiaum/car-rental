import React from 'react';

const CarBookRow = ({ car }) => {
    const { days, start_date, car_booking_id, car_id } = car;
    const handleCompleted = () => {
        const proceed = window.confirm('Are you sure, you complete it?');
        if (proceed) {
            fetch(`http://localhost:3001/delete/car-booking/${car_booking_id}`, {
                method: 'DELETE',
                headers: {

                }
            })
                .then(res => res.json())
                .then(data => { })





            // update

            const carUp = {
                car_id,
                availability: 'available'

            }

            fetch('http://localhost:3001/car/update', {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json',

                },
                body: JSON.stringify(carUp)
            })
                .then(res => res.json())
                .then(data => {

                })
                .catch(er => console.error(er));

            

        }

    }
    return (
        <tr className='text-base text-blue-950 font-medium'>
            <th></th>
            <td>{start_date}</td>
            <td>{days}</td>
            <td>pending</td>
            <td>
                <button onClick={handleCompleted} className=" btn btn-ghost text-white bg-green-500 btn-xs">Complete</button>
            </td>

        </tr>
    );
};

export default CarBookRow;