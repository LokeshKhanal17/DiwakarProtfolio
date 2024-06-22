import { motion } from 'framer-motion';

const Card = ({imgUrl,title,discription,rating}:{
    imgUrl: string;
    title: string;
    discription: string;
    rating: string;
}) => {
    return (
      <motion.div
        className="relative w-72 h-80 rounded-lg flex items-center justify-center overflow-hidden transition-transform duration-600 ease-[cubic-bezier(0.23, 1, 0.32, 1)]"
        whileHover={{ scale: 1.1, rotate: -5, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)' }}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ backgroundImage: `url(${imgUrl})`, backgroundSize: 'cover' }}
      >
        <motion.div
          className="absolute top-0 left-0  h-full w-full p-5 bg-white opacity-0"
          whileHover={{ opacity: 1, rotate: 0 }}
        >
          <p className="m-0 text-xl font-bold text-gray-800">{title}</p>
          <p className="mt-2 text-sm text-gray-500"> {discription}</p>
          <p className="mt-2 text-sm text-gray-500">IMDB: {rating}</p>
          <button
          onClick={() => 
            window.open("https://www.imdb.com/")
        }
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg">Watch Now</button>
        </motion.div>
      </motion.div>
    );
  }


export default Card;