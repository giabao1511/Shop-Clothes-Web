import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Catalogue from './pages/Catalogue'
import Product from './pages/Product'
import Home from './pages/Home'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<Product />} />
        <Route path="contact" element={<Catalogue />} />
      </Route>
    </Routes>
  )
}

export default App