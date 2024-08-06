import { motion } from 'framer-motion';
import '../assets/Fonts/Fonts.css';

const Card = ({imgUrl,title,discription,rating}:{
    imgUrl: string;
    title: string;
    discription: string;
    rating: string;
}) => {
  const removeTags = (html: string) => {
    const div = document.createElement('div');
    div.innerHTML = html;
    return div.textContent || div.innerText || '';
  };
  discription = removeTags(discription);
  const filterDiscription = (discription: string) => {
    if (discription.length > 100) {
      return discription.substring(0, 100) + '...';
    } else {
      return discription;
    }
  }
  discription = filterDiscription(discription);
    return (
      <div>
        <motion.div
          className="relative w-72 h-80 rounded-lg flex items-center justify-center overflow-hidden transition-transform duration-600 ease-[cubic-bezier(0.23, 1, 0.32, 1)]"
          whileHover={{ scale: 1.1, rotate: -5, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)' }}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ backgroundImage: `url(${imgUrl})`, backgroundSize: 'cover' }}
        >
        </motion.div>
        <div className="mt-4 text-center flex flex-col justify-center item-center">
          <h3 className="text-2xl font-custom text-green-300">{title}</h3>
          <p className="text-lg text-gray-100 mx-4 font-custom">{discription}</p>
          <div className="flex justify-center items-center mt-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 bg-gradient-to-t from-slate-700 to-slate-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 11l7-7 7 7M5 19l7-7 7 7" />
            </svg>
            <span className="text-lg text-white mx-4">{rating}</span>
          </div>
        </div>
      </div>
      
    );
  }


export default Card;