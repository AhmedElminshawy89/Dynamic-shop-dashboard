import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Home from '../Home/Home'
import Category from '../Category/Category'
import Library from '../Library/Library'
import Bag from '../Bag/Bag'

export default function Root() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='category' element={<Category/>} />
        <Route path="library" element={<Library/>} />
        <Route path="bag" element={<Bag/>} />
      </Routes>
    </Router>
  )
}
