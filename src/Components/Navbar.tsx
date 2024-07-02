import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { IoBatteryHalf } from 'react-icons/io5';
import { HiOutlineMenu, HiX } from 'react-icons/hi';
import logo from '../images/logo.png';

const Navbar = () => {
    const Links = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Blog', path: '/Blog' },
        { name: 'Contact', path: '/contact' }
    ];

    const [isHovered, setIsHovered] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="bg-white shadow-sm font-mono">
            <div className="flex justify-between items-center h-16 px-8">
                <NavLink to="/" className="flex-shrink-0">
                    <motion.img
                        src={logo}
                        alt="logo"
                        whileHover={{ scale: 1.3 }}
                        className="h-14 w-14 rounded-full object-cover"
                    />
                </NavLink>
                <div className="md:hidden">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-black focus:outline-none"
                    >
                        {isMenuOpen ? <HiX className="w-6 h-6" /> : <HiOutlineMenu className="w-6 h-6" />}
                    </button>
                </div>
                <div className="hidden md:flex items-center space-x-4">
                    {Links.map((link, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, type: 'tween', ease: 'easeInOut' }}
                            whileHover={{ scale: 1.1, originX: 0, color: '#f8e112' }}
                        >
                            <NavLink to={link.path} className="p-4">
                                {link.name}
                            </NavLink>
                        </motion.div>
                    ))}
                    <div
                        className="relative flex items-center"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <IoBatteryHalf className="mx-2 w-6 h-6" />
                        {isHovered && (
                            <div className="absolute top-8 left-full ml-2 w-30 p-1 bg-gray-300 text-center text-sm rounded">
                                Battery 45%
                            </div>
                        )}
                    </div>
                </div>
            </div>
            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white shadow-sm">
                    <div className="flex flex-col items-center space-y-2 p-4">
                        {Links.map((link, index) => (
                            <NavLink
                                key={index}
                                to={link.path}
                                className="p-2 w-full text-center hover:bg-gray-200"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.name}
                            </NavLink>
                        ))}
                        <div className="relative flex items-center w-full justify-center">
                            <IoBatteryHalf className="mx-2 w-6 h-6" />
                            {isHovered && (
                                <div className="absolute top-8 left-full ml-2 w-30 p-1 bg-gray-300 text-center text-sm rounded">
                                    Battery 45%
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;
