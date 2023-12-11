import { Link } from "react-router-dom";
import { useState } from "react";
import { FaRegTimesCircle } from "react-icons/fa"
// import { BsCart2 } from "react-icons/bs"
import { BiLogIn } from "react-icons/bi"
import { RxDividerVertical } from "react-icons/rx"
import { HiMenuAlt3 } from "react-icons/hi"
import { MdOutlineKeyboardArrowUp, MdOutlineKeyboardArrowDown, MdOutlineShoppingCart } from "react-icons/md"
import { useSelector } from "react-redux";


const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [dropdown, setDropdown] = useState(false)

    const navLinks = [
        {id: 1, name: "Home", route: "/"},
        {id: 2, name: "Shop", route: "/shop"},
        {id: 3, name: "About", route: "/about"}
    ]

    const cart = useSelector((state) => state.cart)

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
                            <li className="sm:flex hidden items-center text-gray-200">
                                <Link className="flex relative" to='/cart'>
                                    <MdOutlineShoppingCart className="text-xl" />
                                    <p className="text-sm text-gray-800">{(cart.length)}</p>
                                </Link>
                                <RxDividerVertical className="md:text-3xl" />
                                <Link to='/login' className="flex items-center border border-yellow-300 p-1 rounded-lg text-sm">
                                    <BiLogIn className="mr-2 text-lg" />
                                    Login
                                    {/* <RxDividerVertical className="mx-1" />
                                    Signup */}
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* mobile-version */}
                <div className={`${open ? "left-0 " : "left-[-100%]"} z-[100] sm:hidden absolute top-0 right-0 space-y-8 py-6 px-8 w-[80%] min-h-screen duration-300 ease-in-out bg-green-700 opacity-90`}>
                    <ul className="flex flex-col text-base font-medium space-y-4 text-gray-200">
                        {navLinks.map((nav) => (
                            <li key={nav.id} onClick={() => setOpen((prev) => !prev)} className="navlink md:my-0 my-2 uppercase">
                                <Link to={nav.route}>
                                    {nav.name}
                                </Link>
                            </li>
                        ))}
                        <li className="flex flex-col  items-start space-y-4 text-gray-200">
                            <Link 
                                className="flex relative" 
                                to='/cart' 
                                onClick={() => setOpen((prev) => !prev)}
                            >
                                <MdOutlineShoppingCart className="text-xl" />
                                <p className="text-sm text-gray-800">{(cart.length)}</p>
                            </Link>
                            <Link 
                                to='/login' 
                                onClick={() => setOpen((prev) => !prev)}
                                className="flex items-center border border-yellow-300 p-1 rounded-lg text-sm"
                            >
                                <BiLogIn className="mr-2 text-lg" />
                                Login
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
     );
}
 
export default Navbar;