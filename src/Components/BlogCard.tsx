import { BsTransparency } from 'react-icons/bs'
import'../ComponentsStyle/BlogCard.css'
import { motion } from 'framer-motion'

//blog card contains 
const Blogs = [
    {
        title: 'Exploring Mount Everest',
        date: '10/10/2021',
        description: 'The highest mountain in the world, Mount Everest is part of the Himalayas and is located on the border between Nepal and China. The mountain is known for its extreme weather conditions and challenging terrain, making it a popular destination for climbers and adventurers.',
        image: 'https://cdn.dribbble.com/userupload/14635915/file/original-ef45f7b1399a422b19361e5f0f880074.png?resize=700x525&vertical=center'
    },
    {
        title : 'The Great Barrier Reef',
        date: '10/10/2021',
        description: 'The Great Barrier Reef is the largest coral reef system in the world, stretching over 2,300 kilometers along the coast of Queensland, Australia. The reef is home to a wide variety of marine life, including fish, turtles, sharks, and dolphins, making it a popular destination for divers and snorkelers.',
        image: 'https://cdn.dribbble.com/users/2638270/screenshots/7968312/media/e3b138e94a17571261c42e0425337fd9.jpg?resize=700x525&vertical=center'

    },
    {
        title: 'Safari in Africa',
        date: '10/10/2021',
        description: 'Africa is home to some of the world’s most iconic wildlife, including elephants, lions, and giraffes. A safari in Africa offers the chance to see these animals up close in their natural habitat, as well as experience the continent’s diverse cultures and landscapes.',
        image: 'https://cdn.dribbble.com/users/39839/screenshots/14776793/media/91c952f20fad92086748bc1b4ca1efdd.png?resize=700x525&vertical=center'},
    {
        title: 'Exploring the Amazon Rainforest',
        date: '10/10/2021',
        description: 'The Amazon Rainforest is the largest tropical rainforest in the world, covering an area of over 6.7 million square kilometers across nine countries in South America. The rainforest is home to a wide variety of plant and animal species, many of which are found nowhere else on Earth.',
        image: 'https://cdn.dribbble.com/users/454765/screenshots/11405947/media/d6c6860102c9619ffdc3fb84b56d3183.gif'
    }

]
export const BlogCard = () => {
  return (
    <div className='grid grid-flow-col gap-5'>
    {
        Blogs.map((blog) => {
            return (
                <motion.div 
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 0.5,type: 'tween',
                ease: 'easeInOut'}}
                whileHover={{scale: 1.25,
                transition: {duration: 0.5, type: 'tween', ease: 'easeInOut'}

                }}
                className='w-52 h-72 bg-gray-200 custom-border-radius'>
                    <img src={blog.image} alt='blog' className='w-full h-30 object-cover custom-border-radius'/>
                    <div className='p-2'>
                        <h3 className='text-lg font-semibold text-black'>{blog.title}</h3>
                        <p className='text-sm text-gray-500'>{blog.date}</p>
                        <p className='text-sm text-gray-500'>{
                            blog.description.length > 50 ? blog.description.substring(0, 50) + '...' : blog.description

        }</p>
                    </div>
                </motion.div>
            )
        }
        )
    }
   
    </div>

  )
}