import { SiFacebook, SiGithub, SiInstagram, SiLinkedin } from 'react-icons/si'
//add contact form
//and some socal LiaLinkSolid
const Contact = () => {
  return (
    <div>
        <h1 className='text-2xl font-bold text-center'>Contact Me</h1>
        <div className='flex justify-center space-x-4 my-4'>
            <a href='https://www.linkedin.com/in/diwakar-neupane-4b9b0b1b5/' className='text-gray-400 hover:text-blue-500 transition-transform ease-in-out hover:scale-125'>
            <SiFacebook className='w-6 h-6'/>
            </a>
            <a href='https://www.facebook.com/war.hunter.315' className='text-gray-400 hover:text-blue-500 transition-transform ease-in-out hover:scale-125'>
            <SiInstagram className='w-6 h-6'/>
            </a>
            <a href='https://www.instagram.com/diwakarneupane264/' className='text-gray-400 hover:text-blue-500 transition-transform ease-in-out hover:scale-125'>
            <SiGithub className='w-6 h-6'/>
            </a>
            <a href='https://x.com/Diwakar26445' className='text-gray-400 hover:text-blue-500 transition-transform ease-in-out hover:scale-125'>
            <SiLinkedin className='w-6 h-6'/>
            </a>
        </div>
        <form className='flex flex-col items-center flex-center'>
            <input type='text' placeholder='Name' className='w-1/3 p-2 my-2 border border-gray-300 rounded-md'/>
            <input type='email' placeholder='Email' className='w-1/3 p-2 my-2 border border-gray-300 rounded-md'/>
            <textarea placeholder='Message' className='w-1/3 p-2 my-2 border border-gray-300 rounded-md'/>
            <button className='w-1/3 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition-transform ease-in-out hover:scale-105'>Submit</button>
        </form>

     
    </div>
  )
}

export default Contact