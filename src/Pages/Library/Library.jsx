import React from 'react'
import GameCard from '../../Components/GameCard/GameCard';
import './Library.css'

export default function Library({games,reference3}) {
  return (
    <section id="library" className="library" ref={reference3}>
      <div className="container">
        <div className="row">
          <h1>My Library</h1>
        </div>
        <div className="row">
          {games.length===0?(
            <h1 className='empty'>Your library is empty</h1>
          ):(
            <GameCard games={games}/>
          )}
        </div>
      </div>
    </section>
  )
}
