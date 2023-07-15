import { Link } from "react-router-dom";
import { useState } from "react";
import { FaRegTimesCircle } from "react-icons/fa"
import { HiMenuAlt3 } from "react-icons/hi"


const Navbar = () => {
    const [open, setOpen] = useState(false);

    const navLinks = [
        {id: 1, name: "Home", route: "/"},
        {id: 2, name: "Shop", route: "/shop"},
        {id: 3, name: "About", route: "/about"},
        // {id: 4, name: "Login", route: "/login"},
        // {id: 5, name: "Signup", route: "/signup"},
        // {id: 1, name: "Profile", route: "/farmersprofile"},
        // {id: 2, name:"My Crops", route: "/mycrops"},
        // {id: 3, name: "My records", route: "/myrecords"},
        // {id: 5, name: "Farmers Market", route: "/farmproduce"},
        // {id: 6, name: "Farming History", route: "/farminghistory"},
    ]

    return ( 
        <>
            <nav className="md:px-24 px-4 md:py-6 py-5 top-0 left-0 sticky z-[100] bg-green-600 shadow-xl"> 
                <div className="md:flex justify-between items-center">
                    <div className="flex justify-between items-center">
                        <Link to='/' className="flex items-center justify-center    ">
                            <div className="md:w-48 w-32 uppercase font-semibold md:text-xl">
                                Limma 
                            </div>
                        </Link>
                        <button onClick={() => setOpen((prev) => !prev)} className=' sm:hidden text-2xl text-gray-900'>
                            { !open ? <HiMenuAlt3 /> : <FaRegTimesCircle className="text-gray-200"/>}
                        </button>
                    </div>

                    <div className='md:flex hidden text-green-100'>
                        <ul className="md:flex items-center font-medium lg:space-x-6 md:space-x-4 uppercase">
                            {navLinks.map((nav) => (
                                <li key={nav.id} className="navlink md:my-0 my-2 ">
                                    <Link to={nav.route}>
                                        {nav.name}
                                    </Link>
                                </li>
                            ))}
                            <div className="relative ">
                                <button className="uppercase" onClick={() => setOpen(!open)}>Account</button>
                                {open ? (
                                    <ul className="menu absolute p-0 w-24 rounded-md bg-white text-green-600 shadow-md text-left">
                                    <li className="hover:bg-green-200 text-gray-700 tracking-wide rounded-t-md">
                                        <Link className="w-[100%] text-inherit p-2 cursor-pointer bg-none" to='/login'>Login</Link>
                                    </li>
                                    <li className="hover:bg-green-200 text-gray-700 tracking-wide rounded-b-md">
                                        <Link className="w-[100%] text-inherit p-2 cursor-pointer bg-none" to='/signup'>Signup</Link>
                                    </li>
                                    </ul>
                                ) : null}
                            </div>
                        </ul>
                    </div>
                </div>

                {/* mobile-version */}
                <div className={`${open ? "left-0 " : "left-[-100%]"} z-[100] sm:hidden absolute top-0 right-0 space-y-8 py-6 px-8 w-[80%] min-h-screen duration-300 ease-in-out bg-green-700 opacity-90`}>
                    <ul className="flex flex-col text-base font-medium space-y-8 text-gray-200">
                        {navLinks.map((nav) => (
                            <li key={nav.id} onClick={() => setOpen((prev) => !prev)} className="navlink md:mx-4 mx-2 md:my-0 my-2 uppercase">
                                <Link to={nav.route}>
                                    {nav.name}
                                </Link>
                            </li>
                        ))}
                        <div className="relative ">
                            <button className="uppercase" onClick={() => setOpen(!open)}>Account</button>
                            {!open ? (
                                <ul className="menu absolute p-0 w-24 rounded-md bg-white text-green-600 shadow-md text-left">
                                <li className="hover:bg-green-200 text-gray-700 tracking-wide rounded-t-md">
                                    <Link className="w-[100%] text-inherit p-2 cursor-pointer bg-none" to='/login'>Login</Link>
                                </li>
                                <li className="hover:bg-green-200 text-gray-700 tracking-wide rounded-b-md">
                                    <Link className="w-[100%] text-inherit p-2 cursor-pointer bg-none" to='/signup'>Signup</Link>
                                </li>
                                </ul>
                            ) : null}
                        </div>
                    </ul>
                </div>
            </nav>
        </>
     );
}
 
export default Navbar;