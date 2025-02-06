import React, { useEffect, useState } from 'react';

const Cards = () => {
    const [totalCars, setTotalCars] = useState(0);
    //const carsTotal = totalCars[0].total_cars;
    const [totalDrivers, setTotalDrivers] = useState(0);
    //const driversTotal = totalDrivers[0].total_drivers;

    useEffect(() => {
        fetch('http://localhost:3001/cars-count')
            .then(res => res.json())
            .then(data => {
                setTotalCars(data[0].total_cars);
                //    console.log(data);
            });
    }, []);

    useEffect(() => {
        fetch('http://localhost:3001/drivers-count')
            .then(res => res.json())
            .then(data => setTotalDrivers(data[0].total_drivers));
    }, []);
    // console.log(totalCars);

    return (
        <div className='pt-20 pb-20 mt-20 mb-20 bg-gradient-to-r from-violet-100 from-15%  to-emerald-100 to-90%'>
            <div className='max-w-screen-xl mx-auto'>
                <h2 className='mb-20 text-3xl font-semibold text-center text-blue-950'>Do you need a Car? or with driver !
                    <br />
                    Or join as a Driver.

                </h2>
                <div className='grid grid-cols-2 md:grid-cols-4 justify-items-between gap-24'>
                    <div className='grid col-span-3'>
                        <div className='grid grid-cols-3 justify-items-stretch gap-24 '>
                            <div className='grid place-items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 shadow-xl bg-gradient-to-r from-violet-400 to-pink-300 duration-300 cursor-pointer box-content h-32 w-40 p-4 border-2 border-red-300 rounded-lg text-center'>
                                <div className='space-y-4 text-blue-950'>
                                    <h1 className='text-4xl font-semibold'>{totalCars}</h1>
                                    <h1 className='text-lg font-semibold'>Available Cars</h1>
                                </div>
                            </div>
                            <div className='grid place-items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 shadow-xl bg-gradient-to-r from-violet-400 to-pink-300 duration-300 cursor-pointer box-content h-32 w-40 p-4 border-2 border-red-300 rounded-lg text-center'>
                                <div className='space-y-4 text-blue-950'>
                                    <h1 className='text-4xl font-semibold'>{totalDrivers}</h1>
                                    <h1 className='text-lg font-semibold'>Ready Driver </h1>
                                </div>
                            </div>
                            <div className='grid place-items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 shadow-xl bg-gradient-to-r from-violet-400 to-pink-300 duration-300 cursor-pointer box-content h-32 w-40 p-4 border-2 border-red-300 rounded-lg text-center'>
                                <div className='space-y-4 text-blue-950'>
                                    <h1 className='text-4xl font-semibold'>23</h1>
                                    <h1 className='text-lg font-semibold'>Total Providers</h1>
                                </div>
                            </div>

                        </div>
                        <div className='mt-14 font-semibold space-y-2 text-violet-900 text-base'>
                            <h2>You can rent a car or more.</h2>
                            <h2>Or, you can book a car or more on demand.</h2>
                            <h2>Or, you can hire a driver as your car partner on demand.</h2>
                            <h2>Or, you can join as a driver</h2>

                        </div>
                    </div>
                    <div>
                        <div className='grid place-items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 shadow-xl bg-gradient-to-r from-violet-400 to-pink-300 duration-300 cursor-pointer box-content h-72 w-52 p-4 border-2 border-red-300 rounded-lg text-center'>
                            <div className='space-y-4 text-blue-950'>
                                <h1 className='text-xl font-semibold'>Premium</h1>
                                <h1 className='text-base font-semibold'>Join as a Primium member</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cards;