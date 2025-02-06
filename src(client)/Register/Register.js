import React, { useContext, useEffect, useState } from 'react';
import loginImg from '../assets/images/login/login.svg';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';

import { BsFacebook, BsGithub } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';
    let userRole = '';

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/users')
            .then(res => res.json())
            .then(data => setUsers(data));
    }, [])

    const userId = (userEmail) => {
        let i;
        for (i = 0; i < users.length; i++) {
            if (users[i].email === userEmail) {
                console.log(users[i].user_id);
                const user_id = users[i].user_id
                localStorage.setItem('user-id', user_id);
                return users[i].user_id;
            }

        }
    }

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const email = form.email.value;
        const phone = form.contact.value;
        const role = userRole;
        const password = form.password.value;
        // console.log(name, email, phone, role, password);

        const user = {
            user_name: name,
            email: email,
            phone: phone,
            role: role,
            user_password: password

        }

        // console.log(user);

        fetch('http://localhost:3001/user/insert', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',

            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {

            })
            .catch(er => console.error(er));



        createUser(email, password)
            .then(result => {
                const user = result.user;
                //   console.log(user);

                userId(user.email);

                localStorage.setItem('user-type', userRole);
                navigate(from, { replace: true });
                form.reset();
                toast.success("Registration successfully..");

            })
            .catch(err => {
                // console.error(err)
                toast.error("Password must be at least 6 character !");

            });

    }

    const handleOption = event => {
        const role = event.target.value;
        userRole = role;
    }

    return (
        <div className="hero my-28">
            <div className="hero-content w-full">


                <div className="card flex-shrink-0 w-2/5 shadow-2xl bg-base-100">

                    <form onSubmit={handleRegister} className="card-body">
                        <h1 className="text-4xl font-bold text-fuchsia-900 text-center">Register</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Email" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Contact Number</span>
                            </label>
                            <input type="contact" name='contact' placeholder="+088 01xxxxxxx" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Role (seeker or provider)</span>
                            </label>
                            <select onChange={handleOption} className="select select-bordered " >
                                <option disabled selected>Select one</option>
                                <option value='seeker'>Seeker</option>
                                <option value='provider'>Provider</option>
                            </select>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Comfirm password</span>
                            </label>
                            <input type="password" name='password' placeholder="Password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn text-white bg-fuchsia-900 hover hover:bg-gray-800" type="submit" value="Register" />
                        </div>
                        <div className='text-center mt-2'>
                            <p className='text-sm font-semibold text-gray-500'>Or Sign Up with</p>
                            <p className='flex justify-center gap-3 my-4'>
                                <BsFacebook className='text-3xl text-blue-600 cursor-pointer'></BsFacebook>
                                <BsGithub className='text-3xl text-gray-800 cursor-pointer'></BsGithub>
                                <FcGoogle className='text-3xl cursor-pointer'></FcGoogle>
                            </p>
                            <p className='text-sm font-semibold text-gray-500'>Already have an account? <Link to='/login' className='text-fuchsia-900 text-base font-semibold hover:underline'>Login</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;