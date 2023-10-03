import React, { useContext } from 'react';
import {BiSlider} from 'react-icons/bi';
import {RxAvatar} from 'react-icons/rx';
import {BsBagCheck} from 'react-icons/bs';
import {AiOutlineHeart} from 'react-icons/ai';
import './Header.css'
import { AppContext } from '../../App';
export default function Header({toggleActive}) {

    const {bag,library} = useContext(AppContext)

  return (
    <header>
        <a href="#" className='menu'>
            <i onClick={toggleActive}><BiSlider/></i>
        </a>
        <div className="userItem">
            <a href="#" className="icon">
                <i><AiOutlineHeart/></i>
                <span className='like'>{library.length}</span>
            </a>
            <a href="#" className="icon">
                <i><BsBagCheck/></i>
                <span className='bag'>{bag.length}</span>
            </a>
            <div className="avatar">
                <a href="#">
                    <i><RxAvatar/></i>
                </a>
                <div className="user">
                    <span>user name</span>
                    <a href="#">View Profile</a>
                </div>
            </div>
        </div>
    </header>
  )
}
