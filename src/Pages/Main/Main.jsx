import React, { useEffect, useRef, useState } from 'react';
import './Main.css';
import SideMenu from '../../Components/SideMenu/SideMenu';
import Banner from '../../Components/Banner/Banner';
export default function Main() {

  const [active,setActive] = useState(false)

  const [games,setGames] = useState([])
  const [search,setSearch] = useState('')
  const handleSearch = (e)=>{
      setGames(games.filter(game=>
        game.name.toLowerCase().includes(e.target.value.toLowerCase())
         ))
    setSearch(e.target.value)
  }

  const homeRef = useRef()
  const categoryRef = useRef()
  const libraryRef = useRef()
  const bagRef = useRef()


  const sections = [
    {
      name:'home',
      ref: homeRef,
      active:true
    },
    {
      name:'categories',
      ref: categoryRef,
      active:false
    },
    {
      name:'library',
      ref: libraryRef,
      active:false
    }
    ,
    {
      name:'bag',
      ref: bagRef,
      active:false
    }
  ]
  const handleActiveSection = (target)=>{
    sections.map(section=>{
      section.ref.current.classList.remove('active')
      if(section.ref.current.id===target){
        section.ref.current.classList.add('active')
      }
      return section 
    })
  }
  const fetchData = () =>{
    fetch('https://api.rawg.io/api/games?key=07363b3b5ed94051aee07935d5e0e239')
    .then(res=>res.json())
    .then(data=>{
      setGames(data.results)
      console.log(data.results)
    })
    .catch(e=>console.log(e.message ))
  }
  useEffect(()=>{
    fetchData()
  },[])

  const handleToggleActive = () =>{
    setActive(!active)
  }  

  return (
    <main>
        <SideMenu active={active} sectionActive={handleActiveSection}/>
        <Banner reference={homeRef} 
        reference2={categoryRef}reference3={libraryRef}
        referencee={bagRef} games={games} active={active}
        search={search} handleSearch={handleSearch} toggleActive={handleToggleActive}/>
    </main>
  )
}
