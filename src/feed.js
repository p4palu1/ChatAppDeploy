import React, { Component } from 'react';
import Logo from "./logo.png";
import './feed.css';
import Video from "./video";
import ExtendedVideo from "./extendedVideo"



function Feed(props) {

  const handleFilter = () => {
//    if(window.loca){

    //}
  //  else{
    return props.vids.map(vid => <Video title={vid.title} 
      desc={vid.desc} views={vid.views} 
      channel={vid.channel} thumbnail={vid.thumbnail} url={vid.url} date={vid.date} key="" />)
     }
  //}
    
  


  return (
    <div className="Feed">
        {handleFilter()}
        
        

    </div>
  );
}

export default Feed;
