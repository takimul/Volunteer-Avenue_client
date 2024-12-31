import { Link, NavLink } from "react-router-dom";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { useContext } from "react";
import { AuthContext } from './../AuthProvider/AuthProvider';
import Loading from "./Loading";
import logo from '../assets/images/logo.png';

const Navbar = () => {

    const { user, logOut, loading } = useContext(AuthContext);

    const links = [
        {
            path: '/',
            name: 'Home',
        },
        {
            path: '/need-volunteer',
            name: 'Need Volunteer',
        },
        {
            path: `/about-us`,
            name: 'About Us',
        },
        {
            path: `/contact-us`,
            name: 'Contact',
        },
    ]

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div className="w-full bg-base-200 text-black">
            <div className="navbar text-sm sm:max-w-7xl sm:mx-auto sm:py-5">
                <div className="navbar-start">
                    <div className="dropdown z-50">
                        <div tabIndex={0} role="button" className="md:btn btn btn-sm md:btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu p-5 text-black space-y-2 menu-sm dropdown-content mt-3 z-[1] shadow bg-base-100 rounded-box w-52">
                            {
                                links.map((link, idx) => <NavLink className="px-4 py-2 rounded-lg bg-slate-200" key={idx} to={link.path}>{link.name}</NavLink>)
                            }
                        </ul>
                    </div>
                    <Link to={'/'} className="sm:text-2xl text-lg flex items-center gap-2 font-bold">
                        <div className="w-12"><img src={logo} alt="" /></div>
                        <h1 className=" border-l-2 border-black pl-2 text-sm md:text-2xl">
                            Volunteer Avenue
                        </h1>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-6 z-50 font-semibold">
                        {
                            links.map((link, idx) => <NavLink
                                className={({ isActive }) => isActive ? 'border-b-2 border-slate-600 py-1 px-2' : 'py-1 px-2'}
                                key={idx} to={link.path}>{link.name}</NavLink>)
                        }
                    </ul>
                </div>
                <div className="navbar-end space-x-4">
                    <div className="rounded-full border border-white">
                        {
                            user &&
                            <div className="dropdown dropdown-hover">
                                <div tabIndex={0} role="button">
                                    <img className="h-12 w-12 rounded-full" src={user?.photoURL} alt="" />
                                </div>
                                <ul tabIndex={0} className="dropdown-content menu text-center space-y-2 bg-base-100 rounded-box z-10 p-6 shadow">
                                    <li className="font-semibold">{user?.displayName}</li>
                                    <li className="font-semibold">{user?.email}</li>
                                    <Link onClick={logOut} className="btn btn-sm md:btn bg-red-500 text-white">Log Out</Link>
                                </ul>
                            </div>


                        }

                    </div>

                    {
                        user ?
                            <>

                                <div className="dropdown dropdown-bottom dropdown-end">
                                    <div tabIndex={0} role="button" className="btn btn-sm md:btn m-1">My Profile <IoIosArrowDropdownCircle></IoIosArrowDropdownCircle></div>
                                    <ul tabIndex={0} className="dropdown-content z-50 menu  shadow bg-base-100 rounded-box w-52 p-3 space-y-2">
                                        <Link to={'/add-volunteer'} className="btn btn-sm md:btn">Add Volunteer Post</Link>
                                        <Link to={'/manage-my-post/my-need-volunteer-post'} className="btn btn-sm md:btn">Manage My Post</Link>
                                    </ul>
                                </div>


                            </>
                            :
                            <>
                                <Link to={'/login'} className="btn btn-sm md:btn bg-stone-200 shadow-md">Login</Link>
                                <Link to={'/register'} className="btn btn-sm md:btn bg-blue-200 md:bg-blue-50 shadow-md">Register</Link>
                            </>
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;