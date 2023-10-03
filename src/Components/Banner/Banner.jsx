import React, { useContext } from 'react'
import './Banner.css'
import Header from '../Header/Header'
import Root from '../../Pages/Root/Root'
import { BrowserRouter } from 'react-router-dom'
import Home from '../../Pages/Home/Home'
import Category from '../../Pages/Category/Category'
import Library from '../../Pages/Library/Library'
import Bag from '../../Pages/Bag/Bag'
import { AppContext } from '../../App'
function Banner({toggleActive,active,games,reference,reference2,reference3,referencee,search,handleSearch}) {

const {library,bag} = useContext(AppContext)

  return (
    <div className={`banner ${active?"active":undefined}`}>
        <Header toggleActive={toggleActive}/>
        <div className='container-fluid'>
            <Home games={games} reference={reference}/>
            <Category games={games}  reference2={reference2} search={search} handleSearch={handleSearch}/>
            <Library games={library} reference3={reference3}/>
            <Bag games={bag} reference4={referencee}/>
        </div>
    </div>
  )
}

export default Banner