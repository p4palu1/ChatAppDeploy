import React, { Component } from 'react';
import "./video.css";
import Avatar from '@material-ui/core/Avatar';
import profile from "./profile.jpg";
import ReactPlayer from "react-player"
import ExtendedVideo from "./extendedVideo" 

function Video(props) {

  var handleTime = () => {
    var currentDate = new Date(); 
    var videoDate = props.date


    var years = currentDate.getFullYear() - videoDate.getFullYear();
    var months = currentDate.getMonth() - videoDate.getMonth()
    var days = currentDate.getDate() - videoDate.getDate()

    if(years == 0){
      
      if(months == 0){
        
          return days + " Days ago"

      }
      else{
        return months + " Months ago"
      }

    }
    else{
      return years + " Years ago"
    }


  }


var handleViews = () => {
  if(props.views > 1000000000){
    return Math.floor(props.views/1000000000) + "B"
  }
  else if(props.views > 1000000){
    return Math.floor(props.views/1000000) + "M"
  }
  else if(props.views > 1000){
    return Math.floor(props.views/1000) + "K"
  }
  else{
    return props.views
  }
}

const handleDisplay = () => {

}

  return (
    <div className="Video">
        <img src={props.thumbnail} alt="" className="thumbnail"  />
        <ExtendedVideo height="180px" width="300px" url={props.url} volume="0"/>
        <div className="video-details">
            <h1 className="title">{props.title}</h1>
            
            <div className="user">
                <Avatar 
                alt=""
                src={profile}
                />
                <span className="channel">{props.channel}</span> 
                <span className="views">views: {handleViews()} ~ </span>
                <span className="Time">{handleTime()}</span>
            </div>
            
            
        </div>
    </div>
    
  );
}

export default Video;
