import React from 'react'
import { IoBagHandleSharp } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
    const bag = useSelector(store => store.bag);
    const navigate=useNavigate();
  return (
  
    <header>
        <div className="logo_container">
            <Link to="/"><img className="myntra_home" src="images/myntra_logo.webp" alt="Myntra Home"/></Link>
        </div>
        <nav className="nav_bar">
            <a href="#">Men</a>
            <a href="#">Women</a>
            <a href="#">Kids</a>
            <Link to='/'>Home & Living</Link>
            <a href="#">Beauty</a>
            <a href="#">Studio <sup>New</sup></a>
        </nav>
        <div className="search_bar">
            <span className="material-symbols-outlined search_icon"></span>
            <input className="search_input" placeholder="Search for products, brands and more"/>
        </div>
        <div className="action_bar">
            <div className="action_container">
            <CgProfile />
                <span className="action_name">Profile</span>
            </div>

            <div className="action_container">
            <CiHeart />
            <span className="action_name">WishList</span>
            </div>

            <Link className="action_container" to="/Bag">
               <IoBagHandleSharp />
               <span className="action_name">Bag</span>
                <span className="bag-item-count">{bag.length}</span>
            </Link>
        </div>
    </header>
   

  )
}

export default Header
