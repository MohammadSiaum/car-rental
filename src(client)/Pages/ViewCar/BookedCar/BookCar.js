import React from 'react';
import { toast } from 'react-hot-toast';

const BookCar = () => {
    const handleBookCar = (event) => {
        event.preventDefault();
        const form = event.target;
        const seeker_id = localStorage.getItem('user-id');
        const car_id = localStorage.getItem('car_id');
        const days = form.day.value;
        const start_time = form.startTime.value;

        console.log(seeker_id, car_id, days, start_time);


        const carUp = {
            car_id,
            availability: 'unavailable'

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


            const book = {
                seeker_id,
                car_id,
                days,
                start_time
            }
            // console.log(hire);
    
            fetch('http://localhost:3001/car/booking', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
    
                },
                body: JSON.stringify(book)
            })
                .then(res => res.json())
                .then(data => {
    
                })
                .catch(er => console.error(er));

                form.reset();
                toast.success("Successfully booked car..");
                localStorage.removeItem('car-id');

    }
    return (
        <div className='mt-5 ms-3 mb-4'>
            <form onSubmit={handleBookCar}>

                <div className='space-y-2'>
                    <div className="form-control">
                        <label className='label'>
                            <span className="label-text font-semibold">Days</span>
                        </label>
                        <input name='day' type="day" placeholder="Days" className="bg-violet-100 input input-bordered input-accent w-full max-w-xs" required />
                    </div>
                    <div className="form-control">
                        <label className='label'>
                            <span className="label-text font-semibold">Start time</span>
                        </label>
                        <input name='startTime' type="date" placeholder="start date" className="bg-violet-100 input input-bordered input-accent w-full max-w-xs" required />
                    </div>
                    <div className="form-control pt-3">
                        <input className="btn text-white bg-gradient-to-r from-violet-600 from-15%  to-fuchsia-900 to-90% hover:from-violet-700 hover:to-fuchsia-900 w-1/3 max-w-xs" type="submit" value="Book Car" />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default BookCar;