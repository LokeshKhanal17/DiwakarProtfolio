import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '../images/logo.png';

const Navbar = () => {
    const Links = [
        {name: 'Home', path: '/'},
        {name: 'About', path: '/about'},
        {name: 'Blog', path: '/Blog'},
        {name: 'Contact', path: '/contact'}
    ];
  
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
            </div>
        </div>
    </>
    )
}

export default Navbar;
