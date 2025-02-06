import React, { useEffect, useState } from 'react';
import ListDriverRow from './ListDriverRow';

const ListDriverTable = () => {
    const [drivers, setDrivers] = useState([]);
    const user_id_string = localStorage.getItem('user-id');
    const user_id = parseInt(user_id_string);
    let count = 1;

    useEffect(() => {
        fetch('http://localhost:3001/drivers')
            .then(res => res.json())
            .then(data => {
                setDrivers(data);
                      
            })

    }, []);

    const listedDrivers = drivers.filter(driver => driver.provider_id === user_id);

    return (
        <div className="overflow-x-auto mt-10 mb-10">
            <table className="table">
                
                <thead>
                    <tr className='text-sm'>
                        <th></th>
                        <th>Name</th>
                        <th>Licence</th>
                        <th>Experience</th>
                        <th>Present Address</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                    {
                        listedDrivers.map(driver => <ListDriverRow
                        key={driver.driver_id}
                        driver={driver}
                        count={count++}
                        >
                        </ListDriverRow>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ListDriverTable;