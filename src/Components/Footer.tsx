
import profile from "../images/profile.jpeg";
import { motion } from "framer-motion";
const Footer = () => {
    return (
      <footer className="mt-12 bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-6">
            <motion.img
              src={profile}
              alt="Your Name"
              className="w-32 h-32 rounded-full mx-auto"
              initial={{ scale: 0.8, y: 100,opacity: 0.5}}
              animate={{ scale: 1, y: 0,opacity: 1}}
              transition={{
                duration: 0.5,
                type: "spring",
                stiffness: 260,
                damping: 20,
            }}
            whileHover={{ scale: 1.1, rotate: 360 }}
            />
          </div>
          <div className="flex justify-center space-x-4 mb-6">
        <a href="https://x.com/Diwakar26445" className="text-gray-400 hover:text-white transition-transform ease-in-out hover:scale-125">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.5 4.5l-8.5 8.5 8.5 8.5h-3.5l-8.5-8.5-8.5 8.5h-3.5l8.5-8.5-8.5-8.5h3.5l8.5 8.5 8.5-8.5z"></path>
            </svg>
        </a>

        <a href="https://www.facebook.com/war.hunter.315" className="text-gray-400 hover:text-white transition-transform ease-in-out hover:scale-125">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.4 3.62 8.06 8.26 9.8v-6.9H8.25v-2.9h2.05v-2.2c0-2.02 1.23-3.13 3.02-3.13.86 0 1.6.06 1.82.09v2.1h-1.25c-1 0-1.2.47-1.2 1.16v1.5h2.4l-.3 2.9h-2.1V22c4.64-1.74 8.26-5.4 8.26-9.8 0-5.5-4.46-9.96-9.96-9.96z"></path>
              </svg>
        </a>
        <a href="https://www.instagram.com/diwakarneupane264/" className="text-gray-400 hover:text-white transition-transform ease-in-out hover:scale-125">
            <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
            <path
            d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm8.72 1.5h-8.94A4.27 4.27 0 0 0 3.25 7.75v8.94a4.27 4.27 0 0 0 4.27 4.27h8.94a4.27 4.27 0 0 0 4.27-4.27v-8.94a4.27 4.27 0 0 0-4.27-4.27zM12 7.75a4.25 4.25 0 1 1 0 8.5a4.25 4.25 0 0 1 0-8.5zm0 1.5a2.75 2.75 0 1 0 0 5.5a2.75 2.75 0 0 0 0-5.5zm5.75-.61a1.12 1.12 0 1 1 0 2.24a1.12 1.12 0 0 1 0-2.24z"
            fill="currentColor"
            />
            </svg>
        </a>
          </div>
          <div className="border-t border-gray-700 pt-4 text-gray-400">
            &copy; 2024 Diwakar Neupane. All rights reserved.
          </div>
        </div>
      </footer>
    );
  };

export default Footer;