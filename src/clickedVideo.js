import React from 'react';
import ReactPlayer from "react-player";
import "./clickedVideo.css"
import Avatar from '@material-ui/core/Avatar';
import profile from "./profile.jpg";

function ClickedVideo({title, views, channel, date, url, display}) {
    return (
        <div className="ClickedVideo">
            <ReactPlayer width="800px" height="420px" volume={1} controls={true} url={url} />
            <div className="vidInfo">
            <h1>{title}</h1>
            <span className="VideoViews">Views: {views} ~ </span><span className="VideoDate"> {date}</span>
            <h2>
                <Avatar 
                alt=""
                src={profile}
                className="profilePic" />
                 {channel}
            </h2>
            </div>
        </div>
    )
}

export default ClickedVideo
