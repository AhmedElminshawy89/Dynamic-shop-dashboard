import React, { useContext, useState } from 'react'
import GameCard from '../../Components/GameCard/GameCard'
import Table from 'react-bootstrap/Table';
import './Bag.css'
import { AiFillDelete } from 'react-icons/ai';
import { AppContext } from '../../App';

export default function Bag({games,reference4}) {

  const {bag,setBag} =useContext(AppContext) 

  const handleDeleteFromCart = (game)=>{
    setBag(bag.filter(item=>item.id!==game.id))
  }

  return (
    <section id="bag" className="bag" ref={reference4}>
      <div className="container">
        <div className="row">
          <h1>My Bag</h1>
        </div>
        <div className="row">
          {games.length===0?(
            <h1 className='empty'>Your Bag is empty</h1>
          ):(
            <div className="table">
                <Table striped bordered hover variant="dark">
                  <thead>
                    <tr>
                      <th>n</th>
                      <th>Preview</th>
                      <th>Game</th>
                      <th>Price</th>
                      <th>Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      games.map((game,index)=>(
                        <tr>
                          <td>{index+1}</td>
                          <td><img src={game.background_image} alt={game.name} /></td>
                          <td>{game.name}</td>
                          <td>$30</td>
                          <td><i onClick={()=>handleDeleteFromCart(game)}><AiFillDelete/></i></td>
                        </tr>
                      ))
                    }
                    <tr >
                      <td></td>
                      <td colSpan={2}>Total Item</td>
                      <td>{games.length}</td>
                    </tr>
                    <tr >
                      <td></td>
                      <td colSpan={2}>Total: </td>
                      <td>{30 * `${games.length}`}</td>
                    </tr>
                  </tbody>
                </Table>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
