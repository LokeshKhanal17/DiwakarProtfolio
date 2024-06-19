import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { FiArrowRight, FiMail, FiMapPin } from "react-icons/fi";
import { SiFacebook, SiInstagram, SiTiktok, SiX } from 'react-icons/si';
import profile from "../images/profile.jpeg";
import { useState } from "react";

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
        <AboutBlock />
        <LocationBlock />
        <EmailListBlock />
      </motion.div>
      <FavSeries />
      <Footer />
    </div>
  );
};

const Block = ({ className, ...rest }: { className: string, [key: string]: any }) => {
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

export { SocialsBlock };

const AboutBlock = () => (
  <Block className="col-span-12 text-3xl leading-snug">
    <p>
    Passions Beyond Boundaries: Cricket, Anime, Series, and Nature{" "}
      <span className="text-zinc-400">
        My multifaceted passions encompass an ardent love for cricket, an insatiable appetite for anime,
        a penchant for binge-watching captivating series, and a profound appreciation for the serenity
        of nature. As a cricket aficionado, I meticulously dissect matches, revel in the strategic nuances
        of the game, and engage in spirited play with friends. My anime obsession immerses me in a realm 
        of intricate narratives and vibrant aesthetics, while my series addiction allows me to explore an 
        of enthralling storylines and complex characters. Moreover, my affinity for nature manifests in a 
        deep reverence for the great outdoors, where I find solace and inspiration amidst verdant landscapes
        and tranquil vistas. These diverse interests coalesce to enrich my life, infusing it with excitement
        and a continuous thirst for discovery.
      </span>
    </p>
  </Block>
);

const LocationBlock = () => (
  <Block className="col-span-12 flex flex-col items-center gap-4 md:col-span-3">
    <FiMapPin className="text-3xl" />
   
    <button 
    onClick={
        () => {
            //go to new brunswick gooogle maps
            window.open("https://www.google.com/maps/place/New+Brunswick,+NJ");
        }
    }
    className="text-center text-lg text-zinc-400">New Brunswick</button>
  </Block>
);

const EmailListBlock = () => {
    const [email, setEmail] = useState("");
    const [isSubscribed, setIsSubscribed] = useState(false);
    const HandelSubmit = () => {
        if(email === "") {
            alert("Please enter a valid email address");
            return;
        }
        if(isSubscribed) {
            alert("You have already subscribed");
            return;
        }
        setIsSubscribed(true);
        alert(`You have successfully subscribed with email: ${email}`);
    }




    return(
  <Block className="col-span-12 md:col-span-9">
    <p className="mb-3 text-lg">Join my mailing list</p>
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex items-center gap-2"
    >
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full rounded border border-zinc-700 bg-zinc-800 px-3 py-1.5 transition-colors focus:border-red-300 focus:outline-0"
        onChange={(e) => 
            setEmail(e.target.value)
        }
      />
      <button
        type="submit"
        onClick={() => HandelSubmit()}
        className="flex items-center gap-2 whitespace-nowrap rounded bg-zinc-50 px-3 py-2 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-300"
      >
        <FiMail /> Join the list
      </button>
    </form>
  </Block>
);}

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
const FavSeries = () => {
   const seriesData = [
    {
        "id": 1,
        "title": "Attack on Titan",
        "imgurl": "https://m.media-amazon.com/images/M/MV5BNDFjYTIxMjctYTQ2ZC00OGQ4LWE3OGYtNDdiMzNiNDZlMDAwXkEyXkFqcGdeQXVyNzI3NjY3NjQ@._V1_.jpg",
        "description": "In a world where humanity resides within enormous walled cities to protect themselves from Titans, gigantic humanoid creatures, Eren Yeager vows to exterminate them after they destroy his hometown and kill his mother.",
        "rating": "9.0/10"

    },
    {
        "id": 2,
        "title": "Breaking Bad",
        "imgurl": "https://m.media-amazon.com/images/M/MV5BYmQ4YWMxYjUtNjZmYi00MDQ1LWFjMjMtNjA5ZDdiYjdiODU5XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_.jpg",
        "description": "A high school chemistry teacher turned methamphetamine producer partners with a former student to secure his family's future in this gripping drama that explores morality, consequences, and survival.",
        "rating": "9.5/10"
    },
    {
        "id": 3,
        "title": "Naruto",
        "imgurl": "https://m.media-amazon.com/images/M/MV5BZmQ5NGFiNWEtMmMyMC00MDdiLTg4YjktOGY5Yzc2MDUxMTE1XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg",
        "description": "Naruto Uzumaki, a young ninja with dreams of becoming the strongest ninja and leader of his village, battles numerous foes while forming powerful bonds of friendship and uncovering his hidden potential.",
        "rating": "8.5/10"
    },
    {
        "id": 4,
        "title": "Stranger Things",
        "imgurl": "https://m.media-amazon.com/images/M/MV5BMDZkYmVhNjMtNWU4MC00MDQxLWE3MjYtZGMzZWI1ZjhlOWJmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
        "description": "In the small town of Hawkins, Indiana, a group of kids encounter a series of supernatural events, including the disappearance of a friend, the arrival of a mysterious girl, and secret government experiments.",
        "rating": "8.8/10"
    },
    {
        "id": 5,
        "title": "Fullmetal Alchemist: Brotherhood",
        "imgurl": "https://m.media-amazon.com/images/M/MV5BZmEzN2YzOTItMDI5MS00MGU4LWI1NWQtOTg5ZThhNGQwYTEzXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg",
        "description": "Brothers Edward and Alphonse Elric use alchemy in their quest to restore their bodies after a failed transmutation experiment, uncovering a deep conspiracy in their pursuit of the Philosopher's Stone.",
        "rating": "9.1/10"
    },
    {
        "id": 6,
        "title": "Game of Thrones",
        "imgurl": "https://m.media-amazon.com/images/M/MV5BN2IzYzBiOTQtNGZmMi00NDI5LTgxMzMtN2EzZjA1NjhlOGMxXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
        "description": "Based on George R.R. Martin's 'A Song of Ice and Fire' series, this epic fantasy drama follows the power struggles among noble families as they vie for control of the Iron Throne in the Seven Kingdoms of Westeros.",
        "rating": "9.3/10"
    },
    {
        "id": 7,
        "title": "One Piece",
        "imgurl": "https://m.media-amazon.com/images/M/MV5BM2YwYTkwNjItNGQzNy00MWE1LWE1M2ItOTMzOGI1OWQyYjA0XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg",
        "description": "Monkey D. Luffy, a young pirate with the ability to stretch his body like rubber, embarks on a grand adventure to find the One Piece, the ultimate treasure, and become the Pirate King.",
        "rating": "8.7/10"
    },
    {
        "id": 8,
        "title": "Vinland Saga",
        "imgurl": "https://m.media-amazon.com/images/M/MV5BZDY4MmQ0N2QtMDJiOS00MjI5LTgyZjUtOTY5ZWMzZmQzZDNhXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
        "description": "Set in the Star Wars universe, this series follows the adventures of a lone bounty hunter known as the Mandalorian, who navigates the outer reaches of the galaxy while protecting a mysterious child.",
        "rating": "8.9/10"
    },
    {
        "id": 9,
        "title": "Death Note",
        "imgurl": "https://m.media-amazon.com/images/M/MV5BYjJiOTZkNDAtODY1NC00MzY0LTg3N2UtZDhiMjYyYjc0NDE5XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg",
        "description": "A high school student named Light Yagami gains a supernatural notebook that allows him to kill anyone whose name he writes in it, leading to a complex game of cat and mouse with a brilliant detective known as L.",
        "rating": "9.2/10"
    },
    {
        "id": 10,
        "title": "The Boys",
        "imgurl": "https://m.media-amazon.com/images/M/MV5BODkwM2U1ZWEtMjI4NS00ZGUyLWI4YmQtZjliZTk4NjRmNmY5XkEyXkFqcGdeQXVyMDc5ODIzMw@@._V1_.jpg",
        "description": "Based on the book series by Andrzej Sapkowski, this fantasy drama follows Geralt of Rivia, a monster hunter with supernatural abilities, as he navigates a world filled with magic, political intrigue, and dark creatures.",
        "rating": "8.8/10"
    }
]


  
    return (
        <motion.div
      className="w-full col-span-12 md:col-span-6 m-4"
      initial={{
        opacity: 0,
        y: 100,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 3,
        delay: 0.2,
        type: "tween",
        stiffness: 200,
        ease: "easeInOut",
      }}
    >
      <h2 className="mb-3 text-2xl font-medium">Favorite Series</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {seriesData.map((series) => (
          <Card
            key={series.id}
            title={series.title}
            discription={series.description}
            imgUrl={series.imgurl}
            rating={series.rating}
          />
        ))}
      </div>
    </motion.div>
    );
  };

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




export default MainGrid;
