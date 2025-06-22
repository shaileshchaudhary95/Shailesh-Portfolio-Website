import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Components/Navbar/Header'
import { About, Contact, Education, Home, Project } from './Pages/Index'
import './App.css'

function App() {
  return (
    <BrowserRouter>
    <Header />
     <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/education' element={<Education />} />
        <Route path='/project' element={<Project />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter> 
  )
}

export default App