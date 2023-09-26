
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Blog } from './pages/Blog'
import { Contact } from './pages/Contact'

function App() {
  

  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="blog" element={<Blog/>}/>
            <Route path="contato" element={<Contact />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
