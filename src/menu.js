import React, { Component } from 'react';
import Logo from "./logo.png";
import './menu.css';
import HomeIcon from '@material-ui/icons/Home';
import NewReleasesIcon from '@material-ui/icons/NewReleases';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import $ from 'jquery';


function Menu(props) {


  return (
    <div className="Menu">
        <ul>
          <li className="home" >
            <HomeIcon className="home-icon" style={{fill: "rgb(196, 53, 196)"}}/>
            <span className="home-page"> home page</span>
          </li>
          <li className="new">
            <NewReleasesIcon  className="new-icon"/>
            <span>What's new?</span>
          </li>
          <li className="sub">
            <SubscriptionsIcon className="sub-icon"/>
            <span> Subsriptions</span>
          </li>
        </ul>
    </div>
  );


}

export default Menu;
