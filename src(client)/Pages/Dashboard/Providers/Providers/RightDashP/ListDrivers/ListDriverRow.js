import React from 'react';
import { toast } from 'react-hot-toast';

const ListDriverRow = ({driver, count}) => {
    const {name, email, driver_id, address, phone, licence, experience,availability} = driver;
    

    const handleDeleteDriver = () => {

        if (availability === 'available') {
            const proceed = window.confirm('Are you sure ?');
            if (proceed) {
                fetch(`http://localhost:3001/delete/driver/${driver_id}`, {
                    method: 'DELETE',
                    headers: {

                    }
                })
                    .then(res => res.json())
                    .then(data => { })

            }

        }
        else {
            toast.error('You are running now !');
        }

    }
    
    return (
        <tr className='text-base text-blue-950 font-medium'>
            <td>{count}</td>
            <th>{name}</th>
            <td>{licence}</td>
            <td>{experience}</td>
            <td>{address}</td>
            <td>
                <button className="btn btn-ghost text-white bg-green-500 btn-xs">Update</button>
            </td>
            <td>
                <button onClick={handleDeleteDriver} className="btn btn-ghost text-white bg-red-500 btn-xs">delete</button>
            </td>
        </tr>
    );
};

export default ListDriverRow;