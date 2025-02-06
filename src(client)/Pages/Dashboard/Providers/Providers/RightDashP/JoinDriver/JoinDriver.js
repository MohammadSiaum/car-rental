import React from 'react';
import { toast } from 'react-hot-toast';

const JoinDriver = () => {

    const handleAddDriver = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const address = form.address.value;
        const phone = form.phone.value;
        const licence = form.licence.value;
        const experience = form.experience.value;

        // console.log(name, email, address, phone, licence, experience);

        const driver = {
            provider_id: localStorage.getItem('user-id'),
            name,
            email,
            address,
            license_number: licence,
            phone,
            experience,
            availability: 'available',
            rating: '4'

        }


        fetch('http://localhost:3001/drivers/add', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',

            },
            body: JSON.stringify(driver)
        })
            .then(res => res.json())
            .then(data => {

            })
            .catch(er => console.error(er));
        
        form.reset();
        toast.success("Successfully join driver..");
        
    }
    return (
        <div className='mt-3 ms-3 mb-4'>
            <form onSubmit={handleAddDriver}>
                <div className='grid grid-cols-2 gap-x-4'>
                    <div className='space-y-2'>
                        <div className="form-control">
                            <label className='label'>
                                <span className="label-text font-semibold">Name</span>
                            </label>
                            <input name='name' type="text" placeholder="Name" className="bg-violet-100 input input-bordered input-accent w-full max-w-xs" required/>
                        </div>
                        <div className="form-control">
                            <label className='label'>
                                <span className="label-text font-semibold">Email</span>
                            </label>
                            <input name='email' type="text" placeholder="Email" className="bg-violet-100 input input-bordered input-accent w-full max-w-xs" required/>
                        </div>
                        <div className="form-control">
                            <label className='label'>
                                <span className="label-text font-semibold">Present Address</span>
                            </label>
                            <input name='address' type="text" placeholder="Present Address" className="bg-violet-100 input input-bordered input-accent w-full max-w-xs" required/>
                        </div>

                    </div>
                    <div className='space-y-2'>
                        <div className="form-control">
                            <label className='label'>
                                <span className="label-text font-semibold">Contact Number</span>
                            </label>
                            <input name='phone' type="text" placeholder="Contact Number" className="bg-violet-100 input input-bordered input-accent w-full max-w-xs" required/>
                        </div>
                        <div className="form-control">
                            <label className='label'>
                                <span className="label-text font-semibold">Licence Number</span>
                            </label>
                            <input name='licence' type="text" placeholder="Licence Number" className="bg-violet-100 input input-bordered input-accent w-full max-w-xs" required/>
                        </div>
                        <div className="form-control">
                            <label className='label'>
                                <span className="label-text font-semibold">Experience</span>
                            </label>
                            <input name='experience' type="text" placeholder="Experience" className="bg-violet-100 input input-bordered input-accent w-full max-w-xs" required/>
                        </div>
                        <div className="form-control pt-3">
                            <input className="btn text-white bg-gradient-to-r from-violet-600 from-15%  to-fuchsia-900 to-90% hover:from-violet-700 hover:to-fuchsia-900 w-1/3 max-w-xs" type="submit" value="Set Profile" />
                        </div>

                    </div>
                </div>

            </form>
        </div>
    );
};

export default JoinDriver;