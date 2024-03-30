import { useState } from 'react'
//import Navbar from './components/Navbar/index'
//import Main from './components/Main/index'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navber from '../src/components/Navbar/index'
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import Singup from "./Pages/Regiter"

import Artists from "./Pages/Artists"
import Gallery from "./Pages/Gallery"
import Blog from "./Pages/Blog"
import './App.css'


function App() {
  const [count, setCount] = useState(0)
  return (
    <BrowserRouter>
      <Navber />

      <Routes>
        <Route >
          <Route path="Artists" element={<Artists />} />
          <Route path="Gallery" element={<Gallery />} />
          <Route path="Blog" element={<Blog />} />

          <Route path="Home" element={<Home />} />
          <Route path="Login" element={<Login />} />
          <Route path="Singup" element={<Singup />} />

        </Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
