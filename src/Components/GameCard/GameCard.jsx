import React, { useContext } from 'react'
import { AiFillHeart } from 'react-icons/ai'
import { BsBagCheckFill } from 'react-icons/bs'
import GameRating from '../../Components/GameRating/GameRating'
import { AppContext } from '../../App'
export default function GameCard({games}) {

  const {library,setLibrary,bag,setBag} = useContext(AppContext)

  const handleAddToLibrary = game =>{
      setLibrary([...library,game])
  }
  const handleRemoveToLibrary = game =>{
    setLibrary(library.filter(item=>item.id!==game.id))
  }

  const handleAddToBag = game =>{
    if(bag.includes(game))return;
    setBag([...bag,game])
}
  return (
<div className='promotion'>
{
            games.map(game=>(
              <div className="box" key={game.id}>
              <img src={game.background_image} alt="" />
              <a href="#" className={`like ${library.includes(game)?'active':''}`} onClick={
                library.includes(game)
                ?()=>handleRemoveToLibrary(game):
                ()=>handleAddToLibrary(game)

              }>
                <i><AiFillHeart/></i>
              </a>
                <div className="game-feature">
                  <span className="gameType">{game.released}</span>
                  <span className='rating'>
                    <GameRating rating={game.rating}/>
                  </span>
                </div>
                <div className="gameTitle">{game.name}</div>
                <div className="gamePrice">
                  <div className="percent">30%</div>
                </div>
                <a href="#" className="addBag" onClick={()=>handleAddToBag(game)}><i><BsBagCheckFill/></i></a>
              </div>
            ))
          }
</div>
  )
}
