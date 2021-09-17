import React, {useState} from 'react';
import Video from "./video";
import ClickedVideo from "./clickedVideo";


function Container({title, desc, views, channel, thumbnail, url, date}) {

    const closed = ["block", "none"];
    const open = ["none", "block"]; 
    const [displayPic, setDisplayPic] = useState(closed);

    function handleClick(){
        
        if(displayPic == closed){
            setDisplayPic( displayPic => open)
        }
        else{
            setDisplayPic( displayPic => closed)
        }
    }

    return (
        <div className="Container">
                <Video title={title} 
                desc={desc} views={views} 
                channel={channel} thumbnail={thumbnail} 
                url={url} date={date} key="" onClick={handleClick} style={{display: `${displayPic[1]}` }}/> 

                <ClickedVideo title={title} 
                views={views} 
                channel={channel} url={url} onClick={handleClick} style={{display: `${displayPic[0]}` }} key=""/>    

        </div>
    )
}

export default Container
