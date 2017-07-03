import React from 'react';

const VideoListItem = ({video,onVideoClick}) => {
    // const video = props.video;
    const img_URL = video.snippet.thumbnails.default.url;

    return (
        <li onClick = {() => onVideoClick(video)}className = "list-group-item">
            <div className = "video-list media">
                <div className = "media-left">
                    <img className = "media-object" src = {img_URL}/>
                </div>
                <div className = "media-body">
                    <div className = "media-heading"></div>
                        {video.snippet.title}
                </div>
            </div>
        </li>
    );
}

export default VideoListItem;