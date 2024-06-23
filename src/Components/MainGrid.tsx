import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { FiArrowRight} from "react-icons/fi";
import { SiFacebook, SiInstagram, SiTiktok, SiX} from 'react-icons/si';
import { MdOutlineNetworkCell } from 'react-icons/md';
import { FaWifi, FaBatteryThreeQuarters } from 'react-icons/fa';

import { BlogCard } from "./BlogCard";

import profile from "../images/profile.jpeg";
import { useState,useEffect } from "react";
import Footer from "./Footer";
import "../ComponentsStyle/Main.MusicCard.css"
import cover1 from "../images/MusicCover1.png";
import cover2 from "../images/MusicCover2.jpeg";
import cover3 from "../images/MusicCover3.png";
import "../ComponentsStyle/WeatherCard.css";

const ApiKey = '239dd7e146632848395d532633198a9d';



export const MainGrid = () => {
  return (
    <div className="min-h-screen w-full bg-zinc-900 px-4 py-12 text-zinc-50 rounded-lg">
      <motion.div
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.05,
        }}
        className="mx-auto  grid max-w-4xl grid-flow-dense grid-cols-12 gap-4"
      >
        <HeaderBlock />
        <SocialsBlock />
        <MusicCard />
        <WeatherCard />
        <BlogCard />
      </motion.div>
      <div className="flex justify-between items-center w-full">
      <motion.button
        whileHover={{
          rotate: "2.5deg",
          scale: 1.1,
        }}
        className="flex p-2 bg-black text-gray-100 rounded-lg"
      >
       <a href="#top">Back to Top</a>
      </motion.button>
      <motion.button
        whileHover={{
          rotate: "2.5deg",
          scale: 1.1,
        }}
        className="flex p-2 bg-white text-gray-700 rounded-lg"
      >
        See More
      </motion.button>

      </div>
      <Footer />

    </div>
  );
};

export const Block = ({ className, ...rest }: { className: string, [key: string]: any }) => {
  return (
    <motion.div
      variants={{
        initial: {
          scale: 0.5,
          y: 50,
          opacity: 0,
        },
        animate: {
          scale: 1,
          y: 0,
          opacity: 1,
        },
      }}
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
      className={twMerge(
        "col-span-4 rounded-lg border border-zinc-700 bg-zinc-800 p-6",
        className
      )}
      {...rest}
    />
  );
};


const HeaderBlock = () => {
    const [isHovered, setIsHovered] = useState(false);

return(
  <Block className="col-span-12 row-span-2 md:col-span-6">
    
    {isHovered && (
        <motion.div
          className="transform -translate-x-1/2 w-36 p-1 text-center opacity-100 visible transition-opacity bg-transparent ml-28"
          style={{ pointerEvents: 'none' }}
          initial={{ opacity: 0, visibility: 'hidden',scale: 0.5}}
          animate={{ opacity: 1, visibility: 'visible',scale: 2}}
            transition={{
                type: "spring",
                mass: 3,
                stiffness: 400,
                damping: 50,
            }}
        >
          <p className="font-semibold">Heyy👋</p>
        </motion.div>
        )}
        <img
        src={profile}
        alt="avatar"
        className="mb-4 size-36 rounded-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
      

    <h1 className="mb-12 text-4xl font-medium leading-tight">
      Hi, I'm Diwakar Neupane{" "}
      <span className="text-zinc-400">
        <strong>
            Love Watching Anime and Series, Playing Cricket, and Exploring Nature.
        </strong>
      </span>
    </h1>
    <a
      href="https://x.com/Diwakar26445"
      className="flex items-center gap-1 text-red-300 hover:underline"
    >
      Contact me <FiArrowRight />
    </a>
   
  </Block>
);
}



const SocialsBlock = () => (
  <>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-blue-600 md:col-span-3"
    >
      <a
        href="https://www.facebook.com/war.hunter.315"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <SiFacebook />
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 md:col-span-3"
    >
      <a
        href="https://www.instagram.com/diwakarneupane264/"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <SiInstagram />
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-zinc-50 md:col-span-3"
    >
      <a
        href="https://www.tiktok.com/@diwakarneupane264"
        className="grid h-full place-content-center text-3xl text-black"
      >
        <SiTiktok />
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-black md:col-span-3"
    >
      <a
        href="https://x.com/Diwakar26445"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <SiX />
      </a>
    </Block>
  </>
);

const MusicCard = () => {
  const topThreeSongs = [
    {
      name: "Mehrbaan",
      artist: "Ritviz",
      albumCover: cover1,
    },
    {
      name: "DanDelions",
      artist: "Ruth B",
      albumCover: cover2,
    },
    {
      name: "Let Her Go",
      artist: "Passenger",
      albumCover: cover3,
    },
  ];
  const [playingSongIndex, setPlayingSongIndex] = useState<number | null>(null); 
 
  const handlePlayClick = (index: number) => {
    setPlayingSongIndex(index === playingSongIndex ? null : index);
  };

  return (
    <Block className="col-span-12 md:col-span-6">
      <div className="main">
      <div className="currentplaying">
        <svg
          className="spotify"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          width="50px"
          height="50px"
        >
          <radialGradient
            id="ipdIa4~cOclR8yt_ClW93a"
            cx="33.34"
            cy="572.064"
            r="43.888"
            gradientTransform="translate(0 -534)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#f4e9c3" />
            <stop offset=".219" stopColor="#f8eecd" />
            <stop offset=".644" stopColor="#fdf4dc" />
            <stop offset="1" stopColor="#fff6e1" />
          </radialGradient>
          <path
            fill="url(#ipdIa4~cOclR8yt_ClW93a)"
            d="M51.03,37.34c0.16,0.98,1.08,1.66,2.08,1.66h5.39c2.63,0,4.75,2.28,4.48,4.96	C62.74,46.3,60.64,48,58.29,48H49c-1.22,0-2.18,1.08-1.97,2.34c0.16,0.98,1.08,1.66,2.08,1.66h8.39c1.24,0,2.37,0.5,3.18,1.32	C61.5,54.13,62,55.26,62,56.5c0,2.49-2.01,4.5-4.5,4.5h-49c-1.52,0-2.9-0.62-3.89-1.61C3.62,58.4,3,57.02,3,55.5	C3,52.46,5.46,50,8.5,50H14c1.22,0,2.18-1.08,1.97-2.34C15.81,46.68,14.89,44,13.89,44H5.5c-2.63,0-4.75-2.28-4.48-4.96	C1.26,36.7,3.36,35,5.71,35H8c1.71,0,3.09-1.43,3-3.16C10.91,30.22,9.45,29,7.83,29H4.5c-2.63,0-4.75-2.28-4.48-4.96	C0.26,21.7,2.37,20,4.71,20H20c0.83,0,1.58-0.34,2.12-0.88C22.66,18.58,23,17.83,23,17c0-1.66-1.34-3-3-3h-1.18	c-0.62-0.09-1.43,0-2.32,0h-9c-1.52,0-2.9-0.62-3.89-1.61S2,10.02,2,8.5C2,5.46,4.46,3,7.5,3h49c3.21,0,5.8,2.79,5.47,6.06	C61.68,11.92,60.11,14,57.24,14H52c-2.76,0-5,2.24-5,5c0,1.38,0.56,2.63,1.46,3.54C49.37,23.44,50.62,24,52,24h6.5	c3.21,0,5.8,2.79,5.47,6.06C63.68,32.92,61.11,35,58.24,35H53C51.78,35,50.82,36.08,51.03,37.34z"
          ></path>
          <linearGradient
            id="ipdIa4~cOclR8yt_ClW93b"
            x1="32"
            x2="32"
            y1="530.096"
            y2="590.253"
            gradientTransform="translate(0 -534)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#42d778" />
            <stop offset=".428" stopColor="#3dca76" />
            <stop offset="1" stopColor="#34b171" />
          </linearGradient>
          <path
            fill="url(#ipdIa4~cOclR8yt_ClW93b)"
            d="M57,32c0,12.837-9.663,23.404-22.115,24.837C33.942,56.942,32.971,57,32,57	c-1.644,0-3.25-0.163-4.808-0.471C15.683,54.298,7,44.163,7,32C7,18.192,18.192,7,32,7S57,18.192,57,32z"
          ></path>
          <path
            fill="#fff"
            d="M41.683,44.394c-0.365,0-0.731-0.181-1.096-0.365c-3.471-2.009-7.674-3.105-12.24-3.105	c-2.559,0-5.116,0.364-7.491,0.912c-0.365,0-0.914,0.183-1.096,0.183c-0.914,0-1.461-0.732-1.461-1.462	c0-0.913,0.547-1.463,1.279-1.643c2.923-0.732,5.846-1.096,8.951-1.096c5.116,0,9.866,1.276,13.885,3.655	c0.548,0.364,0.914,0.73,0.914,1.642C43.145,43.847,42.414,44.394,41.683,44.394z M44.241,38.181c-0.547,0-0.912-0.18-1.279-0.364	c-3.835-2.375-9.135-3.839-15.163-3.839c-2.924,0-5.664,0.366-7.674,0.916c-0.549,0.18-0.731,0.18-1.096,0.18	c-1.096,0-1.827-0.912-1.827-1.826c0-1.096,0.549-1.645,1.461-2.009c2.74-0.73,5.481-1.279,9.317-1.279	c6.213,0,12.241,1.463,16.991,4.384c0.73,0.364,1.096,1.096,1.096,1.826C46.069,37.269,45.337,38.181,44.241,38.181z M47.165,30.876	c-0.548,0-0.731-0.182-1.279-0.364c-4.385-2.559-10.961-4.021-17.356-4.021c-3.289,0-6.577,0.366-9.5,1.096	c-0.366,0-0.731,0.182-1.279,0.182c-1.279,0.183-2.193-0.912-2.193-2.192c0-1.279,0.731-2.009,1.644-2.192	c3.471-1.096,7.125-1.462,11.327-1.462c6.943,0,14.25,1.462,19.731,4.567c0.73,0.366,1.278,1.096,1.278,2.193	C49.357,29.961,48.442,30.876,47.165,30.876z"
          ></path>
        </svg>
        <p className="heading">Currently Playing</p>
      </div>
      {
       topThreeSongs.map((song, index) => (
        <button
          key={index}
          onClick={() => handlePlayClick(index)}
          className={`loader ${playingSongIndex === index ? 'playing' : ''}`}
        >
          <div className="song">
            <p className="name">{song.name}</p>
            <p className="artist">{song.artist}</p>
          </div>
          <div className="albumcover">
            <img src={song.albumCover}  />
          </div>
          <div className="loading">
            {playingSongIndex === index ? (
              <>
              {
                //play music
              }
                <div className="load"></div>
                <div className="load"></div>
                <div className="load"></div>
                <div className="load"></div>
              </>
            ) : (
              <div className="play"></div>
            )}
          </div>
        </button>
      ))}
      
      {/* <button className="loader">
        <div className="song">
          <p className="name">Time in a Bottle</p>
          <p className="artist">Jim Croce</p>
        </div>
        <div className="albumcover"></div>
        <div className="loading">
          {
            true ? (
            <>
          <div className="load"></div>
          <div className="load"></div>
          <div className="load"></div>
          <div className="load"></div>
          </>
            ) : (
            <div className="play"></div>
            )
          }
        </div>
        </button> */}
    </div>
    </Block>
  );
}


const WeatherCard = () => {
  const [weatherData, setWeatherData] = useState<any>(null);

  const getData = async (lat: number, lon: number) => {
    const url =
      "https://api.openweathermap.org/data/2.5/weather?lat=" +
      lat +
      "&lon=" +
      lon +
      "&appid=" +
      ApiKey;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };

  const TempToC = (temp: number) => {
    return Math.round(temp - 273.15);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      const data = await getData(lat, lon);
      setWeatherData(data);
    });
  }, []); // Only run once on component mount

  return (
    <Block className="col-span-12 md:col-span-6 ">
      <h2 className="mb-4 text-2xl font-semibold">
        What's the weather like?
      </h2>
      
      {weatherData ? (
        <div className="card">
        <div className="card__date">
          <span className="time">
            {new Date().getHours()}:{new Date().getMinutes()}
          </span>
          <span className="date">
            {new Date().toDateString()}
          </span>
        </div>
          <div className="popup">
          <div className="popup__location">
            <span className="city">{weatherData.name} {", "}</span>
            <span className="country">{weatherData.sys.country}</span>
          </div>
          <div className="absolute right-0 top-0 flex gap-2 mr-2 bg-gray-400">
            <MdOutlineNetworkCell />
            <FaWifi />
            <FaBatteryThreeQuarters />
          </div>
            <div className="popup__weather">
              <span className="popup__temp font-semibold text-xl">
                {TempToC(weatherData.main.temp)} °C {" "}
              </span>
              <span className="popup__desc">
                {weatherData.weather[0].description} {" "}
              </span>
            </div>
    </div>

</div>
      ) : (
        <Socket />
        
      )}
    </Block>
  );
};

const Gel = ({ className }: { className: string }) => (
  <div className={`gel ${className}`}>
    <div className="hex-brick h1"></div>
    <div className="hex-brick h2"></div>
    <div className="hex-brick h3"></div>
  </div>
);

const Socket = () => {
  return (
    <div className="socket">
      <Gel className="center-gel" />
      <Gel className="c1 r1" />
      <Gel className="c2 r1" />
      <Gel className="c3 r1" />
      <Gel className="c4 r1" />
      <Gel className="c5 r1" />
      <Gel className="c6 r1" />
      <Gel className="c7 r2" />
      <Gel className="c8 r2" />
      <Gel className="c9 r2" />
      <Gel className="c10 r2" />
      <Gel className="c11 r2" />
      <Gel className="c12 r2" />
      <Gel className="c13 r2" />
      <Gel className="c14 r2" />
      <Gel className="c15 r2" />
      <Gel className="c16 r2" />
      <Gel className="c17 r2" />
      <Gel className="c18 r2" />
      <Gel className="c19 r3" />
      <Gel className="c20 r3" />
      <Gel className="c21 r3" />
      <Gel className="c22 r3" />
      <Gel className="c23 r3" />
      <Gel className="c24 r3" />
      <Gel className="c25 r3" />
      <Gel className="c26 r3" />
      <Gel className="c28 r3" />
      <Gel className="c29 r3" />
      <Gel className="c30 r3" />
      <Gel className="c31 r3" />
      <Gel className="c32 r3" />
      <Gel className="c33 r3" />
      <Gel className="c34 r3" />
      <Gel className="c35 r3" />
      <Gel className="c36 r3" />
      <Gel className="c37 r3" />
    </div>
  );
};


// const BlogCard = () => {
//   const gridItems = [1, 2, 3, 4, 5, 6]; // Example items, replace with your content

//   return (
//     <Block className="col-span-12 md:col-span-6 overflow-hidden relative">
//       <motion.div
//         className="w-full flex"
//         animate={{
//           x: [-100, '100%', '100%', -100], // Initial offset, right to left, then wrap around
//         }}
//         transition={{
//           duration: 10, // Total duration for one cycle (right to left and back)
//           ease: 'linear',
//           repeat: Infinity,
//         }}
//       >
//         {gridItems.map(( index) => (
//           <div
//             key={index}
//             className="bg-white w-36 h-52 rounded-lg shadow-lg m-2"
//           >
//             {/* Replace with actual content */}
//           </div>
//         ))}
//       </motion.div>
//     </Block>
//   );
// }

export { SocialsBlock };




export default MainGrid;
