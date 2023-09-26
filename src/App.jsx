
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Error } from './pages/Error'

function App() {
  

  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="*" element={<Error />} />
            <Route path="blog" element={<Home />}/>
            <Route path="contato" element={<Home />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
