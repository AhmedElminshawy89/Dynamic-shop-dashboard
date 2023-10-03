import React from 'react'
import GameSwipper from '../../Components/GameSwipper/GameSwipper'
import { AiFillHeart, AiFillStar, AiOutlineArrowRight } from 'react-icons/ai'
import '../Home/Home.css'
import { BsBagCheckFill } from 'react-icons/bs'
import GameRating from '../../Components/GameRating/GameRating'
import GameCard from '../../Components/GameCard/GameCard'

export default function Home({games,reference}) {





  return (
    <section id='home' className='home active' ref={reference}>
      <div className="container-fluid">
        <div className="row">
          <GameSwipper games={games}/>
        </div>
        <div className="boxes ">
          <div className="col-lg-6">
            <h2 className="sectionTitle">Games on promotion</h2>
          </div>
          <div className="col-lg-6">
            <a href="#" className="viewInfo">View More Games <i><AiOutlineArrowRight/></i></a>
          </div>
        </div>
          <GameCard games={games}/>
      </div>
    </section>
  )
}
