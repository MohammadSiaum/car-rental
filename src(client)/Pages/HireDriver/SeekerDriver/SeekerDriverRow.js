import React from 'react';
import { Link } from 'react-router-dom';

const SeekerDriverRow = ({ driver, }) => {
    const { name, experience, address, rating, availability, driver_id } = driver;

    const handleHireDriver = () => {
        const confirm = window.confirm('Name : ' + name + '\nExpericenc : ' + experience + '\nRating : ' + rating);

        if (confirm) {
            // const name = prompt("Please enter your name : ");
            localStorage.setItem('driver-id', driver_id);


        }
    }
    if (availability === 'available') {
        return (
            <tr className='text-base text-blue-950 font-medium'>
                <th></th>
                <td>{name}</td>
                <td>{experience}</td>
                <td>{address}</td>
                <td>{rating}*</td>
                <td>
                    <Link to='../driver-hire'><button onClick={handleHireDriver} className=" btn btn-ghost text-white bg-fuchsia-700 btn-xs">Hire</button></Link>
                </td>
            </tr>
        );
    }
};

export default SeekerDriverRow;