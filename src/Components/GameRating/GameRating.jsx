import React, { useEffect, useState }  from 'react'
import { AiFillStar } from 'react-icons/ai';

export default function GameRating({rating}) {

    const [stars,setStars] = useState([])

    const generateStars = () =>{
        let star=[];

        if(rating>5 || rating<1){
            return;
          }
        for(let i=0;i<rating;i++){
            star.push(i)
          }
          return star
    
      }
      useEffect(()=>{
        setStars(generateStars())
      },[])
  return (
    <>
        {
            stars.map(star=>(
                <i key={star}><AiFillStar/></i>
            ))
        }
    </>
  )
}
