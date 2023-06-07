import React, { useState, useRef } from 'react';

const Player = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);

    const togglePlay = () => {
        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div>
        <div style={{ position: "relative" }}>
            <video
                ref={videoRef}
                width="100%"
                height="100%"
                autoPlay
                Looping
            >
                <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
            </video>
            <button
                onClick={togglePlay}
                // style={{
                //     position: "absolute",
                //     top: "50%",
                //     left: "50%",
                //     transform: "translate(-50%, -50%)",
                //     zIndex: 1,
                // }}
            >
                {isPlaying ? "Pause" : "Play"}
            </button>
        </div>
        </div>

    )
}

export default Player;