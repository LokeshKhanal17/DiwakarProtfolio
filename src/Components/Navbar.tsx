import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '../images/logo.png';
import {  useState } from 'react';
import { IoBatteryHalf } from 'react-icons/io5';



const Navbar = () => {
    const Links = [
        {name: 'Home', path: '/'},
        {name: 'About', path: '/about'},
        {name: 'Blog', path: '/Blog'},
        {name: 'Contact', path: '/contact'}
        
    ];
    const [isHovered, setIsHovered] = useState(false);
    return (
        <>
            <div className="flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono">
                <NavLink to="/" className="pl-8">
                    <motion.img src={logo} alt="logo" 
                    whileHover={{ scale: 1.3}}
                    className='h-14 w-14 rounded-full object-cover'
                    />
                </NavLink>
                <div className="pr-8  md:flex hidden">
                    {Links.map((link, index) => (
                        <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: .5 ,type:'tween', ease: 'easeInOut'}}
                        whileHover={{ scale: 1.1, originX: 0, color: '#f8e112'}}
                        >
                            <NavLink key={index} to={link.path} className="p-4">{link.name}</NavLink>
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
        </>
    )
}

export default Navbar;
