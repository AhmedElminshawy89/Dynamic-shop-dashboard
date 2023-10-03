import React, { useState } from 'react';
import {BsController} from 'react-icons/bs';
import NavListData from '../../assests/data/slideBarLink';
import {BsMeta,BsFillShareFill} from 'react-icons/bs';
import {FaXTwitter} from 'react-icons/fa6';
import {AiOutlineYoutube} from 'react-icons/ai'
import './SideMenu.css';
export default function SideMenu({active,sectionActive}) {

    const [navData,setNavData] = useState(NavListData)

    const handleNewOnClick = (id,target) =>{
        console.log(id)
        const newNavData =navData.map(nav=>{
            nav.active=false;
            if(nav.id===id) nav.active=true;
            return nav
        })
        setNavData(newNavData)
        sectionActive(target)
    }

  return (
    <div className={`sideMenu ${active?"active":undefined}`}>
        <a href="#" className="logo">
            <i><BsController/></i>
            <span className='brand'>Play</span>
        </a>
        <ul className="nav">
            {
                navData.map((link)=>(
                    <li key={link._id}>
                        <a className={`${link.active ? "active" : undefined }`}
                        onClick={()=>handleNewOnClick(link._id,link.target)}>
                            <i className='icon'>{link.icon}</i>
                            <span className='name'>{link.name}</span>
                        </a>
                    </li>
                ))
            }
        </ul>
        <ul className="social">
            <li>
                <a>
                    <i><BsMeta/></i>
                </a>
            </li>
            <li>
                <a>
                    <i><FaXTwitter/></i>
                </a>
            </li>
            <li>
                <a>
                    <i><AiOutlineYoutube/></i>
                </a>
            </li>
            <li>
                <a className='share'>
                    <i><BsFillShareFill/></i>
                </a>
            </li>
        </ul>
    </div>
  )
}
