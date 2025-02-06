import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { BsFacebook, BsGithub } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import loginImg from '../assets/images/login/login.svg'
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import { Toaster, toast } from 'react-hot-toast';




const Login = () => {
    
    const { logInWithEmail } = useContext(AuthContext);
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
    // console.log(users);


    const userId = (userEmail) => {
        let i ;
        for (i=0; i<users.length; i++ ) {
            if(users[i].email === userEmail) {
                console.log(users[i].user_id);
                const user_id = users[i].user_id
                localStorage.setItem('user-id', user_id);
                return users[i].user_id;
            }

        }
    }


    const userType = (userEmail) => {
        let j ;
        for (j=0; j<users.length; j++ ) {
            if(users[j].email === userEmail) {
                // console.log(users[i].role);
                return users[j].role;
            }
        }
    }

    
    
    const handleSignIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);


        if(userType(email) === userRole) {

            logInWithEmail(email, password)
            .then(result => {
                const user = result.user;
                // console.log(user);
                
                // console.log(user.email);
                userId(user.email);
                
                localStorage.setItem('user-type', userRole);
                result.user.displayName = userRole;
                


                navigate(from, { replace: true });
                form.reset();
                toast.success('Successfully login.');




            })
            .catch(err => {
                console.error(err)
                toast.error('Password incorrect !');
            
            });
        }
        else {
            toast.error('Wrong user ! Try again..');
        }

    }
    


    const handleOption = event => {
        const role = event.target.value;
        userRole = role;
        // console.log(userRole);
    }



    const icons = <>

        <BsFacebook></BsFacebook>
        <BsGithub></BsGithub>
        <FcGoogle></FcGoogle>

    </>
    return (
        <div className="hero my-32">
            <div className="hero-content grid md:grid-cols-2 gap-x-56">
                <div className="text-center lg:text-left">
                    <img src={loginImg} alt="" />
                </div>

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 flex justify-end p-3">

                    <form onSubmit={handleSignIn} className="card-body">
                        <h1 className="text-4xl font-bold text-red-500 text-center">Log In</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Option Select</span>
                            </label>
                            <select onChange={handleOption} className="select select-bordered ">
                                <option disabled selected>Select one</option>
                                <option value='seeker'>Seeker</option>
                                <option value='provider'>Provider</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Password" className="input input-bordered" required />
                            <label className="label">
                                <Link to='/forget-pass' className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn text-white bg-red-500 hover hover:bg-gray-800" type="submit" value="login" />
                        </div>
                        <div className='text-center mt-2'>
                            <p className='text-sm font-semibold text-gray-500'>Or Sign In with</p>
                            <p className='flex justify-center gap-3 my-4'>
                                <BsFacebook className='text-3xl text-blue-600 cursor-pointer'></BsFacebook>
                                <BsGithub className='text-3xl text-gray-800 cursor-pointer'></BsGithub>
                                <FcGoogle className='text-3xl cursor-pointer'></FcGoogle>
                            </p>
                            <p className='text-sm font-semibold text-gray-500'>Create an account? <Link to='/register' className='text-base text-red-500 font-semibold hover:underline'>Register</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;