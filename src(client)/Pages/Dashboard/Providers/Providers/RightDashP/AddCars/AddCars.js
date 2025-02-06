import React from 'react';
import { toast } from 'react-hot-toast';

const AddCars = () => {

    const handleAddCar = event => {
        event.preventDefault();
        const form = event.target;

        const carMod = form.carModel.value;
        const seatCap = form.seatCapacity.value;
        const price = form.price.value;
        const mileage = form.mileage.value;
        const asetCond = form.asetCondition.value;
        const oil = form.oil.value;

        const car = {
            provider_id: localStorage.getItem('user-id'),
            model: carMod,
            seating_capacity: seatCap,
            rent_price: price,
            mileage,
            aesthetic_conditin: asetCond,
            availability: 'available',
            oil_type: oil,
            rating: '4'

        }

        fetch('http://localhost:3001/cars/add', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',

            },
            body: JSON.stringify(car)
        })
            .then(res => res.json())
            .then(data => {

            })
            .catch(er => console.error(er));
        
        form.reset();
        toast.success("Successfully added car..");


    }
    return (
        <div className='mt-2 ms-3 mb-4'>
            <form onSubmit={handleAddCar}>
                <div className='grid grid-cols-2 gap-x-4'>
                    <div className='space-y-2'>
                        <div className="form-control">
                            <label className='label'>
                                <span className="label-text font-semibold">Car-Model</span>
                            </label>
                            <input name='carModel' type="name" placeholder="Car Model" className="bg-violet-100 input input-bordered input-accent w-full max-w-xs" required/>
                        </div>
                        <div className="form-control">
                            <label className='label'>
                                <span className="label-text font-semibold">Seating Capacity</span>
                            </label>
                            <input name='seatCapacity' type="number" placeholder="Seating Capacity" className="bg-violet-100 input input-bordered input-accent w-full max-w-xs" required/>
                        </div>
                        <div className="form-control">
                            <label className='label'>
                                <span className="label-text font-semibold">Rental Price (24 hours or Day)</span>
                            </label>
                            <input name='price' type="number" placeholder="Rental Price" className="bg-violet-100 input input-bordered input-accent w-full max-w-xs" required/>
                        </div>

                    </div>
                    <div className='space-y-2'>
                        <div className="form-control">
                            <label className='label'>
                                <span className="label-text font-semibold">Mileage (yearly)</span>
                            </label>
                            <input name='mileage' type="text" placeholder="Mileage" className="bg-violet-100 input input-bordered input-accent w-full max-w-xs" />
                        </div>
                        <div className="form-control">
                            <label className='label'>
                                <span className="label-text font-semibold">Aesthetic Condition</span>
                            </label>
                            <input name='asetCondition' type="text" placeholder="Aesthetic Condition" className="bg-violet-100 input input-bordered input-accent w-full max-w-xs" />
                        </div>
                        <div className="form-control">
                            <label className='label'>
                                <span className="label-text font-semibold">Oil Type</span>
                            </label>
                            <input name='oil' type="text" placeholder="oil_type" className="bg-violet-100 input input-bordered input-accent w-full max-w-xs" />
                        </div>
                        <div className="form-control pt-3">
                            <input className="btn text-white bg-gradient-to-r from-violet-600 from-15%  to-fuchsia-900 to-90% hover:from-violet-700 hover:to-fuchsia-900 w-1/3 max-w-xs" type="submit" value="Add Car" />

                        </div>

                    </div>
                </div>

            </form>
        </div>
    );
};

export default AddCars;