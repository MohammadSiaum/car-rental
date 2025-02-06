import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import './Header.css';

const Header = () => {
    let user_type = `${localStorage.getItem('user-type')}`;
    
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(result => { })
            .catch(err => { })
    }


    const menuItems = <>
        <li className='font-semibold'><Link to='/'>Home</Link></li>
        <li className='font-semibold'><Link to='/available-car'>Available Car</Link></li>
        <li className='font-semibold'><Link to='/hire-driver'>Hire Driver</Link></li>
        <li className='font-semibold'><Link to='/about_us'>About</Link></li>


    </>

    const submitItems = <>
        {
            user?.uid ?
                <>
                    <ul className="me-3 menu menu-horizontal px-1 text-base text-blue-950 font-medium">
                        {
                            user_type === 'seeker' ?
                                <li className='font-semibold'><Link to='/seekers-dashboard'>Dashboard</Link></li>
                                :
                                <li className='font-semibold'><Link to='/provider-dashboard'>Dashboard</Link></li>
                        }
                    </ul>

                    <Link onClick={handleLogOut} className="btn btn-neutral" to='/'>Log Out</Link>
                </>
                :
                <>
                    <Link className="btn btn-neutral me-3" to='/register'>Register</Link>
                    <Link className="btn btn-neutral" to='/login'>Login</Link>
                </>

        }

    </>




    return (
        <div className='sticky top-0 overflow-hidden navbar-car-rental'>
            <div className="navbar max-w-screen-xl mx-auto bg-gradient-to-r from-violet-300 from-15%  to-emerald-300 to-90%">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <Link className="btn btn-ghost normal-case text-fuchsia-900 text-2xl">Car Rental</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-base text-blue-950 font-medium">
                        {menuItems}
                    </ul>
                </div>
                <div className="navbar-end">{submitItems}</div>
            </div>
        </div>
    );
};

export default Header;