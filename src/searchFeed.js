import React, { Component } from 'react';
import Logo from "./logo.png";
import './feed.css';
import Video from "./video";


function SearchedFeed(props) {
    
    var semiVids = props.vids;

  function filtering(vid) {
    var path = window.location.pathname;
    var input = path.substring(8, path.length).toLowerCase();
    return vid.title.toLowerCase().includes(input)
  }  


  var filteredVids = semiVids.filter(filtering)

  var handleFilter = () => {
    return filteredVids.map(vid => <Video title={vid.title} 
      desc={vid.desc} views={vid.views} 
      channel={vid.channel} thumbnail={vid.thumbnail} date={vid.date} url={vid.url} key="" />)
     }
  //}
    


  return (
    <div className="SearchedFeed">
        {handleFilter()}

    </div>
  );
}

export default SearchedFeed;
