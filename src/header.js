import React, { Component, useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Logo from "./logo.png";
import './header.css';
import Avatar from '@material-ui/core/Avatar';
import profile from "./profile.jpg"
import $ from "jquery";
import { Link } from "react-router-dom";

const handleClick  = () => {
      $(".menu-logo").css("background-color", "rgb(81, 48, 148)")
    setTimeout(function(){
      $(".menu-logo").css("background-color", "transparent")
    }, 100)

}

const handleReload = () => {
  var refresh = window.localStorage.getItem('refresh');
  if (refresh===null){
      window.location.reload();
      window.localStorage.setItem('refresh', "1");
  }
}


function Header(props) {
  const [inputSearch, setInputSearch] = useState("");

  return (
    <div className="Header">
        <div className="header-left">
            <MenuIcon style={{fill: "white"}} className="menu-logo" onClick={handleClick} />
            <Link to="/"> 
              <img src={Logo} alt="" className="logo" />
            </Link>

        </div>
        <div className="header-center">
            <input value={inputSearch} onChange={e => setInputSearch(e.target.value)} type="text" placeholder="Search..." className="search-bar" />
            <Link to={`/search/${inputSearch}`} >
              <SearchIcon className="searchIcon" onClick={handleReload()}/>
            </Link>

        </div>
        <div className="header-right" >
            <Avatar 
            alt=""
            src={profile}
            
            />
        </div>
    </div>
  );
}

export default Header;
