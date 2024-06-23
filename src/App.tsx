import { Route, Routes } from 'react-router-dom'
import './App.css'
import { MainGrid } from './Components/MainGrid'
import Navbar from './Components/Navbar'
import Blog from './Components/Blog'
import About from './Components/About'
import Contact from './Components/Contact'
function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<MainGrid />} />
        <Route path="/about" element={<About/>} />
        <Route path='/Blog' element={<Blog/>} />
        <Route path='*' element={<h1>404 Not Found</h1>} />
        <Route path="/Contact" element={<Contact/>} />
      </Routes>
    </>
  )
}

export default App
