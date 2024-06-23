
import {motion} from 'framer-motion'
import Footer from './Footer'
const Blog = () => {
  return (
    <div className="my-block h-screen">
      <motion.div 
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 0.5,type: 'tween',
      ease: 'easeInOut'}}
      className='h-auto'
      >
        <CustomBlogCard/>
      </motion.div>
      <Footer/>
      
    </div>
    
  )
}

export default Blog

//blog card contains 
const Blogs = [
  {
      id: 1,
      title: 'Exploring Mount Everest',
      date: '10/10/2021',
      description: 'The highest mountain in the world, Mount Everest is part of the Himalayas and is located on the border between Nepal and China. The mountain is known for its extreme weather conditions and challenging terrain, making it a popular destination for climbers and adventurers.',
      image: 'https://cdn.dribbble.com/userupload/14635915/file/original-ef45f7b1399a422b19361e5f0f880074.png?resize=700x525&vertical=center'
  },
  {
      id: 2,
      title : 'The Great Barrier Reef',
      date: '10/10/2021',
      description: 'The Great Barrier Reef is the largest coral reef system in the world, stretching over 2,300 kilometers along the coast of Queensland, Australia. The reef is home to a wide variety of marine life, including fish, turtles, sharks, and dolphins, making it a popular destination for divers and snorkelers.',
      image: 'https://cdn.dribbble.com/users/2638270/screenshots/7968312/media/e3b138e94a17571261c42e0425337fd9.jpg?resize=700x525&vertical=center'

  },
  {
      id: 3,
      title: 'Safari in Africa',
      date: '10/10/2021',
      description: 'Africa is home to some of the world’s most iconic wildlife, including elephants, lions, and giraffes. A safari in Africa offers the chance to see these animals up close in their natural habitat, as well as experience the continent’s diverse cultures and landscapes.',
      image: 'https://cdn.dribbble.com/users/39839/screenshots/14776793/media/91c952f20fad92086748bc1b4ca1efdd.png?resize=700x525&vertical=center'},
  {
      id: 4,
      title: 'Exploring the Amazon Rainforest',
      date: '10/10/2021',
      description: 'The Amazon Rainforest is the largest tropical rainforest in the world, covering an area of over 6.7 million square kilometers across nine countries in South America. The rainforest is home to a wide variety of plant and animal species, many of which are found nowhere else on Earth.',
      image: 'https://cdn.dribbble.com/users/454765/screenshots/11405947/media/d6c6860102c9619ffdc3fb84b56d3183.gif'
  },
  {
    id: 5,
    title: 'Exploring Mount Everest',
    date: '10/10/2021',
    description: 'The highest mountain in the world, Mount Everest is part of the Himalayas and is located on the border between Nepal and China. The mountain is known for its extreme weather conditions and challenging terrain, making it a popular destination for climbers and adventurers.',
    image: 'https://cdn.dribbble.com/userupload/14635915/file/original-ef45f7b1399a422b19361e5f0f880074.png?resize=700x525&vertical=center'
},
{
    id: 6,
    title : 'The Great Barrier Reef',
    date: '10/10/2021',
    description: 'The Great Barrier Reef is the largest coral reef system in the world, stretching over 2,300 kilometers along the coast of Queensland, Australia. The reef is home to a wide variety of marine life, including fish, turtles, sharks, and dolphins, making it a popular destination for divers and snorkelers.',
    image: 'https://cdn.dribbble.com/users/2638270/screenshots/7968312/media/e3b138e94a17571261c42e0425337fd9.jpg?resize=700x525&vertical=center'

},
{
    id: 7,
    title: 'Safari in Africa',
    date: '10/10/2021',
    description: 'Africa is home to some of the world’s most iconic wildlife, including elephants, lions, and giraffes. A safari in Africa offers the chance to see these animals up close in their natural habitat, as well as experience the continent’s diverse cultures and landscapes.',
    image: 'https://cdn.dribbble.com/users/39839/screenshots/14776793/media/91c952f20fad92086748bc1b4ca1efdd.png?resize=700x525&vertical=center'},
{ 
    id: 8,
    title: 'Exploring the Amazon Rainforest',
    date: '10/10/2021',
    description: 'The Amazon Rainforest is the largest tropical rainforest in the world, covering an area of over 6.7 million square kilometers across nine countries in South America. The rainforest is home to a wide variety of plant and animal species, many of which are found nowhere else on Earth.',
    image: 'https://cdn.dribbble.com/users/454765/screenshots/11405947/media/d6c6860102c9619ffdc3fb84b56d3183.gif'
},
{ 
  id: 9,
  title: 'Exploring the Amazon Rainforest',
  date: '10/10/2021',
  description: 'The Amazon Rainforest is the largest tropical rainforest in the world, covering an area of over 6.7 million square kilometers across nine countries in South America. The rainforest is home to a wide variety of plant and animal species, many of which are found nowhere else on Earth.',
  image: 'https://cdn.dribbble.com/users/454765/screenshots/11405947/media/d6c6860102c9619ffdc3fb84b56d3183.gif'
}

]
const CustomBlogCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    {Blogs.map((blog) => {
        return (
            <motion.div 
                key={blog.id} // Make sure to add a unique key for each item
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, type: 'tween', ease: 'easeInOut' }}
                whileHover={{ scale: 1.15, transition: { duration: 0.5, type: 'tween', ease: 'easeInOut' } }}
                className="w-full h-auto bg-gray-200 custom-border-radius"
            >
                <img src={blog.image} alt="blog" className="w-full h-48 object-cover custom-border-radius"/>
                <div className="p-4">
                    <h3 className="text-lg font-semibold text-black">{blog.title}</h3>
                    <p className="text-sm text-gray-500">{blog.date}</p>
                    <p className="text-sm text-gray-500">
                        {blog.description.length > 100 ? blog.description.substring(0, 100) + '...' : blog.description}
                    </p>
                </div>
            </motion.div>
        );
    })}
</div>
  )
}