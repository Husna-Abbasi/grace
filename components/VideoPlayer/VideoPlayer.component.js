import React from 'react';
import ReactPlayer from 'react-player';
const VideoPlayerComponent = ({ videoUrl, onPlay, onProgress, onPause, onReady, playing, playBackRate = 1 }) => {

    return (
        <div>
            <ReactPlayer
                url={videoUrl}
                onReady={onReady}
                onPlay={onPlay}
                onProgress={onProgress}
                onPause={onPause}
                controls
                width={520}
                height={270}
                playing={playing}
                playbackRate={playBackRate}
            />
        </div>
    );
};

export default VideoPlayerComponent;
