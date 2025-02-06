import React from 'react';
import HireDriver from '../HireDriver';
import { Link } from 'react-router-dom';

const DriverRow = ({ driver}) => {

    const { name, experience, address, rating, availability, driver_id } = driver;
    

    if(availability === 'available') {
        return (
            <tr className='text-base text-blue-950 font-medium'>
                <th></th>
                <td>{name}</td>
                <td>{experience}</td>
                <td>{address}</td>
                <td>{rating}*</td>
                
            </tr>
        );
    }
};

export default DriverRow;