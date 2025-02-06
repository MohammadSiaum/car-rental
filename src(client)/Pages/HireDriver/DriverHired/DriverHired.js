import React from 'react';
import { toast } from 'react-hot-toast';

const DriverHired = () => {

    const handleHireDriver = (event) => {

        event.preventDefault();
        const form = event.target;
        const seeker_id = localStorage.getItem('user-id');
        const driver_id = localStorage.getItem('driver-id');
        const days = form.day.value;
        const start_time = form.startTime.value;

        // console.log(seeker_id, driver_id, days, start_time);
        const driverUp = {
            driver_id,
            availability: 'unavailable'
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




        const hire = {
            seeker_id,
            driver_id,
            days,
            start_time
        }
        // console.log(hire);

        fetch('http://localhost:3001/driver/hire', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',

            },
            body: JSON.stringify(hire)
        })
            .then(res => res.json())
            .then(data => {

            })
            .catch(er => console.error(er));

        form.reset();
        toast.success("Successfully hire driver..");
        localStorage.removeItem('driver-id');


    }
    return (
        <div className='mt-5 ms-3 mb-4'>
            <form onSubmit={handleHireDriver}>

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
                        <input className="btn text-white bg-gradient-to-r from-violet-600 from-15%  to-fuchsia-900 to-90% hover:from-violet-700 hover:to-fuchsia-900 w-1/3 max-w-xs" type="submit" value="Hire Driver" />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default DriverHired;