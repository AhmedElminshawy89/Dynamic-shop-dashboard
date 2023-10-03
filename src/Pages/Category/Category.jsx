import React, { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import './Category.css'
import GameCard from '../../Components/GameCard/GameCard'

export default function Category({games,reference2,search,handleSearch}) {

  return (
    <section id="categories" className="category" ref={reference2}>
     <div className="container">
       <div className="row">
        <div className="searchBox">
          <i><AiOutlineSearch/></i>
          <input type='text' name='search' placeholder='Search' onChange={handleSearch}/>
        </div>
       </div>
       <GameCard games={games}/>
     </div>
    </section>
  )
}
