import React from 'react';
import rentCar from '../../../assets/images/rent-car/car-rent.jpeg';
import { Link } from 'react-router-dom';


const SeekerCarRow = ({ car }) => {
    const { car_id, model, seating_capacity, rating, rent_price, availability } = car;

    const handleBook = () => {
        const confirm = window.confirm('Model : ' + model + '\nSeating capacity : ' + seating_capacity + '\nPrice : ' + rent_price);

        if (confirm) {
            // const name = prompt("Please enter your name : ");
            localStorage.setItem('car_id', car_id);


        }
    }

    if (availability === 'available') {
        return (
            <tr className='text-base text-blue-950 font-medium'>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={rentCar} alt="rent-Car" />
                            </div>
                        </div>
                        <div>
                            <div className="">{model}</div>
                            <div className="text-sm opacity-50">provider</div>
                        </div>
                    </div>
                </td>
                <td className=''>{seating_capacity}</td>
                <td className=''>{rent_price}/-</td>
                <td className=''>{rating}*</td>
                <th>
                    <Link to='../book-car'><button onClick={handleBook} className="btn btn-ghost text-white bg-fuchsia-800 btn-xs">Book</button></Link>
                </th>
            </tr>
        );
    }
};

export default SeekerCarRow;