import React from 'react'
import ReactPlayer from 'react-player';
import "./extendedVideo.css"

function ExtendedVideo(props) {
    return (
        <div className="ExtendedVideo">
            <ReactPlayer playing={true} height={props.height} width={props.width} url={props.url} volume={props.volume} loop={true}/>
        </div>
    )
}

export default ExtendedVideo
