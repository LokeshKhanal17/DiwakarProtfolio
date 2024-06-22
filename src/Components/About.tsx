import { Block } from "./MainGrid";
import { FiMapPin, FiMail } from "react-icons/fi";
import { useState } from "react";
import { motion } from "framer-motion";
import Card from "./Card";
import Footer from "./Footer";

const About = () => {
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
        <AboutBlock />
        <LocationBlock />
        <EmailListBlock />
      </motion.div>
      <FavSeries />
      <Footer />
    </div>

  )
}

export const AboutBlock = () => (
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
  
  export const LocationBlock = () => (
    <Block className="col-span-12 flex flex-col items-center gap-4 md:col-span-3">
     
     
      <button 
      onClick={
          () => {
              //go to new brunswick gooogle maps
              window.open("https://www.google.com/maps/place/New+Brunswick,+NJ");
          }
      }
      className="text-center text-lg text-zinc-400">
          <FiMapPin className="text-3xl" />
          New Brunswick</button>
    </Block>
  );
  
  export const EmailListBlock = () => {
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

  export const FavSeries = () => {
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
       {
       <>
          <h1 className="text-3xl font-bold text-center">My Favorite Series</h1>
          <p className="text-center text-lg mb-4">
            Here are some of my favorite series that I highly recommend.
          </p>
       </>
       }
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
export default About