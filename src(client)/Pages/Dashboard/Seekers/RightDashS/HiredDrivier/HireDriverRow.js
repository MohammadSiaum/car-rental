import React from 'react';

const HireDriverRow = ({ driver }) => {
    const { days, start_date, hired_id , driver_id} = driver;
    const handleCompleted = () => {
        console.log(driver);
        const proceed = window.confirm('Are you sure, you complete it?');
        if (proceed) {
            fetch(`http://localhost:3001/delete/driver-hire/${hired_id}`, {
                method: 'DELETE',
                headers: {

                }
            })
                .then(res => res.json())
                .then(data => { })




            // update
            const driverUp = {
                driver_id,
                availability: 'available'
            }


            // update
            fetch('http://localhost:3001/driver/update', {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json',

                },
                body: JSON.stringify(driverUp)
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

export default HireDriverRow;